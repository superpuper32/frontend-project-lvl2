import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getFixturePath = (filename) => path.join(__dirname, '__fixtures__', filename);

export const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
