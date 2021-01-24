import { genDiff, getFileContent, getFileType } from './utils.js';
import parseFile from './parsers.js';

export default (filepath1, filepath2) => {
  const content1 = getFileContent(filepath1);
  const content2 = getFileContent(filepath2);

  const content1Type = getFileType(filepath1);
  const content2Type = getFileType(filepath2);

  const parsedFile1 = parseFile(content1, content1Type);
  const parsedFile2 = parseFile(content2, content2Type);

  return genDiff(parsedFile1, parsedFile2);
};
