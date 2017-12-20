# unique-iterable-by

Filters yielded values by testing uniqueness with an index, key, or callback.

Optionally lets you set a numeric limit on total unique values yielded.

## Installation

```bash
npm install unique-iterable-by --save
```

The module exports a single function.

## Usage Example

Let’s say you have an iterable collection of person objects and you only want one person with any given name.

```javascript
const uniqueIterableBy = require('unique-iterable-by')

const people = [
  {name: 'John'},
  {name: 'John'},
  {name: 'Stephen'},
]

const u = uniqueIterableBy(people, 'name')
u.next().value // {name: 'John'}
u.next().value // {name: 'Stephen'}
u.next().done // true
```

Or you can use a callback that retrieves the significant value:

```javascript
uniqueIterableBy(people, person => person.name)
```

You can also use the `limit` argument to cap the number of total unique values yielded:

```javascript
const u = uniqueIterableBy(people, 'name', {limit: 1})
u.next().value // {name: 'John'}
u.next().done // true
```

## Related Projects

* [deduplicate](https://github.com/lamansky/deduplicate)
* [unique-array-by](https://github.com/lamansky/unique-array-by)
* [unique-iterable](https://github.com/lamansky/unique-iterable)
* [unique-map](https://github.com/lamansky/unique-map)
* [unique-map-by](https://github.com/lamansky/unique-map-by)
