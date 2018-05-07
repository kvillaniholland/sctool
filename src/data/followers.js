import _ from 'lodash';
import {fetchFollowers, fetchFollowings} from './http';
import {saveCurrentFollowers, saveCurrentFollowings, getFollowers, getFollowings, getCurrentFollowers, getCurrentFollowings} from './storage';
import {saveFollowerNotification, saveUnfollowerNotification} from './notifications';

export async function sync() {
  const followers = await fetchFollowers();
  const followings = await fetchFollowings();
  saveCurrentFollowings(followings);
  saveCurrentFollowers(followers);
  const allFollowers = getFollowers();
  if (allFollowers.length > 1 && allFollowers[0].length > 1 && allFollowers[1].length > 1) {
    createNotifications(followers);
  }
}

function createNotifications() {
  const followers = getFollowers();
  const currentFollowers = followers.pop();
  const lastFollowers = followers.pop();
  const unFollowers = _.differenceBy(lastFollowers, currentFollowers, follower => follower.id);
  const newFollowers = _.differenceBy(currentFollowers, lastFollowers, follower => follower.id);
  unFollowers.map(user => saveUnfollowerNotification(user));
  newFollowers.map(user => saveFollowerNotification(user));
}
