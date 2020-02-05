import axios from 'axios';

import wpRestApiUrl from '../config/endpoints';

const getPage = async (slug) => {
  const response = await axios.get(`${wpRestApiUrl}pages?slug=${slug}`);

  if (!response.data.length) {
    return {
      statusCode: 404,
    };
  }

  return {
    statusCode: 200,
    ...response.data[0].acf,
    yoast: { ...response.data[0].yoast },
    page: {
      title: response.data[0].title.rendered,
      htmlContent: response.data[0].content.rendered,
    },
  };
};

export default getPage;
