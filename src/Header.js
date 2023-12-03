import React from "react";
const Header = (props) => {
  return (
    <header>
      <h1>{props.topic}</h1>
      <h2>{props.firstTopic}</h2>
    </header>
  );
};

Header.defaultProps = {
  firstTopic: "INITIAL WEB DESIGN",
};

export default Header;
