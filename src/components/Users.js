import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    return (
      <div>
          <p>There are {this.props.users.length} users!</p>
        <ul>
          {this.props.users.map( user => (<li>{user.username}</li>))}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => ({users: state.users})

// connect this component to Redux
export default connect(mapStateToProps)(Users)
