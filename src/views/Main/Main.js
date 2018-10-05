import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'
import Spinner from '../../components/Spinner'
import ErrorAlert from '../../components/ErrorAlert'
import { sync } from '../../data/followers'
import { getCurrentFollowers, getCurrentFollowings, getNotifications } from '../../data/storage'
import { filterUsers } from '../../data/filters'
import Header from './Header'
import Filters from './Filters'
import Tabs from './Tabs'

// LATER - move all these actions out of the component maybe
export default class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      filters: {
        mutual: false,
        nonMutual: false
      },
      followers: getCurrentFollowers(),
      followings: getCurrentFollowings(),
      notifications: getNotifications(),
      error: null
    }
  }

  filterMutual = ({ target }) => this.setState({ filters: { ...this.state.filters, mutual: target.checked } })

  filterNonMutual = ({ target }) => this.setState({ filters: { ...this.state.filters, nonMutual: target.checked } })

  doSync = async () => {
    this.setState({ loading: true })
    try {
      await sync()
    } catch (error) {
      this.setState({ error: error.message, loading: false })
    }
    this.refreshData()
  }

  refreshData = () => this.setState({
    loading: false,
    followers: getCurrentFollowers(),
    followings: getCurrentFollowings(),
    notifications: getNotifications()
  })

  dismissError = () => this.setState({ error: null })

  render () {
    const { loading, followers, followings, filters, notifications, error } = this.state
    const filteredFollowers = filterUsers(followers, followings, filters)
    const filteredFollowings = filterUsers(followings, followers, filters)

    return <Grid>
      {loading && <Spinner />}
      {error && <ErrorAlert error={error} dismiss={this.dismissError} />}
      <Header sync={this.doSync} followerCount={followers.length} />
      <Filters filters={filters} filterMutual={this.filterMutual} filterNonMutual={this.filterNonMutual} />
      <Tabs {...{ filteredFollowers, filteredFollowings, followers, followings, notifications }} refreshData={this.refreshData} />
    </Grid>
  }
}
