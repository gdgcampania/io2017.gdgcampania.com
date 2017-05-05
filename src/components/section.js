import styled, { css } from "styled-components";

const getStyle = props => props.theme[props.variant || "default"];

export default styled.section`
    width: 100%;

    color: ${props => getStyle(props).text};
    background-color: ${props => getStyle(props).background};

    ${props => props.background && css`
        background-image: url(${props => props.background});
        background-size: cover;
    `}

    ${props => props.fullscreen && `
        min-height: 100%;
    `}

    ${props => props.almostFullscreen && `
        min-height: 80%;
        margin-bottom: 80px;
    `}

    ${props => props.relative && `
        position: relative;
    `}

    ${props => props.centered && `
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `}

    ${props => props.overlay && `
        position: relative;

        &::after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: black;
            z-index: 0;
            opacity: 0.2;
        }

        > * {
            position: relative;
            z-index: 1;
        }
    `}

`;
