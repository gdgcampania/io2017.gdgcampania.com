import React from "react";

import styled from "styled-components";

import Section from "../components/section";
import Wrapper from "../components/wrapper";

const HeaderTitle = styled.h1`
  font-family: 'Libre Baskerville', serif;
  font-size: 8vh;
  font-weight: normal;
  text-align: center;
`;

const DetailsBox = styled.div`
  width: 80%;
  max-width: ${props => props.theme.maxWidth}px;
  background: #fdaa89;
  color: black;

  padding: 2rem 2rem;

  position: absolute;

  bottom: 0;
  left: 50%;

  transform: translate(-50%, 50%);

  box-shadow: 0 0 35px -5px #000;

  display: flex;
  align-items: center;
  font-family: 'Rubik', sans-serif;
`;

const Date = styled.h2`
  margin-right: 1em;
`;

const Button = styled.button`
  background: transparent;
  color: white;
  border: 2px solid currentColor;
  border-radius: 1em;
  padding: 1em 2em;

  text-transform: uppercase;
  font-family: inherit;
  font-weight: bold;

  cursor: pointer;

  margin-left: auto;

  &:hover {
    background: white;
    color: #fdaa89;
  }
`;

export default () => (
  <Section
    variant="header"
    background="https://source.unsplash.com/1600x900/?seaside"
    centered
    relative
    almostFullscreen
    overlay
  >
    <Wrapper>
      <HeaderTitle>Google IO extended Campania</HeaderTitle>

    </Wrapper>

    <DetailsBox>
      <Date>17 Maggio 2017</Date>
      <p>
        Città della Scienza, Napoli
      </p>

      <Button>Registrati</Button>
    </DetailsBox>
  </Section>
);
