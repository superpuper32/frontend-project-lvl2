import { readFileSync } from 'node:fs';
import path from 'path';

export const readFile = (filepath) => {
  const currentDirectory = process.cwd();
  return readFileSync(path.resolve(currentDirectory, filepath), 'utf8');
};

export const getType = (filepath) => path.extname(filepath).slice(1);
