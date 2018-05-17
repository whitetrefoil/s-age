s-age-ts
==========

Fork Note
---------

This is forked from [Sebastian Sandqvist](https://github.com/sebastiansandqvist)'s [s-age](https://github.com/sebastiansandqvist/s-age), for TS support and better integrated UT in my team's projects.

This forked one will be available as `@whitetrefoil/s-age-ts` while the original one is `s-age`.

This forked one will use `whitetrefoil` as the main branch and leave the original `master` untouched for easier merging.

The `index.js` file under project's root directory and the `test` directory are the original ones.
Will leave it untouched for easier merging.

Below this line is the **ORIGINAL** README (except title & badges):

--------------------

## Usage
`s-age` is a function that calculates years since a date. Input can be a date string, timestamp, or `Date` object.

```javascript
var age = require('s-age');

age('2012'); // returns 6 (in 2018)
age('Dec 2 2012'); // returns 5 (in January 2018)
age(new Date()); // returns 0
age(1356728100000); // returns 5 (in 2018)
```
