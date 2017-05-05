import React from "react";
import styled from "styled-components";

import StaticMap from "../components/static-map";
import Section from "../components/section";
import Wrapper from "../components/wrapper";
import Title from "../components/title";

const StyledMap = styled(StaticMap)`
  width: 100%;
  height: auto;
`;

export default () => (
  <Section>
    <StyledMap
      query="Città della scienza, Napoli"
      markers="color:blue|label:I|Città della scienza, Napoli"
      zoom={14}
      scale={2}
      width={1200}
      heigth={800}
    />
  </Section>
);
