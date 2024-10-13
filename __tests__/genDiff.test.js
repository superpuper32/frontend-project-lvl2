import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { beforeEach } from '@jest/globals';

import genDiff from '../src/genDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (name) => path.join(__dirname, '..', '__fixtures__', 'plain', name);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

let expected;

beforeEach(() => {
  expected = readFile('expected.txt');
});

describe('genDiff compare correctly', () => {
  test('json files', () => {
    const f1 = JSON.parse(readFile('f1.json'));
    const f2 = JSON.parse(readFile('f2.json'));

    expect(genDiff(f1, f2)).toEqual(expected);
  });

  test('yml files', () => {
    const f1 = yaml.load(readFile('f1.yml'));
    const f2 = yaml.load(readFile('f2.yml'));

    expect(genDiff(f1, f2)).toEqual(expected);
  });
});
