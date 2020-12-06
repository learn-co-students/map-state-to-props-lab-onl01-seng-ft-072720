import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user)=> <li>{user.username}, {user.hometown}</li>)}
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { users: state.users,
  userCount: state.users.length}
}

export default connect(mapStateToProps)(Users)
