# sort-by

`sort-by` is a lightweight alternative to the Lodash sortBy function. If you are pulling in lodash.sortby as a dependency, you should be able to switch it out for this with minor adjustments and save on your bundle size.

## Usage

Add this to your project, I suggest a `sortBy.js` file in a services or utils folder somewhere.

```js
import sortBy from './path/to/sortBy.js'

const sorted = sortBy(someArray, sortByProps)
```

### Options

The function takes two parameters with an optional third. The first is the array you want sorted. This function expects an array of objects. If you are trying to sort an array of strings or numbers, you should use the native `Array.sort` method.

The second parameter is an array of properties that you want to sort by, in order. To do a reverse sort on a given property, prefix it with `-`. (See example below).

The third parameter is optional and will do a case-sensitive sort. By default the sort will be case-insensitive (will convert values to lower-case before comparing them in the sort function).

### Example

```js
const myArray = [
  {
    name: 'Mike',
    age: 29
  },
  {
    name: 'Joe',
    age: 31
  }
]

const nameSort = sortBy(myArray, ['name']) // sort by name

const ageSort = sortBy(myArray, ['-age']) // reverse sort by age

const sensitiveSort = sortBy(myArray, ['name'], true) // does a case sensitive search
```
