import stylish from './stylish.js';
import plain from './plain.js';

const formatters = {
  stylish: (tree) => stylish(tree),
  plain: (tree) => plain(tree),
};

export default (tree, formatName) => formatters[formatName](tree);
