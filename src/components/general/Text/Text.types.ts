import React from "react";
import { LinkProps as ReactRouterLinkProps } from 'react-router-dom';
import { BaseBoxProps } from "../../layout/Box";

export type TextCssProps = Pick<
  React.CSSProperties,
  "display" | "padding" | "margin" | "fontWeight" | "flex" | "marginRight"
>;

export type TextProps = BaseBoxProps &  TextCssProps & {
  color?: string;
  bold?: boolean;
  displayBlock?: boolean;
};

export type LinkProps = TextProps & ReactRouterLinkProps