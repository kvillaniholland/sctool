import { saveNotification, deleteNotification } from './storage'

export const UNFOLLOW = 'unfollow'
export const FOLLOW = 'follow'

export function saveFollowerNotification (user) {
  saveNotification({
    type: FOLLOW,
    user
  })
}

export function saveUnfollowerNotification (user) {
  saveNotification({
    type: UNFOLLOW,
    user
  })
}

export function clearNotification (index) {
  deleteNotification(index)
}
