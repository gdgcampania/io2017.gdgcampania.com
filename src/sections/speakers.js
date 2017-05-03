import React from "react";

import Section from "../components/section";
import Wrapper from "../components/wrapper";
import Title from "../components/title";

const speakers = [1, 2, 3, 4, 5, 6].map(x => ({
  name: `Example user ${x}`,
  bio: "Example user"
}));

export default () => (
  <Section>
    <Wrapper>
      <Title>Speaker</Title>

      <ul>
        {speakers.map(speaker => <li key={speaker.name}>{speaker.name}</li>)}
      </ul>
    </Wrapper>
  </Section>
);
