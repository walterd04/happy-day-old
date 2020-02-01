import React from "react";

import { useAuth0 } from "../../react-auth0-spa";

const Home = () => {
  const { isAuthenticated, logout } = useAuth0();

  return <div>Hello logged in user</div>;
};

export default Home;
