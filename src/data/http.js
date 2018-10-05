import axios from 'axios'

export async function fetchFollowers (userId = process.env.USERID) {
  let followers = []
  let url = `https://api-v2.soundcloud.com/users/${userId}/followers?offset=0&limit=100`

  while (url) {
    const response = await basicApiRequest(url)
    followers = followers.concat(response.data.collection)
    url = response.data.next_href
  }
  return followers
}

export async function fetchFollowings (userId = process.env.USERID) {
  let followings = []
  let url = `https://api-v2.soundcloud.com/users/${userId}/followings?offset=0&limit=100`

  while (url) {
    const response = await basicApiRequest(url)
    followings = followings.concat(response.data.collection)
    url = response.data.next_href
  }
  return followings
}

async function basicApiRequest (url, auth = process.env.AUTH) {
  return axios({
    method: 'get',
    url,
    headers: { 'Authorization': `OAuth ${auth}` }
  }).catch(err => {
    if (err.response.status === 401) {
      throw new Error("SoundCloud authentication failed. Have you set up your auth token?") //TODO - store this string literal somewhere else
    } else {
      throw new Error(`An unexpected error ocurred while fetching data from SoundCloud: ${err.response.status} ${err.response.statusText}`)
    }
  })
}
