import React, { Component } from 'react';
import AllProject from './AllProject';
import axios from 'axios';

export class Projects extends Component {
  state = {
    projectList: [],
    isLoaded: false
  }

  componentDidMount() {
    axios.get('/wp-json/wp/v2/projects')
      .then((res) => this.setState({
        projectList: res.data,
        isLoaded: true
      }))
      .catch((err) => console.log(err));
  }

  render() {
    const { projectList, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div>
          {projectList.map((projectL) => (
            <AllProject key={projectL.id} projectL={projectL} />
          ))}
        </div>
      )
    }

    return <h4>Fetching Data...</h4>;
  }
}

export default Projects
