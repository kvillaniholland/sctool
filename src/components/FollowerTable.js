import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import FollowerRow from './FollowerRow'

export default class FollowerTable extends Component {
  render () {
    const { followers, followings } = this.props

    return <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>Username</th>
          <th>Followers</th>
          <th>Following</th>
        </tr>
      </thead>
      <tbody>
        {followers.map(follower => <FollowerRow key={follower.id} follower={follower} followings={followings} />)}
      </tbody>
    </Table>
  }
}
