import React from 'react'
import Table from '../../components/Table'

const FollowingRow = ({ element, followers }) => (
  <tr>
    <td>{element.username}</td>
    <td>{element.followers_count}</td>
    <td>{followers.find(follower => follower.id === element.id) ? 'Yes' : 'No'}</td>
  </tr>
)

export default ({ followers, followings }) => (
  <Table
    headings={['Username', 'Followers', 'Follows You']}
    ListComponent={FollowingRow}
    listElements={followings}
    followers={followers}
  />
)
