import React, { Component } from "react";

import { injectGlobal } from "styled-components";

import Section from "./components/section";
import Wrapper from "./components/wrapper";

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
        <Section centered variant="header">
          <Wrapper>
            <h1>Google IO extended Campania</h1>
            <h2>17 Maggio 2017</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
              Cumque quos ratione optio blanditis deserunt saepe iure
              unt odit atque eius voluptatum labore ex
            </p>

            <button>Registrati</button>
          </Wrapper>
        </Section>

        <Section>
          <Wrapper>
            this is the Wrapper
          </Wrapper>
        </Section>
      </div>
    );
  }
}

export default App;
