const devConfig = {
  wpUrl: "https://complexityfest.com/",
  ticketLink: "https://www.ticketmaster.nl/event/300257?brand=nl_patronaat",
};

const prodConfig = {
  wpUrl: "https://complexityfest.com/",
  ticketLink: "https://www.ticketmaster.nl/event/300257?brand=nl_patronaat",
};

const getConfig = (env) => {
  if (env === "development") {
    return devConfig;
  }
  return prodConfig;
};

export default getConfig(process.env.NODE_ENV);
