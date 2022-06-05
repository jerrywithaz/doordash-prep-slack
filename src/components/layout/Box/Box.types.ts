export type BoxCssProps = Pick<
  React.CSSProperties,
  | "display"
  | "flex"
  | "flexDirection"
  | "width"
  | "height"
  | "alignItems"
  | "justifyContent"
  | "backgroundColor"
  | "padding"
  | "margin"
>;

export type BoxProps = BoxCssProps & {
  vertical?: boolean;
  horizontal?: boolean;
} & React.DOMAttributes<HTMLDivElement>;
