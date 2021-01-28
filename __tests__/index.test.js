import { getFixturePath, readFile } from './utils.js';
import genDiff from '../src/index.js';

const expectedFile = readFile('expected_file.txt');

describe('genDiff compare correctly', () => {
  test('json files', () => {
    const file1Path = getFixturePath('filepath1.json');
    const file2Path = getFixturePath('filepath2.json');

    expect(genDiff(file1Path, file2Path)).toEqual(expectedFile);
  });

  test('yaml files', () => {
    const file1Path = getFixturePath('filepath1.yml');
    const file2Path = getFixturePath('filepath2.yml');

    expect(genDiff(file1Path, file2Path)).toEqual(expectedFile);
  });
});
