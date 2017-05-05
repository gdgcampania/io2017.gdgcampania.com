import React from "react";
import styled from "styled-components";

import SpeakerName from "./speaker-name";
import SmallText from "./small-text";

const Avatar = styled.img`
  width: 100%;
  height: auto;
`;

const SpeakerInformation = styled.div`
  padding: 5px 10px;
`;

const BaseSpeaker = ({ picture, company, speaker, ...props }) => (
  <div {...props}>
    <Avatar src={picture} />
    <SpeakerInformation>
      <SpeakerName>{speaker}</SpeakerName>
      <SmallText>{company}</SmallText>
    </SpeakerInformation>
  </div>
);

const Speaker = styled(BaseSpeaker)`
  background-color: #eee;
`;

export default Speaker;
