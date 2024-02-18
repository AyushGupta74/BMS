import React, { Component } from 'react';

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/Project/api/users')
      .then(response => response.json())
      .then(user => this.setState({ user }));
  }

  render() {
    if (this.state.user === null) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h1>{this.state.user.name}</h1>
        <p>{this.state.user.username}</p>
        <p>{this.state.user.email}</p>
        <p>{this.state.user.address}</p>
      </div>
    );
  }
}

export default UserDetails;