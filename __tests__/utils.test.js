import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { genDiff } from '../src/utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const file1Path = readFile('file1.json');
const file2Path = readFile('file2.json');
const jsonExpected = readFile('expected_file.txt');

test('genDiff', () => {
  expect(genDiff(JSON.parse(file1Path), JSON.parse(file2Path))).toBe(
    jsonExpected,
  );
});
