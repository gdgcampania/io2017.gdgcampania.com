import React from "react";
import styled from "styled-components";

import SmallText from "./small-text";

const Row = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  margin-bottom: 20px;
  padding-top: 10px;
  border-top: 2px solid black;
`;

const Time = styled.div`
  font-weight: bold;
  margin-right: 20px;
`;

const BaseList = ({ talks, ...props }) => (
  <div {...props}>
    {talks.map(talk => (
      <Row key={talk.speaker}>
        <Time>{talk.time}</Time>
        <div>
          <div>{talk.title}</div>
          <SmallText>{talk.speaker}</SmallText>
        </div>
      </Row>
    ))}
  </div>
);

const TalksList = styled(BaseList)`

`;

export default TalksList;
