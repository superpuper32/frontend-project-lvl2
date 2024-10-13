import _ from 'lodash';

import stringify from './formatters.js';

const genDiff = (data1, data2) => {
  const keys1 = _.keys(data1);
  const keys2 = _.keys(data2);
  const keys = _.union(keys1, keys2);
  const sorted = _.sortBy(keys);

  const results = [];
  sorted.forEach((key) => {
    const value1 = _.get(data1, key);
    const value2 = _.get(data2, key);

    if (!_.has(data1, key)) {
      results.push([` + ${key}`, value2]);
    } else if (!_.has(data2, key)) {
      results.push([` - ${key}`, value1]);
    } else if (value1 === value2) {
      results.push([`   ${key}`, value1]);
    } else {
      results.push([` - ${key}`, value1]);
      results.push([` + ${key}`, value2]);
    }
  });
//   results.sort((a, b) => (a[0].slice(2)).localeCompare(b[0].slice(2)));

  return stringify(Object.fromEntries(results));
};

export default genDiff;
