import parsers from './parsers.js';
import genDiff from './genDiff.js';
import format from './formatters/index.js';
import { readFile, getType } from './utils.js';

export default (filepath1, filepath2, formatName = 'stylish') => {
  const file1 = readFile(filepath1);
  const file2 = readFile(filepath2);

  const type1 = getType(filepath1);
  const type2 = getType(filepath2);

  try {
    const parsed1 = parsers[type1](file1);
    const parsed2 = parsers[type2](file2);
    const diffTree = genDiff(parsed1, parsed2);

    return format(diffTree, formatName);
  } catch (e) {
    throw new Error('File not recognised!');
  }
};
