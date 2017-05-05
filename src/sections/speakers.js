import React from "react";

import Section from "../components/section";
import Wrapper from "../components/wrapper";
import Title from "../components/title";
import SpeakerList from "../components/speakers-list";

const talks = [
  {
    speaker: "Luca Corbo",
    company: "Random company INC",
    time: 1800,
    title: "Ehnanced web reponsive design: RWD++",
    abstract: "",
    picture: "https://api.adorable.io/avatars/285/luca_corbo.png"
  },
  {
    speaker: "Marco Giammetti",
    company: "Random company INC",
    time: 1800,
    title: "Lo sviluppo di Edge Guardian VR",
    abstract: "",
    picture: "https://api.adorable.io/avatars/285/marco_giammetti.png"
  },
  {
    speaker: "Mauro D'Angelo",
    company: "Random company INC",
    time: 1800,
    title: "TBD",
    abstract: "",
    picture: "https://api.adorable.io/avatars/285/Mauro_d_angelo.png"
  },
  {
    speaker: "Fabrizio Lapiello",
    company: "Random company INC",
    time: 1800,
    title: "From smart gardening to smart everything",
    abstract: "",
    picture: "https://api.adorable.io/avatars/285/fabrizio_lapiello.png"
  },
  {
    speaker: "Michele Nasti",
    company: "Random company INC",
    time: 1800,
    title: "Sei abbastanza sveglio per lavorare in Google?",
    abstract: "",
    picture: "https://api.adorable.io/avatars/285/michele_nasti.png"
  },
  {
    speaker: "Mauro D'Ambrosi",
    company: "Random company INC",
    time: 1800,
    title: "TBD",
    abstract: "",
    picture: "https://api.adorable.io/avatars/285/Mauro_d_ambrosi.png"
  },
  {
    speaker: "LAKEBA",
    company: "Random company INC",
    time: 1800,
    title: "TBD",
    abstract: "",
    picture: "https://api.adorable.io/avatars/285/lakeba.png"
  }
];

export default () => (
  <Section>
    <Wrapper>
      <Title>Speaker</Title>

      <SpeakerList talks={talks} />
    </Wrapper>
  </Section>
);
