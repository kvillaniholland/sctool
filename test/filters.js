import test from 'ava'
import * as filters from '../src/data/filters'

test('findUserById', test => {
  const users = [{ id: 2, name: 'Bob' }, { id: 3, name: 'Joe' }]
  const result = filters.findUserById(3, users)
  test.deepEqual(result, { id: 3, name: 'Joe' })
})

test('nonMutual', test => {
  const source = [{ id: 2, name: 'Bob' }, { id: 3, name: 'Joe' }]
  const compare = [{ id: 2, name: 'Bob' }, { id: 5, name: 'Dave' }]
  const result = filters.nonMutual(compare, source)
  test.deepEqual(result, [{ id: 3, name: 'Joe' }])
})

test('mutual', test => {
  const source = [{ id: 2, name: 'Bob' }, { id: 3, name: 'Joe' }]
  const compare = [{ id: 2, name: 'Bob' }, { id: 5, name: 'Dave' }]
  const result = filters.mutual(compare, source)
  test.deepEqual(result, [{ id: 2, name: 'Bob' }])
})

test('maximumFollowerCount', test => {
  const source = [{ id: 2, name: 'Bob', follower_count: 10 }, { id: 3, name: 'Joe', follower_count: 5 }]
  const result = filters.maximumFollowerCount(9, source)
  test.deepEqual(result, [{ id: 3, name: 'Joe', follower_count: 5 }])
})

test('minimumFollowerCount', test => {
  const source = [{ id: 2, name: 'Bob', follower_count: 10 }, { id: 3, name: 'Joe', follower_count: 5 }]
  const result = filters.minimumFollowerCount(7, source)
  test.deepEqual(result, [{ id: 2, name: 'Bob', follower_count: 10 }])
})

test('filterUsers', test => {
  const source = [{ id: 2, name: 'Bob' }, { id: 3, name: 'Joe' }]
  const compare = [{ id: 2, name: 'Bob' }, { id: 5, name: 'Dave' }]
  const applyFilters = { mutual: true, nonMutual: false }

  filters.allFilters.mutual = (compare, source) => ({ source, compare, filtered: true })

  const result = filters.filterUsers(source, compare, applyFilters)
  test.deepEqual(result, { source, compare, filtered: true })
})
