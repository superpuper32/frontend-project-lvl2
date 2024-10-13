import genDiff from './genDiff.js';
import parsers from './parsers.js';
import { readFile, getFileType } from './utils.js';

export default (filepath1, filepath2, formatter) => {
  const file1 = readFile(filepath1);
  const file2 = readFile(filepath2);

  const type1 = getFileType(filepath1);
  const type2 = getFileType(filepath2);

  const parsed1 = parsers[type1](file1);
  const parsed2 = parsers[type2](file2);

  return genDiff(parsed1, parsed2, formatter);
};
