import styled from 'styled-components';
import { StyledTextProps } from './Text.types';

function propToCss(key: string, value?: string | number, suffix: string = 'px') {
    if (value === undefined) {
        return "";
    }
    if (typeof value === "string") {
        return `${key}: ${value};`;
    }
    return `${key}: ${value}${suffix};`;
}

export const Text = styled.span<StyledTextProps>`
    ${({ color, padding, margin, fontWeight, display, flex, marginRight }) => `
        ${propToCss("color", color)}
        ${propToCss("padding", padding)}
        ${propToCss("margin", margin)}
        ${propToCss("margin-right", marginRight)}
        ${propToCss("font-weight", fontWeight, "")}
        ${propToCss("display", display, "")}
        ${propToCss("flex", flex, "")}
        text-decoration: none;
    `}
`;