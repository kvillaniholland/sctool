import _ from 'lodash'
import { last } from 'fandy'
import { fetchFollowers, fetchFollowings } from './http'
import { saveCurrentFollowers, saveCurrentFollowings, getFollowers } from './storage'
import { saveFollowerNotification, saveUnfollowerNotification } from './notifications'

export async function sync () {
  const followers = await fetchFollowers() // LATER - Refactor this to fetch each concurrently
  const followings = await fetchFollowings()
  saveCurrentFollowings(followings) // LATER - Refactor this to save each concurrently
  saveCurrentFollowers(followers)

  const allFollowers = getFollowers()
  if (allFollowers.length > 1 && allFollowers[0].length > 1 && allFollowers[1].length > 1) {
    createNotifications(followers)
  }
}

function createNotifications () {
  const followers = getFollowers()
  const currentFollowers = last(followers)
  const lastFollowers = last(followers, 2)
  const unFollowers = _.differenceBy(lastFollowers, currentFollowers, follower => follower.id)
  const newFollowers = _.differenceBy(currentFollowers, lastFollowers, follower => follower.id)
  unFollowers.map(user => saveUnfollowerNotification(user))
  newFollowers.map(user => saveFollowerNotification(user))
}
