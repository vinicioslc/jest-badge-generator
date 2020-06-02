
# Jest Badges Generator

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/dfdfb0a7e8b84e3f817c73d853ee1675)](https://app.codacy.com/manual/vinicioslc/jest-badge-generator?utm_source=github.com&utm_medium=referral&utm_content=vinicioslc/jest-badge-generator&utm_campaign=Badge_Grade_Dashboard)

This has inteded to be an package that generates jest badges to be used by your README.md or something like.

By default all badges are sended to `.badges` the files will be something like.. 

> has option for convert to png too...

`badge-branches.svg` ![coverage-branches](https://github.com/vinicioslc/jest-badge-generator/raw/master/.badges/badge-branches.png?sanitize=true)

`badge-functions.svg` ![coverage-function](https://github.com/vinicioslc/jest-badge-generator/raw/master/.badges/badge-functions.png?sanitize=true)

`badge-lines.svg` ![coverage-lines](https://github.com/vinicioslc/jest-badge-generator/raw/master/.badges/badge-lines.png?sanitize=true)

`badge-statements.svg` ![coverage-statements](https://github.com/vinicioslc/jest-badge-generator/raw/master/.badges/badge-statements.png?sanitize=true)


## How to

0. Install this package as development dependency `npm i jest-badge-generator -D`

1. you will need add follwing config to your jest tests section in `package.json` or in your `jest.config.js`

````json
...
  "scripts": {
    "test": "jest --coverage",
    "test:make-badges": "npm run test && jest-badge-generator" // you have the options argument to convert for png with `jest-badge-generator --type "png"` this will convert output svg to png
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

## Library Jest Health Summary

![coverage-branches](https://github.com/vinicioslc/jest-badge-generator/raw/master/.badges/badge-branches.png?sanitize=true)
![coverage-function](https://github.com/vinicioslc/jest-badge-generator/raw/master/.badges/badge-functions.png?sanitize=true)
![coverage-lines](https://github.com/vinicioslc/jest-badge-generator/raw/master/.badges/badge-lines.png?sanitize=true)
![coverage-statements](https://github.com/vinicioslc/jest-badge-generator/raw/master/.badges/badge-statements.png?sanitize=true)
