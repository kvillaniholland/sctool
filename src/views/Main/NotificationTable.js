import React from 'react'
import { Button, Glyphicon } from 'react-bootstrap'
import Table from '../../components/Table'
import { clearNotification } from '../../data/notifications'

const NotificationRow = ({ index, onRefresh, notification }) => (
  <tr>
    <td>{notification.user.username}</td>
    <td>{notification.type}</td>
    <td><Button bsStyle='danger' onClick={() => {
      clearNotification(index)
      onRefresh()
    }}><Glyphicon glyph='trash' /></Button></td>
  </tr>
)

export default ({ notifications, onRefresh }) => (
  <Table
    headings={['Username', 'Type', 'Clear']}
    ListComponent={NotificationRow}
    listElements={notifications}
    onRefresh={onRefresh}
  />
)
