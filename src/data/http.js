import axios from 'axios';

export async function fetchFollowers(userId = 'USERID') {
  let followers = [];
  let url = `https://api-v2.soundcloud.com/users/${userId}/followers?offset=0&limit=100`;

  while (url) {
    const response = await basicApiRequest(url, 'AUTH');
    followers = followers.concat(response.data.collection);
    url = response.data.next_href;
  }
  return followers;
}

export async function fetchFollowings(userId = 'USERID') {
  let followings = [];
  let url = `https://api-v2.soundcloud.com/users/${userId}/followings?offset=0&limit=100`;

  while (url) {
    const response = await basicApiRequest(url, 'AUTH');
    followings = followings.concat(response.data.collection);
    url = response.data.next_href;
  }
  return followings;
}

async function basicApiRequest(url, auth = null) {
  return axios({
    method: 'get',
    url,
    headers: {'Authorization': `OAuth ${auth}`}
  })
  .catch(err => console.log(err));
}
