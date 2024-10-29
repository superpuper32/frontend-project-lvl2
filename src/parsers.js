import yaml from 'js-yaml';

import { protect } from './utils.js';

const parsers = {
  json: JSON.parse,
  yml: yaml.load,
  yaml: yaml.load,
};

export default (file, type) => protect(parsers)[type](file);
