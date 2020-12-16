import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    let users = this.props.users.map((user, i) => <li key={i}>{user.username}</li>)
    return (
      <div>
        <ul>
          Users!
          {this.props.numbOfUsers}
          <p>{users}</p>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users,
  numOfUsers: state.users.length }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
