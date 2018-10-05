import React, { Component } from 'react'
import { Button, Glyphicon } from 'react-bootstrap'
import { clearNotification } from '../data/notifications'

export default class FollowerRow extends Component {
  onClear () {
    const { index, onRefresh } = this.props
    clearNotification(index)
    onRefresh()
  }

  render () {
    const { notification } = this.props

    return <tr>
      <td>{notification.user.username}</td>
      <td>{notification.type}</td>
      <td><Button bsStyle='danger' onClick={this.onClear.bind(this)}><Glyphicon glyph='trash' /></Button></td>
    </tr>
  }
}
