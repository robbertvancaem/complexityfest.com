// eslint-disable-next-line import/prefer-default-export
export const getSlug = url => url
  .split('/')
  .filter(el => !!el)
  .pop();
