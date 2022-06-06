import styled from 'styled-components';
import Box from '../../layout/Box';
import { TextProps, LinkProps } from './Text.types';
import { Link as ReactRouterLink } from "react-router-dom";
import propToCss from '../../../utils/propToCss';

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