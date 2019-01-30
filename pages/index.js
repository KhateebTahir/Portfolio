import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";

import axios from "axios";

class Index extends React.Component {
  static async getInitialProps() {
    let userData = {};

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      userData = response.data;
    } catch (err) {
      console.error(err);
    }
    return { userData };
  }

  render() {
    debugger;
    const { userData } = this.props;
    return (
      <BaseLayout>
        <h1>I am Home Page</h1>
        <h2> {userData.title} </h2>
      </BaseLayout>
    );
  }
}

export default Index;
