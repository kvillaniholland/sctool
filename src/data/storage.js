import nodeStorage from 'node-persist'
import { removeAt, last } from 'fandy'

nodeStorage.initSync()

export const saveCurrentFollowers = (followers) => nodeStorage.setItemSync('followers', [...getFollowers(), followers])

export const saveCurrentFollowings = (followings) => nodeStorage.setItemSync('followings', [...getFollowings(), followings])

export const getCurrentFollowers = () => last(getFollowers()) || []

export const getCurrentFollowings = () => last(getFollowings()) || []

export const getFollowers = () => nodeStorage.getItemSync('followers') || []

export const getFollowings = () => nodeStorage.getItemSync('followings') || []

export const getNotifications = () => nodeStorage.getItemSync('notifications') || []

export const deleteNotification = (index) => nodeStorage.setItemSync('notifications', removeAt(getNotifications(), index))

export const saveNotification = (notification) => nodeStorage.setItemSync('notifications', [...getNotifications(), notification])
