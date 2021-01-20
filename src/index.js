import fs from 'fs';
import path from 'path';
import { genDiff } from './utils.js';
import parseFile from './parsers.js';

export default (filepath1, filepath2) => {
  const currentDirectory = process.cwd();

  const fileContents1 = fs.readFileSync(
    path.resolve(currentDirectory, filepath1),
    'utf8',
  );
  const fileContents2 = fs.readFileSync(
    path.resolve(currentDirectory, filepath2),
    'utf8',
  );

  const parsedFile1 = parseFile(fileContents1, 'json');
  const parsedFile2 = parseFile(fileContents2, 'json');

  return genDiff(parsedFile1, parsedFile2);
};
