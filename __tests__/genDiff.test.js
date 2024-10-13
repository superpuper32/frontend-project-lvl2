import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import { beforeEach } from '@jest/globals';

// import { getFixturePath, readFile } from './utils.js';
import genDiff from '../src/genDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (name) => path.join(__dirname, '..', '__fixtures__', 'plain', name);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

let expected;

beforeEach(() => {
  expected = readFile('expected.txt');
});

describe('genDiff compare correctly', () => {
  test('json files', () => {
    const f1 = JSON.parse(readFile('f1.json'));
    const f2 = JSON.parse(readFile('f2.json'));

    console.log(genDiff(f1, f2));

    expect(genDiff(f1, f2)).toEqual(expected);
  });
});
