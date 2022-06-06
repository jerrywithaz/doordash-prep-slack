import { SpacingKey } from "./theme";

const spacingKeys: string[] = ["xs", "s", "m", "lg", "xl", "xxl"];

export function isSpacingKey(key: any): key is SpacingKey {
    if (spacingKeys.indexOf(key) > -1) return true;
    return false;
}