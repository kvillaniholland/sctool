import nodeStorage from 'node-persist'

nodeStorage.initSync();

export function saveCurrentFollowers(followers) {
  const allFollowers = getFollowers() || [[],[]];
  if (allFollowers.length > 1) {
    allFollowers.shift();
  }
  allFollowers.push(followers);
  nodeStorage.setItemSync(`followers`, allFollowers);
}

export function saveCurrentFollowings(followings) {
  const allFollowings = getFollowings() || [[],[]];
  if (allFollowings.length > 1) {
    allFollowings.shift();
  }
  allFollowings.push(followings);
  nodeStorage.setItemSync(`followings`, allFollowings);
}

export function getCurrentFollowers() {
  return getFollowers().pop();
}

export function getCurrentFollowings() {
  return getFollowings().pop();
}

export function getFollowers() {
  return nodeStorage.getItemSync('followers') || [];
}

export function getFollowings() {
  return nodeStorage.getItemSync('followings') || [];
}

export function getNotifications() {
  return nodeStorage.getItemSync('notifications') || [];
}

export function deleteNotification(index) {
  const notifications = getNotifications();
  notifications.splice(index, 1);
  return nodeStorage.setItemSync('notifications', notifications);
}

export function saveNotification(notification) {
  const notifications = getNotifications();
  nodeStorage.setItemSync(`notifications`, [...notifications, notification]);
}
