import React, {Component} from 'react';

export default class FollowerRow extends Component {
  render() {
    const {follower, followings} = this.props;

    return <tr>
        <td>{follower.username}</td>
        <td>{follower.followers_count}</td>
        <td>{followings.find(following => following.id === follower.id) ? 'Yes' : 'No'}</td>
      </tr>;
  }
}
