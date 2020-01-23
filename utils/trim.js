const trim = (str, maxLength = 140) => {
  const trimmed = str.substr(0, maxLength);

  return `${trimmed.substr(0, Math.min(trimmed.length, trimmed.lastIndexOf(' ')))}...`;
};

export default trim;
