import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';

import parsers from '../src/parsers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (name) => path.join(__dirname, '..', '__fixtures__', 'parsers', name);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const formats = ['json', 'yml', 'yaml'];

test.each(formats)('%s', (format) => {
  const file = readFile(`file.${format}`);
  const actual = parsers(file, format);
  const expected = readFile('result.json');

  expect(actual).toEqual(JSON.parse(expected));
});

test('throw Error for not recognised file type', () => {
  const file = readFile('file.json');
  const wrongFormat1 = 'js';
  const wrongFormat2 = 'uml';

  expect(() => parsers(file, wrongFormat1)).toThrow(new Error(`File type ${wrongFormat1} not recognised`));
  expect(() => parsers(file, wrongFormat2)).toThrow(new Error(`File type ${wrongFormat2} not recognised`));
});
