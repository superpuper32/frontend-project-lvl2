import { test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { genDiff } from '../src/utils.js';
import parseFile from '../src/parsers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

describe('genDiff parse files correctly', () => {
  test('json type', () => {
    const file1Path = readFile('file1.json');
    const file2Path = readFile('file2.json');
    const expectedResult = readFile('expected_file.txt');

    expect(genDiff(parseFile(file1Path, 'json'), parseFile(file2Path, 'json'))).toBe(
        expectedResult
    );
  });

  test('yaml type', () => {
    const file1Path = getFixturePath('filepath1.yml');
    const file2Path = getFixturePath('filepath2.yml');
    const expectedResult = readFile('expected_file.txt');

    expect(genDiff(parseFile(file1Path, 'yaml'), parseFile(file2Path, 'yaml'))).toBe(
      expectedResult
    );
  });
});
