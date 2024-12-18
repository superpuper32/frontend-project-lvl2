/* eslint "fp/no-let": "off" */
/* eslint "fp/no-mutation": "off" */
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import { beforeEach } from '@jest/globals';

import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (name) => path.join(__dirname, '..', '__fixtures__', name);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const formats = ['json', 'yml'];

let expected; let expectedPlain; let expectedJSON;

beforeEach(() => {
  expected = readFile('expected.txt');
  expectedPlain = readFile('expected_plain.txt');
  expectedJSON = readFile('expected_json.txt');
});

describe('genDiff compare correctly', () => {
  test.each(formats)('%s files', (format) => {
    const f1 = getFixturePath(`file1.${format}`);
    const f2 = getFixturePath(`file2.${format}`);

    expect(genDiff(f1, f2)).toEqual(expected);
  });

  test.each(formats)('%s files in plain format', (format) => {
    const f1 = getFixturePath(`file1.${format}`);
    const f2 = getFixturePath(`file2.${format}`);
    const formatName = 'plain';

    expect(genDiff(f1, f2, formatName)).toEqual(expectedPlain);
  });

  test.each(formats)('%s files in json format', (format) => {
    const f1 = getFixturePath(`file1.${format}`);
    const f2 = getFixturePath(`file2.${format}`);
    const formatName = 'json';

    expect(genDiff(f1, f2, formatName)).toEqual(expectedJSON);
  });

  test('throwed Error for not recognised file type', () => {
    const f1 = getFixturePath('file1.js');
    const f2 = getFixturePath('file2.uml');

    expect(() => genDiff(f1, f2)).toThrow();
  });
});
