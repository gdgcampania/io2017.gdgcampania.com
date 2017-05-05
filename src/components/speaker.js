import React from "react";
import styled from "styled-components";

const Avatar = styled.img`
  width: 100%;
  height: auto;
`;

const SpeakerName = styled.h1`
  font-size: 20px;
  margin-bottom: 0.2em;
`;

const SpeakerCompany = styled.p`
  font-size: 12px;
  font-style: italic;
`;

const SpeakerInformation = styled.div`
  padding: 5px 10px;
`;

const BaseSpeaker = ({ picture, company, speaker, ...props }) => (
  <div {...props}>
    <Avatar src={picture} />
    <SpeakerInformation>
      <SpeakerName>{speaker}</SpeakerName>
      <SpeakerCompany>{company}</SpeakerCompany>
    </SpeakerInformation>
  </div>
);

const Speaker = styled(BaseSpeaker)`
  background-color: #eee;
`;

export default Speaker;
