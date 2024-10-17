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
  const actual = parsers[format](file);
  const expected = readFile('result.json');

  expect(actual).toEqual(JSON.parse(expected));
});
