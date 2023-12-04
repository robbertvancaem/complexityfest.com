const trim = (str, maxLength = 140) => {
  if (!str) {
    return str;
  }
  const trimmed = str.substr(0, maxLength);

  return `${trimmed.substr(0, Math.min(trimmed.length, trimmed.lastIndexOf(' ')))}...`;
};

export default trim;
