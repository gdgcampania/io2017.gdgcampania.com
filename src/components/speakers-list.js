import React from "react";
import styled from "styled-components";

import Speaker from "./speaker";

const BaseList = ({ talks, ...props }) => (
  <div {...props}>
    {talks.map(talk => <Speaker key={talk.speaker} {...talk} />)}
  </div>
);

const SpeakersList = styled(BaseList)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    > * {
        width: calc(100% / 3 - 10px);
        margin-bottom: 10px;
    }
`;

export default SpeakersList;
