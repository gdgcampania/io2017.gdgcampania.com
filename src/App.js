import React, { Component } from "react";

import { injectGlobal } from "styled-components";

import Section from "./components/section";

injectGlobal`
  * {
    margin: 0;
  }

  html, body, #root {
    height: 100%;
  }
`;


class App extends Component {
  render() {
    return (
      <Section centered>
        <h1>Google IO extended Campania</h1>
        <h2>17 Maggio 2017</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
          Cumque quos ratione optio blanditis deserunt saepe iure
          unt odit atque eius voluptatum labore ex
        </p>

        <button>Registrati</button>
      </Section>
    );
  }
}

export default App;
