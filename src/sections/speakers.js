import React from "react";

import Section from "../components/section";
import Wrapper from "../components/wrapper";
import Title from "../components/title";

const talks = [
  {
    speaker: "Luca Corbo",
    time: 1800,
    title: "Ehnanced web reponsive design: RWD++",
    abstract: ""
  },
  {
    speaker: "Marco Giammetti",
    time: 1800,
    title: "Lo sviluppo di Edge Guardian VR",
    abstract: ""
  },
  {
    speaker: "Mauro D'Angelo",
    time: 1800,
    title: "TBD",
    abstract: ""
  },
  {
    speaker: "Fabrizio Lapiello",
    time: 1800,
    title: "From smart gardening to smart everything",
    abstract: ""
  },
  {
    speaker: "Michele Nasti",
    time: 1800,
    title: "Sei abbastanza sveglio per lavorare in Google?",
    abstract: ""
  },
  {
    speaker: "Mauro D'Ambrosi",
    time: 1800,
    title: "TBD",
    abstract: ""
  },
  {
    speaker: "LAKEBA",
    time: 1800,
    title: "TBD",
    abstract: ""
  }
];

export default () => (
  <Section>
    <Wrapper>
      <Title>Speaker</Title>

      <ul>
        {talks.map(talk => <li key={talk.speaker}>{talk.speaker}</li>)}
      </ul>
    </Wrapper>
  </Section>
);
