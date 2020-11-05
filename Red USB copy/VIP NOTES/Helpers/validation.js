export const PATTERNS = {
  containsText: ".*\\S.*"
};

const isValid = (value, validationPattern) =>
  value && new RegExp(validationPattern).test(value);

export default isValid;
