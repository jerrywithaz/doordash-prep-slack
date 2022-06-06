function propToCss(
  key: string,
  value?: string | number,
  suffix: string = "px"
) {
  if (value === undefined) {
    return "";
  }
  if (typeof value === "string") {
    return `${key}: ${value};`;
  }
  return `${key}: ${value}${suffix};`;
}

export default propToCss;
