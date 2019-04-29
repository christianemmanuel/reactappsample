import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export class AllProject extends Component {

  state = {
    imgUrl: '',
    author: '',
    isLoaded: false
  }

  static propTypes = {
    projectL: PropTypes.object.isRequired
  }

  componentDidMount() {
    const { featured_media, author } = this.props.projectL;

    const getImageUrl = axios.get(`/wp-json/wp/v2/media/${featured_media}`);
    const getAuthor = axios.get(`/wp-json/wp/v2/users/${author}`);

    Promise.all([getImageUrl, getAuthor]).then(res => {
      // this.setState({
      //   imgUrl: 
      // });
      console.log(res);
    });
  }


  render() {
    const { title, excerpt } = this.props.projectL;
    return (
      <div className="card">
        <h2>{title.rendered}</h2>
        <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
      </div>
    )
  }
}

export default AllProject
