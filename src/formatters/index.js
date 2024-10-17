import stylish from './stylish.js';
import plain from './plain.js';

const formatters = {
  stylish: (tree) => stylish(tree),
  plain: (tree) => plain(tree),
  json: (tree) => JSON.stringify(tree),
};

export default (tree, formatName = 'stylish') => formatters[formatName](tree);
