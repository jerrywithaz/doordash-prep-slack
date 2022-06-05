import styled from 'styled-components';
import { TextProps } from './Text.types';

function propToCss(key: string, value?: string | number, suffix: string = 'px') {
    if (value === undefined) {
        return "";
    }
    if (typeof value === "string") {
        return `${key}: ${value};`;
    }
    return `${key}: ${value}${suffix};`;
}

export const Text = styled.span<TextProps>`
    ${({ color, padding, margin, fontWeight }) => `
        ${propToCss("color", color)}
        ${propToCss("padding", padding, "")}
        ${propToCss("margin", margin, "")}
        ${propToCss("font-weight", fontWeight, "")}
    `}
`;