import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Services from "../Services/Services";
import About from "./About/About";
import Banner from "./Banner";

const Home = () => {
  const { newUser } = useContext(AuthContext);
  console.log("new user from home", newUser);
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
    </div>
  );
};

export default Home;
