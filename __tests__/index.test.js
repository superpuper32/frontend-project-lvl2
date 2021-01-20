import { test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

describe('genDiff compare correctly', () => {
  test('json files', () => {
    const file1Path = getFixturePath('file1.json');
    const file2Path = getFixturePath('file2.json');
    const expectedFile = readFile('expected_file.txt');

    expect(genDiff(file1Path, file2Path)).toEqual(expectedFile);
  });

  // test('yaml files', () => {
  //   const file1Path = getFixturePath('filepath1.yml');
  //   const file2Path = getFixturePath('filepath2.yml');
  //   const expectedFile = readFile('expected_file.txt');

  //   expect(genDiff(file1Path, file2Path)).toEqual(expectedFile);
  // });
});
