import React, { Component } from 'react'
import { Button, Checkbox, Grid, Row, Col, Nav, Tab, NavItem } from 'react-bootstrap'
import Components from '../components'
import { sync } from '../data/followers'
import { getCurrentFollowers, getCurrentFollowings, getNotifications } from '../data/storage'
import { filterUsers } from '../data/filters'

export default class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      followerFilters: {},
      followingFilters: {},
      followers: getCurrentFollowers(),
      followings: getCurrentFollowings(),
      notifications: getNotifications(),
      error: null
    }
  }

  async doSync () {
    this.setState({ loading: true })
    try {
      await sync()
    } catch (error) {
      this.setState({error: error.message, loading: false})
    }
    this.refreshData()
  }

  refreshData () {
    this.setState({
      loading: false,
      followers: getCurrentFollowers(),
      followings: getCurrentFollowings(),
      notifications: getNotifications()
    })
  }

  render () {
    const { loading, followers, followings, mutual, nonMutual, notifications, error } = this.state
    const { FollowerTable, FollowingTable, Spinner, NotificationTable, ErrorAlert } = Components
    const filteredFollowers = filterUsers(followers, this.state.followerFilters) || []
    const filteredFollowings = filterUsers(followings, this.state.followingFilters) || []

    return <Grid>
      {loading && <Spinner />}
      {error && <ErrorAlert error={error} dismiss={() => this.setState({error: null})}/>}
      <Row>
        <Col md={2}>
          <Button onClick={this.doSync.bind(this)}>Sync</Button>
        </Col>
        <Col md={3}>Total Followers: {followers ? followers.length : 0}</Col>
        <Col md={2}>
          <Checkbox checked={mutual} onChange={e => {
            const followerFilters = this.state.followerFilters
            const followingFilters = this.state.followingFilters
            if (!e.target.checked) {
              delete followerFilters.mutual
              delete followingFilters.mutual
            } else {
              followerFilters.mutual = followings
              followingFilters.mutual = followers
            }
            this.setState({ followerFilters, followingFilters })
          }} />Mutual Only
        </Col>
        <Col md={2}>
          <Checkbox checked={nonMutual} onChange={e => {
            const followerFilters = this.state.followerFilters
            const followingFilters = this.state.followingFilters
            if (!e.target.checked) {
              delete followerFilters.mutual
              delete followingFilters.mutual
            } else {
              followerFilters.nonMutual = followings
              followingFilters.nonMutual = followers
            }
            this.setState({ followerFilters, followingFilters })
          }} />Non-Mutual Only
        </Col>
      </Row>
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
                  onRefresh={this.refreshData.bind(this)}
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
    </Grid>
  }
}
