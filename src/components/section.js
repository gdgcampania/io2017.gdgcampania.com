import React from "react";

import styled from "styled-components";


export default styled.section`
    min-height: 100%;
    width: 100%;

    background-color: red;

    ${(props) => props.centered && `
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `}
`;