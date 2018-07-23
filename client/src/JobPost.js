import React, { Component } from 'react';

class JobPost extends Component {
  state = {
  };

  render() {
    let job = this.props.job;

    return (
      <div class="col-sm-6">
        <div class="card text-center">
          <div class="card-body">
            <h5 class="card-title">{job.title}</h5>
            <p class="card-text">{job.description}</p>
            <a href="#" class="btn btn-primary">Apply</a>
          </div>
          <div class="card-footer text-muted">
            {job.timeAgo}
          </div>
        </div>
      </div>
    );
  }
}

export default JobPost;
