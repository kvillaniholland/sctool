import {flow} from 'lodash/fp';
import {map} from 'lodash';

const allFilters = {
  mutual,
  nonMutual,
  minimumFollowerCount,
  maximumFollowerCount
}

export function filterUsers(source, filters) {
 return flow(...map(filters, ((value, key) => allFilters[key].bind(null, value))))(source);
}

export function filterFollowings(followings, filters) {

}

function minimumFollowerCount(min, source) {
  return source.filter(user => user.follower_count >= min);
}

function maximumFollowerCount(max, source) {
  return source.filter(user => user.follower_count <= max);
}

function mutual(compare, source) {
  return source.filter(user => !!findUserById(user.id, compare));
}

function nonMutual(compare, source) {
  return source.filter(user => !findUserById(user.id, compare));
}

function findUserById(id, users) {
  return users.find(user => user.id === id);
}
