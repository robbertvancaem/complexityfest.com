import axios from 'axios';

import { getSlug } from '../utils/url';
import wpRestApiUrl from '../config/endpoints';

const SHOWS_ID = 2;
const NEWS_ID = 3;

const getPosts = async (catId) => {
  const response = await axios.get(`${wpRestApiUrl}posts?categories=${catId}`);

  return response.data.map(p => ({
    id: p.id,
    title: p.title.rendered,
    content: p.content.rendered,
    slug: getSlug(p.link),
    ...p.acf,
  }));
};

export const getNews = async () => getPosts(NEWS_ID);

export const getShows = async () => getPosts(SHOWS_ID);
