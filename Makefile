install:
	npm install

publish:
	npm publish --dry-run

link:
	npm link

run:
	gendiff

gendiff:
	node bin/gendiff.js

lint:
	npx eslint .