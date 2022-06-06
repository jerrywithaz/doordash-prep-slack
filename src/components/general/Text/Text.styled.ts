import styled from 'styled-components';
import Box from '../../layout/Box';
import { TextProps, LinkProps } from './Text.types';
import { Link as ReactRouterLink } from "react-router-dom";

function propToCss(key: string, value?: string | number, suffix: string = 'px') {
    if (value === undefined) {
        return "";
    }
    if (typeof value === "string") {
        return `${key}: ${value};`;
    }
    return `${key}: ${value}${suffix};`;
}

const Text = styled(Box).attrs(() => ({
    as: "span"
}))<TextProps>`
    ${({ color, displayBlock, fontWeight, bold, display }) => `
        ${propToCss("color", color)}
        ${propToCss("font-weight", bold ? "bold" : fontWeight, "")}
        ${propToCss("display", displayBlock ? "block" : display, "")}
        text-decoration: none;
    `}
`;

export const Link = styled(Text).attrs(() => ({
    as: ReactRouterLink
}))<LinkProps>`
    text-decoration: none;
`;

export default Text;