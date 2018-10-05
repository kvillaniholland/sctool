import React from 'react'
import { Checkbox, Row, Col } from 'react-bootstrap'

export default ({ filters, filterMutual, filterNonMutual }) => (
  <Row>
    <Col md={2}>
      <Checkbox checked={filters.mutual} onChange={filterMutual} />Mutual Only
    </Col>
    <Col md={2}>
      <Checkbox checked={filters.nonMutual} onChange={filterNonMutual} />Non-Mutual Only
    </Col>
  </Row>
)
