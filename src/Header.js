import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'

export default ({ sync, followerCount }) => (
  <Row>
    <Col md={2}>
      <Button onClick={sync}>Sync</Button>
    </Col>
    <Col md={3}>Total Followers: {followerCount}</Col>
  </Row>
)
