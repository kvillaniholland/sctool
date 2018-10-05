import axios from 'axios'
import { throwAuthError, throwHttpError } from '../Errors'

const apiBase = 'https://api-v2.soundcloud.com'
const usersPath = '/users'
const followersPath = '/followers'
const followingsPath = '/followings'

const followersUrl = userId => `${apiBase}${usersPath}/${userId}${followersPath}?offset=0&limit=100`
const followingsUrl = userId => `${apiBase}${usersPath}/${userId}${followingsPath}?offset=0&limit=100`

// LATER - Can be more functional?
const loopFetch = async (url) => {
  let result = []
  while (url) {
    const response = await basicApiRequest(url)
    result = result.concat(response.data.collection)
    url = response.data.next_href
  }
  return result
}

export const fetchFollowers = async (userId = process.env.USERID) => loopFetch(followersUrl(userId))

export const fetchFollowings = async (userId = process.env.USERID) => loopFetch(followingsUrl(userId))

async function basicApiRequest (url, auth = process.env.AUTH) {
  return axios({
    method: 'get',
    url,
    headers: { 'Authorization': `OAuth ${auth}` }
  }).catch(({ response }) => response.status === 401 ? throwAuthError() : throwHttpError(response))
}
