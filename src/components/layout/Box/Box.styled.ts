import styled from "styled-components";
import { isSpacingKey } from "../../../theme";
import propToCss from "../../../utils/propToCss";
import { BoxProps } from "./Box.types";

const Box = styled.div<BoxProps>`
  ${({
    display,
    flex,
    flexDirection,
    alignItems,
    justifyContent,
    width,
    height,
    backgroundColor,
    padding,
    margin,
    vertical,
    horizontal,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    theme
  }) => `
        ${propToCss("display", display ?? "flex", "")}
        ${propToCss("flex", flex, "")}
        ${propToCss("flex-direction", vertical ? "column" : horizontal ? "row" : flexDirection, "")}
        ${propToCss("align-items", alignItems, "")}
        ${propToCss("justify-content", justifyContent, "")}
        ${propToCss("width", width)}
        ${propToCss("height", height)}
        ${propToCss("background-color", backgroundColor, "")}
        ${propToCss("padding", isSpacingKey(padding) ? theme.spacing[padding] : padding)}
        ${propToCss("margin", isSpacingKey(margin) ? theme.spacing[margin] : margin)}
        ${propToCss("margin-right", marginRight ? theme.spacing[marginRight] : undefined)}
        ${propToCss("margin-left", marginLeft ? theme.spacing[marginLeft] : undefined)}
        ${propToCss("margin-top", marginTop ? theme.spacing[marginTop] : undefined)}
        ${propToCss("margin-bottom", marginBottom ? theme.spacing[marginBottom] : undefined)}
        ${propToCss("padding-right", paddingRight ? theme.spacing[paddingRight] : undefined)}
        ${propToCss("padding-left", paddingLeft ? theme.spacing[paddingLeft] : undefined)}
        ${propToCss("padding-top", paddingTop ? theme.spacing[paddingTop] : undefined)}
        ${propToCss("padding-bottom", paddingBottom ? theme.spacing[paddingBottom] : undefined)}
    `}
`;

export default Box;
