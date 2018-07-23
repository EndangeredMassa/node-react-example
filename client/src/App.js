import React, { Component } from 'react';
import JobPost from './JobPost.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    jobs: []
  };

  componentDidMount() {
    this.getJobs()
      .then(res => this.setState({ jobs: res.jobs }))
      .catch(err => console.log(err));
  }

  getJobs = async () => {
    const response = await fetch('/jobs');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fancy Job Board</h1>
        </header>

        <div class="row">
          {this.state.jobs.map(function(job) {
            return <JobPost job={job} />;
          })}
        </div>
        
      </div>
    );
  }
}

export default App;
