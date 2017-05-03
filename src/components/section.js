import React from "react";

import styled from "styled-components";


export default styled.section`
    min-height: 100%;
    width: 100%;

    color: ${(props) => props.theme.header.text};
    background-color: ${(props) => props.theme.header.background};

    ${(props) => props.centered && `
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `}
`;