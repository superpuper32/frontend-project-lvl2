import { getFixturePath, readFile } from './utils.js';
import genDiff from '../src/index.js';

describe('genDiff compare correctly', () => {
  test('json files', () => {
    const file1Path = getFixturePath('file1.json');
    const file2Path = getFixturePath('file2.json');
    const expectedFile = readFile('expected_file.txt');

    expect(genDiff(file1Path, file2Path)).toEqual(expectedFile);
  });

  test('yaml files', () => {
    const file1Path = getFixturePath('filepath1.yml');
    const file2Path = getFixturePath('filepath2.yml');
    const expectedFile = readFile('expected_file.txt');

    expect(genDiff(file1Path, file2Path)).toEqual(expectedFile);
  });
});
