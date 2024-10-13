import { genDiff, readFile, getFileType } from './utils.js';
import parsers from './parsers.js';

export default (filepath1, filepath2) => {
  const content1 = readFile(filepath1);
  const content2 = readFile(filepath2);

  const type1 = getFileType(filepath1);
  const type2 = getFileType(filepath2);

  const parsedFile1 = parsers[type1](content1);
  const parsedFile2 = parsers[type2](content2);

  return genDiff(parsedFile1, parsedFile2);
};
