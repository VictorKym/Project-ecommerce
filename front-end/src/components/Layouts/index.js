import React from "react";
import Header from "../Header";
import Body from "../Body";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Body />
      {props.children} 
    </>
  );
};
export default Layout;