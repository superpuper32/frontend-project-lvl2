import { readFileSync } from 'node:fs';
import path from 'path';

export const readFile = (filepath) => {
  const currentDirectory = process.cwd();
  return readFileSync(path.resolve(currentDirectory, filepath), 'utf8');
};

export const getType = (filepath) => path.extname(filepath).slice(1);

export const protect = (obj) => {
  const keys = Object.keys(obj);

  const handler = {
    get(target, prop) {
      if (!keys.includes(prop)) {
        throw new Error(`File type ${prop} not recognised`);
      }
      return target[prop];
    },
  };

  return new Proxy(obj, handler);
};
