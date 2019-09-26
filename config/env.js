const devConfig = {
  wpUrl: 'https://complexityfest.com/',
};

const prodConfig = {
  wpUrl: 'https://complexityfest.com/',
};

const getConfig = (env) => {
  if (env === 'development') {
    return devConfig;
  }
  return prodConfig;
};

export default getConfig(process.env.NODE_ENV);
