import React, { Component } from "react";

import { injectGlobal } from "styled-components";

import Section from "./components/section";

injectGlobal`
  html, body, #root {
    height: 100%;
  }
`;


class App extends Component {
  render() {
    return (
      <Section>Hello world</Section>
    );
  }
}

export default App;
