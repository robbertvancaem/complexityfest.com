import axios from 'axios';

import { getSlug } from '../utils/url';
import wpRestApiUrl from '../config/endpoints';

const SHOWS_ID = 2;
const NEWS_ID = 3;
const ARTIST_ID = 4;

const getPosts = async (catId) => {
  let qs = `categories=${catId}&per_page=50`;

  if (catId === ARTIST_ID) {
    qs = `${qs}&order=asc`;
  }

  const response = await axios.get(`${wpRestApiUrl}posts?${qs}`);

  return response.data.map(p => ({
    id: p.id,
    title: p.title.rendered,
    content: p.content.rendered,
    slug: getSlug(p.link),
    ...p.acf,
  }));
};

export const getNews = async () => getPosts(NEWS_ID);

export const getArtists = async () => getPosts(ARTIST_ID);

export const getArtist = async (slug) => {
  const qs = `categories=${ARTIST_ID}&slug=${slug}`;
  const response = await axios.get(`${wpRestApiUrl}posts?${qs}`);

  const a = response.data[0];

  if (a === undefined) {
    return {
      statusCode: 404,
    };
  }

  return {
    statusCode: 200,
    id: a.id,
    title: a.title.rendered,
    content: a.content.rendered,
    slug: getSlug(a.link),
    ...a.acf,
  };
};

export const getShows = async () => {
  const shows = await getPosts(SHOWS_ID);

  return shows.sort(({ date: dateA }, { date: dateB }) => new Date(dateA) - new Date(dateB));
};
