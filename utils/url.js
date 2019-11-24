export const getSlug = url => url
  .split('/')
  .filter(el => !!el)
  .pop();
