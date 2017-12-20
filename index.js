'use strict'

const filterIterable = require('filter-iter')
const {getIn} = require('m-o')
const IsNew = require('is-new')
const PossibleFunction = require('possible-function')

module.exports = function uniqueIterableBy (iter, key, options) {
  const getValue = PossibleFunction(key, elem => getIn(elem, key))
  const isNew = IsNew()
  return filterIterable(iter, el => isNew(getValue(el)), options)
}
