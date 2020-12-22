import React, { Fragment, useContext, useEffect } from "react";
import Search from "../components/Search";
import Movies from "../components/Movies";
import FeaturedMovies from "../components/FeaturedMovies";
import AuthContext from "../context/auth/AuthContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();

    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Search />
      <Movies />
      <FeaturedMovies />
    </Fragment>
  );
};

export default Home;
