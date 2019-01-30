import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";

import { withRouter } from "next/router";
import axios from "axios";

class PortfolioDetail extends React.Component {
  static async getInitialProps({ query }) {
    console.log(query);

    const portfolioId = query.id;
    let portfolio = {};

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + portfolioId
      );
      //or write it like: const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${portfolioId}`);
      portfolio = response.data;
      console.log(portfolio);
    } catch (err) {
      console.error(err);
    }
    return { portfolio };
  }

  render() {
    const { portfolio } = this.props;
    //or write it like: const portfolio = this.props.portfolio;

    return (
      <BaseLayout>
        <h1> {portfolio.title} </h1>
        <p> Detail: {portfolio.body} </p>
        <p> ID: {portfolio.id} </p>
      </BaseLayout>
    );
  }
}

export default withRouter(PortfolioDetail);
