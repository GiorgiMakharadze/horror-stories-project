import React from "react";
import Navigation from "./navigation";

const layout = (props) => {
  return (
    <>
      <Navigation />
      <main>{props.children}</main>
    </>
  );
};

export default layout;
