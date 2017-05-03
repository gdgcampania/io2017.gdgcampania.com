import styled from "styled-components";

const getStyle = props => props.theme[props.variant || "default"];

export default styled.section`
    min-height: 100%;
    width: 100%;

    color: ${props => getStyle(props).text};
    background-color: ${props => getStyle(props).background};

    ${props => props.centered && `
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `}
`;
