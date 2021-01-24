import { getFixturePath, readFile } from './utils.js';
import { fileURLToPath } from 'url';

import { genDiff } from '../src/utils.js';
import parseFile from '../src/parsers.js';

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
