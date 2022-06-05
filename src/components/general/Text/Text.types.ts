import React from "react";
import { StyledComponentProps } from "styled-components";
import { LinkProps as ReactRouterLinkProps } from 'react-router-dom';

export type TextCssProps = Pick<
  React.CSSProperties,
  "display" | "padding" | "margin" | "fontWeight" | "flex" | "marginRight"
>;

export type StyledTextProps = TextCssProps & {
  color?: string;
  bold?: boolean;
};

export type TextProps = TextCssProps & {
  color?: string;
  bold?: boolean;
  displayBlock?: boolean;
};

export type LinkProps = TextProps & ReactRouterLinkProps