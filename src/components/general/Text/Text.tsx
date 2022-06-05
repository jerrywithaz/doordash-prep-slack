import React from "react";
import { LinkProps, TextProps } from "./Text.types";
import * as Styled from "./Text.styled";
import { Link as ReactRouterLink } from "react-router-dom";

function Text({
  children,
  color,
  bold,
  fontWeight,
  displayBlock,
  display,
  ...restProps
}: React.PropsWithChildren<TextProps>) {
  return (
    <Styled.Text
      {...restProps}
      color={color}
      fontWeight={bold ? "bold" : fontWeight}
      display={displayBlock ? "block" : display}
    >
      {children}
    </Styled.Text>
  );
}

export function Link({
    children,
    color,
    bold,
    fontWeight,
    displayBlock,
    display,
    ...restProps
  }: React.PropsWithChildren<LinkProps>) {
    return (
      <Styled.Text
        {...restProps}
        color={color}
        display={displayBlock ? "block" : display}
        fontWeight={bold ? "bold" : fontWeight}
        as={ReactRouterLink}
      >
        {children}
      </Styled.Text>
    );
  }

export default Text;
