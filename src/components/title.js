import styled from "styled-components";

export default styled.h1`
  font-family: Ubuntu;
  font-size: ${props => (typeof props.size === "undefined" ? "30px" : props.size)};
  font-weight: 500;
  margin-bottom: ${props => (typeof props.margin === "undefined" ? "0.5em" : props.margin)};

  opacity: ${props => (props.transparent ? 0 : 1)};

  ${props => props.color && `color: ${props.color}`}
`;
