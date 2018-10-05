import { flow } from 'lodash/fp'
import { map } from 'lodash'

export const filterUsers = (source, compare, filters) => {
  const filterFns = map(filters, (enabled, name) => enabled ? allFilters[name].bind(null, compare) : source => source)
  return flow(...filterFns)(source)
}

export const minimumFollowerCount = (min, source = []) => source.filter(user => user.follower_count >= min)

export const maximumFollowerCount = (max, source = []) => source.filter(user => user.follower_count <= max)

export const mutual = (compare, source = []) => source.filter(user => !!findUserById(user.id, compare))

export const nonMutual = (compare, source = []) => source.filter(user => !findUserById(user.id, compare))

export const findUserById = (id, users) => users.find(user => user.id === id)

export const allFilters = {
  mutual,
  nonMutual,
  minimumFollowerCount,
  maximumFollowerCount
}
