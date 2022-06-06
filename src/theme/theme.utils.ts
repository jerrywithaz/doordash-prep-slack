import { SpacingKey } from "./theme";
import { spacingKeys } from "./theme.constants";

export function isSpacingKey(key: any): key is SpacingKey {
    if (spacingKeys.indexOf(key) > -1) return true;
    return false;
}