import stylish from './stylish.js';
import plain from './plain.js';

import { protect } from '../utils.js';

const formatters = {
  stylish: (tree) => stylish(tree),
  plain: (tree) => plain(tree),
  json: (tree) => JSON.stringify(tree),
};

export default (tree, formatName = 'stylish') => protect(formatters)[formatName](tree);
