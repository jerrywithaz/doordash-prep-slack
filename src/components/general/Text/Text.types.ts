export type TextCssProps = Pick<
  React.CSSProperties,
  | "display"
  | "padding"
  | "margin"
  | "fontWeight"
>;

export type TextProps = TextCssProps & {
    color?: string;
    bold?: boolean;
}