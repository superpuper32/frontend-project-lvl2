import _ from 'lodash';

const genDiff = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2));

  return _.sortBy(keys).map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    // const diff = { key };

    if (_.isObject(value1) && _.isObject(value2)) {
      // diff.status = 'nested';
      // diff.value = genDiff(value1, value2);
      return { key, status: 'nested', value: genDiff(value1, value2) };
    }
    if (!Object.hasOwn(data1, key)) {
      // diff.status = 'added';
      // diff.value = value2;
      return { key, status: 'added', value: value2 };
    }
    if (!Object.hasOwn(data2, key)) {
      // diff.status = 'removed';
      // diff.value = value1;
      return { key, status: 'removed', value: value1 };
    }
    if (data1[key] !== data2[key]) {
      // diff.status = 'updated';
      // diff.valueFrom = value1;
      // diff.valueTo = value2;
      return {
        key, status: 'updated', valueFrom: value1, valueTo: value2,
      };
    }
    // else {
    //   diff.status = 'unchanged';
    //   diff.value = value1;
    // }

    return { key, status: 'unchanged', value: value1 };
  });
};

export default genDiff;
