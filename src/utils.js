import fs from 'fs';
import path from 'path';
import _ from 'lodash';

export const genDiff = (data1, data2) => {
  const keys1 = _.keys(data1);
  const keys2 = _.keys(data2);
  const keys = _.union(keys1, keys2);

  const results = [];
  keys.forEach((key) => {
    const value1 = _.get(data1, key);
    const value2 = _.get(data2, key);

    if (!_.has(data1, key)) {
      results.push(['  +', `${key}:`, value2]);
    } else if (!_.has(data2, key)) {
      results.push(['  -', `${key}:`, value1]);
    } else if (value1 === value2) {
      results.push(['   ', `${key}:`, value1]);
    } else {
      results.push(['  -', `${key}:`, value1]);
      results.push(['  +', `${key}:`, value2]);
    }
  });
  results.sort((a, b) => a[1].localeCompare(b[1]));

  return `{
    ${results.map((result) => result.join(' ')).join('\n')}
  }`;
};

export const getFileContent = (filepath) => {
  const currentDirectory = process.cwd();
  return fs.readFileSync(path.resolve(currentDirectory, filepath), 'utf8');
};

export const getFileType = (filepath) => path.extname(filepath).slice(1);
