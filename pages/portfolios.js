import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";

import axios from "axios";
//import Link from "next/link";
import { Link } from "../routes";

class Portfolios extends React.Component {
  static async getInitialProps() {
    let posts = [];

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      posts = response.data;
    } catch (err) {
      console.log(err);
    }
    //return first 10 posts
    return { posts: posts.splice(0, 10) };
  }

  renderPosts(posts) {
    return posts.map((post, index) => {
      return (
        <li key={index}>
          <Link
            route={`/portfolio-detail/${post.id}`}
            //as={`/portfolio-detail/${post.id}`}
            //href={`/portfolio-detail?id=${post.id}`}
          >
            <a style={{ fontSize: "20px" }}> {post.title} </a>
          </Link>
        </li>
      );
    });
  }

  render() {
    // debugger;
    // console.log(this.props);

    const { posts } = this.props;
    return (
      <BaseLayout>
        <h1>I am Portfolio Page</h1>
        <ul>{this.renderPosts(posts)}</ul>
      </BaseLayout>
    );
  }
}

export default Portfolios;
