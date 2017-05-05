import React, { Component } from "react";

import { injectGlobal } from "styled-components";

import Section from "./components/section";
import Wrapper from "./components/wrapper";

import Header from "./sections/header";
import About from "./sections/about";
import Speakers from "./sections/speakers";
import Schedule from "./sections/schedule";
import Location from "./sections/location";

injectGlobal`
  * {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
        <Speakers />
        <Schedule />
        <Location />
      </div>
    );
  }
}

export default App;
