import date from 'date-and-time';

/*
  Accepts a string like '2019-09-27T13:33:24' and converts it into a date
  string with argument 'format'
*/
const format = (str, formatting) => {
  const d = new Date(str);
  return date.format(d, formatting);
};

export default format;
