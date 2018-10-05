import React, { Component } from 'react'

export default class FollowerRow extends Component {
  render () {
    const { following, followers } = this.props

    return <tr>
      <td>{following.username}</td>
      <td>{following.followers_count}</td>
      <td>{followers.find(follower => follower.id === following.id) ? 'Yes' : 'No'}</td>
    </tr>
  }
}
