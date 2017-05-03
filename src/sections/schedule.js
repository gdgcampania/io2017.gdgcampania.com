import React from "react";

import Section from "../components/section";
import Wrapper from "../components/wrapper";
import Title from "../components/title";

const talks = [1, 2, 3, 4, 5, 6].map(x => ({
  name: `Example talk ${x}`,
  bio: "Example talk"
}));

export default () => (
  <Section>
    <Wrapper>
      <Title>Programma</Title>

      <ul>
        {talks.map(speaker => <li key={speaker.name}>{speaker.name}</li>)}
      </ul>
    </Wrapper>
  </Section>
);
