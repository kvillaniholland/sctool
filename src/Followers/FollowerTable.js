import React from 'react'
import Table from '../components/Table'

const FollowerRow = ({ element, followings }) => (
  <tr>
    <td>{element.username}</td>
    <td>{element.followers_count}</td>
    <td>{followings.find(following => following.id === element.id) ? 'Yes' : 'No'}</td>
  </tr>
)

export default ({ followers, followings }) => (
  <Table
    headings={['Username', 'Followers', 'Following']}
    ListComponent={FollowerRow}
    listElements={followers}
    followings={followings}
  />
)
