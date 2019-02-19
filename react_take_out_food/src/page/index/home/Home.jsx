import React from "react";
import Header from "./header/Header";
import Category from "./category/Category";
class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Category />
      </div>
    );
  }
}

export default Home;
