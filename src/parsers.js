import yaml from 'js-yaml';

export default (file, type) => {
  switch (type) {
    case 'json':
      return JSON.parse(file);
    case 'yml':
      return yaml.load(file);
    default:
      throw new Error(`${type} type is not recognised`);
  }
};
