import parseFile from '../src/parsers.js';
import { readFile } from './utils.js';

describe('genDiff parse files correctly', () => {
  test('json type', () => {
    const processObject = process.env.PATH;
    const expectedResult = JSON.stringify(processObject);

    expect(parseFile(expectedResult, 'json')).toEqual(processObject);
  });

  test('yaml type', () => {
    const yamlFile = readFile('filepath2.yml');
    const expectedResult = { timeout: 20, verbose: true, host: 'hexlet.io' };

    expect(parseFile(yamlFile, 'yml')).toEqual(expectedResult);
  });

  test('unknown type', () => {
    const txtFile = readFile('expected_file.txt');

    expect(() => {
      parseFile(txtFile, 'txt');
    }).toThrowError(/^txt type is not recognised$/);
  });
});
