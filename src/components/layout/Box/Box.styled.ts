import styled from 'styled-components';
import { BoxProps } from './Box.types';

function propToCss(key: string, value?: string | number, suffix: string = 'px') {
    if (value === undefined) {
        return "";
    }
    if (typeof value === "string") {
        return `${key}: ${value};`;
    }
    return `${key}: ${value}${suffix};`;
}

export const Box = styled.div<BoxProps>`
    ${({ display, flex, flexDirection, alignItems, justifyContent, width, height, backgroundColor, padding, margin }) => `
        ${propToCss("display", display ?? "flex", "")}
        ${propToCss("flex", flex, "")}
        ${propToCss("flex-direction", flexDirection, "")}
        ${propToCss("align-items", alignItems, "")}
        ${propToCss("justify-content", justifyContent, "")}
        ${propToCss("width", width)}
        ${propToCss("height", height)}
        ${propToCss("background-color", backgroundColor, "")}
        ${propToCss("padding", padding)}
        ${propToCss("margin", margin)}
    `}
`;