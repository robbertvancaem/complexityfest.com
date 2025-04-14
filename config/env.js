const devConfig = {
  wpUrl: "https://complexityfest.com/",
  ticketLink: "https://patronaat.nl/event/complexity-fest-2025-23-08-25/",
};

const prodConfig = {
  wpUrl: "https://complexityfest.com/",
  ticketLink: "https://patronaat.nl/event/complexity-fest-2025-23-08-25/",
};

const getConfig = (env) => {
  if (env === "development") {
    return devConfig;
  }
  return prodConfig;
};

export default getConfig(process.env.NODE_ENV);
