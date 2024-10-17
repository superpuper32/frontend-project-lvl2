import { getFixturePath, readFile as readFileUtils } from './utils.js';
import { readFile, getType } from '../src/utils.js';

describe('utils working correctly', () => {
  test('getFileContent return correct ', () => {
    const filePath = getFixturePath('expected.txt');
    const expectedFile = readFileUtils('expected.txt');

    expect(readFile(filePath)).toBe(expectedFile);
  });

  test('getFileType return correct extension', () => {
    expect(getType('/src/index.js')).toBe('js');
    expect(getType('/db/data.json')).toBe('json');
    expect(getType('/')).toBe('');
  });
});
