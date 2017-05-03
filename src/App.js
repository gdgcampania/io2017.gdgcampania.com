import React, { Component } from "react";

import { injectGlobal } from "styled-components";

import Section from "./components/section";
import Wrapper from "./components/wrapper";

import Header from "./sections/header";
import About from "./sections/about";

injectGlobal`
  * {
    margin: 0;
  }

  html, body, #root, #root > div {
    height: 100%;
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
      </div>
    );
  }
}

export default App;
