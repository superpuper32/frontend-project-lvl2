import { getFixturePath, readFile as readFileUtils } from './utils.js';
import { readFile, getFileType } from '../src/utils.js';

describe('utils working correctly', () => {
  test('getFileContent return correct ', () => {
    const filePath = getFixturePath('expected_file.txt');
    const expectedFile = readFileUtils('expected_file.txt');

    expect(readFile(filePath)).toBe(expectedFile);
  });

  test('getFileType return correct extension', () => {
    expect(getFileType('/src/index.js')).toBe('js');
    expect(getFileType('/db/data.json')).toBe('json');
    expect(getFileType('/')).toBe('');
  });
});
