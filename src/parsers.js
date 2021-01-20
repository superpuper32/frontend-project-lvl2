import yaml from 'js-yaml';

export default (file, type) => {
  switch (type) {
    case 'json':
      return JSON.parse(file);
    case 'yaml':
      return yaml.load(file);
    default:
      throw Error(`${type} type is not recognised`);
  }
};
