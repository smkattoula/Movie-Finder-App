import React, { Fragment } from "react";
import Search from "../components/Search";
import Movies from "../components/Movies";

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Movies />
    </Fragment>
  );
};

export default Home;
