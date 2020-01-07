
# Jest Badges Generator

This has inteded to be an package that generates jest badges to be used by your README.md or something like.

By default all badges are sended to `.badges` the files will be something like.. 

`badge-branches.svg` ![coverage-branches]( ./.badges/badge-branches.svg)

`badge-functions.svg` ![coverage-function]( ./.badges/badge-functions.svg)

`badge-lines.svg` ![coverage-lines]( ./.badges/badge-lines.svg)

`badge-statements.svg` ![coverage-statements]( ./.badges/badge-statements.svg)


## How to

0. Install this package as development dependency `npm i jest-badge-generator -D`

1. you will need add follwing config to your jest tests section in `package.json` or in your `jest.config.js`

````json
...
  "scripts": {
    "test": "jest --coverage --passWithNoTests",
    "test:make-badges": "npm run test && node . "
  },
  "jest": {
    "coverageReporters": [
        "json",
        "json-summary",
        "lcov",
        "text",
        "text-summary"
    ],
    "testPathIgnorePatterns": [
        "/node_modules/"
    ],
    "testRegex": "(/__tests__/.*|\\.(test|spec))\\.jsx?$"
  },
...
````

2. Run the tests `npm run test:make-badges`



## Library Tests Summary

![coverage-branches]( ./.badges/badge-branches.svg)
![coverage-function]( ./.badges/badge-functions.svg)
![coverage-lines]( ./.badges/badge-lines.svg)
![coverage-statements]( ./.badges/badge-statements.svg)
