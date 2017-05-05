import React from "react";

import Section from "../components/section";
import Wrapper from "../components/wrapper";
import Title from "../components/title";
import SpeakerList from "../components/speakers-list";

import talks from "../data/talks";

export default () => (
  <Section>
    <Wrapper>
      <Title>Speaker</Title>

      <SpeakerList talks={talks} />
    </Wrapper>
  </Section>
);
