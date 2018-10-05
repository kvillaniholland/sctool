import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import NotificationRow from './NotificationRow'

export default class NotificationTable extends Component {
  render () {
    const { notifications, onRefresh } = this.props

    return <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>Username</th>
          <th>Type</th>
          <th>Clear</th>
        </tr>
      </thead>
      <tbody>
        {notifications.map((notification, index) => <NotificationRow key={index} index={index} notification={notification} onRefresh={onRefresh} />)}
      </tbody>
    </Table>
  }
}
