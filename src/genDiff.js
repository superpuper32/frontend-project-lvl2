import _ from 'lodash';

const genDiff = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.union(keys1, keys2);
  const sorted = _.sortBy(keys);

  return sorted.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    const diff = { key };
    if (_.isObject(value1) && _.isObject(value2)) {
      diff.status = 'nested';
      diff.value = genDiff(value1, value2);
    } else if (!Object.hasOwn(data1, key)) {
      diff.status = 'added';
      diff.value = value2;
    } else if (!Object.hasOwn(data2, key)) {
      diff.status = 'removed';
      diff.value = value1;
    } else if (data1[key] !== data2[key]) {
      diff.status = 'updated';
      diff.valueFrom = value1;
      diff.valueTo = value2;
    } else {
      diff.status = 'unchanged';
      diff.value = value1;
    }

    return diff;
  });
};

export default genDiff;
