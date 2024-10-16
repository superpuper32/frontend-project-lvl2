# Difference generator
[![Node CI](https://github.com/superpuper32/frontend-project-lvl2/workflows/Node%20CI/badge.svg)](https://github.com/superpuper32/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/744d0ce22e068d150fd3/maintainability)](https://codeclimate.com/github/superpuper32/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/744d0ce22e068d150fd3/test_coverage)](https://codeclimate.com/github/superpuper32/frontend-project-lvl2/test_coverage)

### Hexlet tests and linter status:
[![Actions Status](https://github.com/superpuper32/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/superpuper32/frontend-project-lvl2/actions)

Console utility that determines the difference between two data structures.

Utility features:

* Support for different input formats: yaml, json

* Generating a report in plain text, stylish and json format

## Usage example

format stylish of determining the difference between JSON files

```sh
$ gendiff filepath1.json filepath2.json
```
<a href="https://asciinema.org/a/UfuLktGU3uq4b2gcdbpJj17Yl" target="_blank"><img src="https://asciinema.org/a/UfuLktGU3uq4b2gcdbpJj17Yl.svg" width="400px" /></a>

format stylish of determining the difference between YAML files

```sh
$ gendiff filepath1.yml filepath2.yml
```
<a href="https://asciinema.org/a/nqp7YMW071rLG12OfnN84xOAT" target="_blank"><img src="https://asciinema.org/a/nqp7YMW071rLG12OfnN84xOAT.svg" width="400px" /></a>

Recursion comparison json or yaml in stylish format

```sh
$ gendiff filepath1.yml filepath2.yml
```
<a href="https://asciinema.org/a/qIytf5shxickOrtmhRpz5SLcq" target="_blank"><img src="https://asciinema.org/a/qIytf5shxickOrtmhRpz5SLcq.svg" width="400px" /></a>