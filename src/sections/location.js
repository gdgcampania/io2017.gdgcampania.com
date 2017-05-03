import React from "react";

import StaticMap from "../components/static-map";
import Section from "../components/section";
import Wrapper from "../components/wrapper";
import Title from "../components/title";

const speakers = [1, 2, 3, 4, 5, 6].map(x => ({
  name: `Example user ${x}`,
  bio: "Example user"
}));

export default () => (
  <Section>

    <StaticMap
      query="Città della scienza, Napoli"
      markers="color:blue|label:I|Città della scienza, Napoli"
      zoom={14}
      width={1200}
      heigth={800}
    />
  </Section>
);
