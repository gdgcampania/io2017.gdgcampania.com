import React from "react";

import Section from "../components/section";
import Wrapper from "../components/wrapper";
import Title from "../components/title";
import TalksList from "../components/talks-list";

import talks from "../data/talks";

export default () => (
  <Section>
    <Wrapper>
      <Title>Programma</Title>

      <TalksList talks={talks} />
    </Wrapper>
  </Section>
);
