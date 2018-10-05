import React from 'react'
import { Row, Col, Nav, Tab, NavItem } from 'react-bootstrap'
import NotificationTable from './NotificationTable'
import FollowerTable from './FollowerTable'
import FollowingTable from './FollowingTable'

export default ({ filteredFollowers, filteredFollowings, followers, followings, notifications, refreshData }) => (
  <Tab.Container id='main-tabs' defaultActiveKey='notifications'>
    <Row>
      <Col md={12}>
        <Nav bsStyle='tabs'>
          <NavItem eventKey='notifications'>Notifications</NavItem>
          <NavItem eventKey='followers'>Followers ({filteredFollowers.length})</NavItem>
          <NavItem eventKey='following'>Following ({filteredFollowings.length})</NavItem>
        </Nav>
      </Col>
      <Col md={12}>
        <Tab.Content animation>
          <Tab.Pane eventKey='notifications'>
            <NotificationTable
              notifications={notifications}
              onRefresh={refreshData}
            />
          </Tab.Pane>
          <Tab.Pane eventKey='followers'>
            <FollowerTable
              followers={filteredFollowers}
              followings={followings}
            />
          </Tab.Pane>
          <Tab.Pane eventKey='following'>
            <FollowingTable
              followers={followers}
              followings={filteredFollowings}
            />
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
)
