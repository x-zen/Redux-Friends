import React from 'react';
import { connect } from 'react-redux';

import { fetchingFriends } from '../../actions';

import Friend from './Friend.js';

class FriendsList extends React.Component {

  componentDidMount() {
    this.props.fetchingFriends();
  }

  render() {
    return (
      <div>
        {this.props.friends.map(friend => {
          return <Friend key={friend.id} friend={friend} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friendReducer.friends,
    isFetchingFriends: state.isFetchingFriends
  };
};

export default connect(
  mapStateToProps,
  { fetchingFriends }
)(FriendsList);
