import { genDiff, readFile, getFileType } from './utils.js';
import parsers from './parsers.js';

export default (filepath1, filepath2) => {
  const content1 = readFile(filepath1);
  const content2 = readFile(filepath2);

  const content1Type = getFileType(filepath1);
  const content2Type = getFileType(filepath2);

  const parsedFile1 = parsers[content1Type](content1);
  const parsedFile2 = parsers[content2Type](content2);

  return genDiff(parsedFile1, parsedFile2);
};
