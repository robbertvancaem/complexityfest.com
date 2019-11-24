import axios from 'axios';

import { getSlug } from '../utils/url';
import wpRestApiUrl from '../config/endpoints';

const getPosts = async () => {
  const response = await axios.get(`${wpRestApiUrl}posts`);

  return response.data.map(p => ({
    id: p.id,
    title: p.title.rendered,
    slug: getSlug(p.link),
    ...p.acf,
  }));
};

export default getPosts;
