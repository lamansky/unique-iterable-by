'use strict'

const assert = require('assert')
const uniqueIterableBy = require('.')

describe('uniqueIterableBy()', function () {
  it('should return an iterator', function () {
    const u = uniqueIterableBy([], 0)
    assert.strictEqual(typeof u.next, 'function')
  })

  it('should support an index', function () {
    const u = Array.from(uniqueIterableBy([[1], [1]], 0))
    assert.strictEqual(u.length, 1)
    assert.strictEqual(u[0][0], 1)
  })

  it('should support a callback', function () {
    const o = {a: 2}
    const u = Array.from(uniqueIterableBy([o, o], obj => obj.a))
    assert.strictEqual(u.length, 1)
    assert.strictEqual(u[0].a, 2)
  })

  it('should compare objects strictly', function () {
    const u = Array.from(uniqueIterableBy([[{}], [{}]], 0))
    assert.strictEqual(u.length, 2)
  })

  it('should support a limit argument', function () {
    const u = Array.from(uniqueIterableBy([[1], [1], [2], [3]], 0, {limit: 2}))
    assert.strictEqual(u.length, 2)
    assert.strictEqual(u[0][0], 1)
    assert.strictEqual(u[1][0], 2)
  })
})
