import fs from 'fs';
import path, { dirname } from 'path';

import { fileURLToPath } from 'url';

import { readFile, getType } from '../src/utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('getFileContent return correct ', () => {
  const filePath = getFixturePath('expected.txt');
  const expectedFile = fs.readFileSync(getFixturePath('expected.txt'), 'utf-8');

  expect(readFile(filePath)).toBe(expectedFile);
});

test('getFileType return correct extension', () => {
  expect(getType('/src/index.js')).toBe('js');
  expect(getType('/db/data.json')).toBe('json');
  expect(getType('/')).toBe('');
});
