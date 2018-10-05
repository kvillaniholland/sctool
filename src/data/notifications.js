import { saveNotification, deleteNotification } from './storage'

export const UNFOLLOW = 'unfollow'
export const FOLLOW = 'follow'

export const saveFollowerNotification = (user) => saveNotification({ type: FOLLOW, user })

export const saveUnfollowerNotification = (user) => saveNotification({ type: UNFOLLOW, user })

export const clearNotification = (index) => deleteNotification(index)
