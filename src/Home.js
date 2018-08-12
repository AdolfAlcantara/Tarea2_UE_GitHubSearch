import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      user: ''
    };
  }

  render() {
    return (
      <div>
        <header>
            GitHub Demo Project
        </header>
        <input
          type="text"
          value={this.state.user}
          onChange={e => this.setState({ user: e.target.value })}
        />
        <Link to={`/results/${this.state.user}`} className="btn btn-primary">
          Go To Repos
        </Link>
      </div>
    );
  }
}

export default Home;