import _ from 'lodash';

const formatType = (val) => {
  if (_.isObject(val)) return '[complex value]';

  return (typeof val === 'string' ? `'${val}'` : val);
};

const plain = (astTree, names = []) => {
  const keyNames = !names.length ? '' : names.join('.');

  return astTree
    .filter(({ status }) => status !== 'unchanged')
    .flatMap((node) => {
      const {
        key, status, value, valueFrom, valueTo,
      } = node;
      const propKeyName = !keyNames ? key : `${keyNames}.${key}`;

      switch (status) {
        case 'nested':
          return plain(value, [...names, key]);
        case 'removed':
          return `Property '${propKeyName}' was ${status}`;
        case 'updated':
          return `Property '${propKeyName}' was ${status}. From ${formatType(valueFrom)} to ${formatType(valueTo)}`;
        default:
          return `Property '${propKeyName}' was ${status} with value: ${formatType(value)}`;
      }
    }).join('\n');
};

export default plain;
