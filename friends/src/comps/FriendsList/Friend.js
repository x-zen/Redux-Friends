import React from 'react';

class Friend extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>ID# {this.props.friend.id} | {this.props.friend.name}</h3>
        <p>Age: {this.props.friend.age}</p>
        <p>Email: {this.props.friend.email}</p>
      </div>
    )
  }
}

export default Friend;
