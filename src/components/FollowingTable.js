import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import FollowingRow from './FollowingRow'

export default class FollowingTable extends Component {
  render () {
    const { followers, followings } = this.props

    return <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>Username</th>
          <th>Followers</th>
          <th>Follows You</th>
        </tr>
      </thead>
      <tbody>
        {followings.map(following => <FollowingRow key={following.id} following={following} followers={followers} />)}
      </tbody>
    </Table>
  }
}
