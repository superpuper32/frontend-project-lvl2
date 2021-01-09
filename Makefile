install: install-deps

run:
		gendiff

gendiff:
		node bin/gendiff.js

install-deps:
		npm ci

link:
		npm link

test:
		npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
		npx eslint .

publish:
		npm publish