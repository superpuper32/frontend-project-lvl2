import stylish from './stylish.js';
import plain from './plain.js';

const formatters = {
  stylish: (tree) => {
    try {
      return stylish(tree);
    } catch (e) {
      throw new Error(e);
    }
  },
  plain: (tree) => {
    try {
      return plain(tree);
    } catch (e) {
      throw new Error(e);
    }
  },
  json: (tree) => {
    try {
      return JSON.stringify(tree);
    } catch (e) {
      throw new Error(e);
    }
  },
};

export default (tree, formatName = 'stylish') => formatters[formatName](tree);
