import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import { beforeEach } from '@jest/globals';

import parsers from '../src/parsers.js';
import genDiff from '../src/genDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (name) => path.join(__dirname, '..', '__fixtures__', 'plain', name);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const formats = ['json', 'yml'];

let expected;

beforeEach(() => {
  expected = readFile('expected.txt');
});

describe('genDiff compare correctly', () => {
  test.each(formats)('%s files', (format) => {
    const f1 = parsers[format](readFile(`f1.${format}`));
    const f2 = parsers[format](readFile(`f2.${format}`));

    expect(genDiff(f1, f2)).toEqual(expected);
  });
});
