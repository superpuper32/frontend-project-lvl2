import fs from 'fs';
import path from 'path';
import { genDiff } from './utils.js';

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

  return genDiff(JSON.parse(fileContents1), JSON.parse(fileContents2));
};
