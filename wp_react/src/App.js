import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import { throws } from "assert";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    let wpURL = "http://krmuseum.local/wp-json/wp/v2/posts";
    fetch(wpURL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          posts: response
        });
      });
  }
  render() {
    let posts = this.state.posts;
    posts.map((post, index) => {
      return (
        <div key={index}>
          <img
            src={
              post.better_featured_image.media_details.sizes.medium.source_url
            }
            alt={post.better_featured_image.alt_text}
          />
          <p>{post.title.rendered}</p>
          {/* <p>{post.acf.stack}</p> */}
          {/* <p>{post.acf.date_created}</p> */}
          <p>Test</p>
        </div>
      );
    });
    return (
      <div className="App">
        <h1>Posts</h1>
        {posts}
      </div>
    );
  }
}

export default App;
