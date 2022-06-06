import { SpacingKey } from "../../../theme";

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
>;

export type BaseBoxProps = BoxCssProps & {
  vertical?: boolean;
  horizontal?: boolean;
  marginRight?: SpacingKey;
  marginLeft?: SpacingKey;
  marginTop?: SpacingKey;
  marginBottom?: SpacingKey;
  paddingRight?: SpacingKey;
  paddingLeft?: SpacingKey;
  paddingTop?: SpacingKey;
  paddingBottom?: SpacingKey;
  margin?: SpacingKey | string | number;
  padding?: SpacingKey | string | number;
};

export type BoxProps = BaseBoxProps & React.DOMAttributes<HTMLDivElement>;
