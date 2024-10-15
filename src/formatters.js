import _ from 'lodash';

const REPLACER = ' ';
const SPACES_COUNT = 4;
const REPLACERS = {
  nested: '  ',
  unchanged: '  ',
  added: '+ ',
  removed: '- ',
};

const genIndent = (depth, status) => REPLACER.repeat(SPACES_COUNT * depth - 2) + REPLACERS[status];
const bracketIndent = (depth) => REPLACER.repeat(SPACES_COUNT * depth - SPACES_COUNT);

const stringify = (curValue, depth) => {
  if (!_.isObject(curValue)) {
    return curValue;
  }
  const lines = Object.entries(curValue)
    .map(([key, value]) => `${genIndent(depth, 'unchanged')}${key}: ${stringify(value, depth + 1)}`);

  return [
    '{',
    ...lines,
    `${bracketIndent(depth)}}`,
  ].join('\n');
};

const formatDiff = (diffTree) => {
  const iter = (innerTree, depth = 1) => {
    const lines = innerTree.flatMap(({
      status, key, value, valueFrom, valueTo,
    }) => {
      switch (status) {
        case 'removed':
          return `${genIndent(depth, 'removed')}${key}: ${stringify(value, depth + 1)}`;
        case 'added':
          return `${genIndent(depth, 'added')}${key}: ${stringify(value, depth + 1)}`;
        case 'updated':
          return [
            `${genIndent(depth, 'removed')}${key}: ${stringify(valueFrom, depth + 1)}`,
            `${genIndent(depth, 'added')}${key}: ${stringify(valueTo, depth + 1)}`,
          ].join('\n');
        case 'nested':
          return `${genIndent(depth, 'nested')}${key}: ${iter(value, depth + 1)}`;
        default:
          return `${genIndent(depth, 'unchanged')}${key}: ${stringify(value, depth + 1)}`;
      }
    });
    return [
      '{',
      ...lines,
      `${bracketIndent(depth)}}`,
    ].join('\n');
  };

  return iter(diffTree);
};
export default formatDiff;
