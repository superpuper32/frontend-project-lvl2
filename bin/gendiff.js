#!/usr/bin/env node
import program from 'commander';

program
  .version('0.1.0')
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .parse(process.argv);
