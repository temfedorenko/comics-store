const BASE_URL = "https://gateway.marvel.com:443/v1/public/comics";
const API_KEY = "apikey=825a76f0069296d43a59fc01b51c7129";
// extra apiKey
// const API_KEY = "apikey=211c085f78942d7b553a3e154be3772e";

export const getComics = async (offset = 11500) => {
  return await fetch(`${BASE_URL}?offset=${offset}&${API_KEY}`)
    .then((res) => res.json())
    .then((res) => res.data.results.map(normalizeComics));
};

export const getOneComic = async (id = 100688) => {
  return await fetch(`${BASE_URL}/${id}?${API_KEY}`)
    .then((res) => res.json())
    .then((res) => normalizeComics(res.data.results[0]));
};

const normalizeComics = (comic) => {
  return {
    id: comic.id,
    title: comic.title,
    description: comic.description || "There is no more detailed description of this comic book",
    pageCount: comic.pageCount ? `${comic.pageCount} p.` : "—",
    price: comic.prices[0].price ? `$${comic.prices[0].price}` : "Not available",
    thumbnail: comic.thumbnail.path + "." + comic.thumbnail.extension,
    format: comic.format,
    language: comic.textObjects.language || "en-us",
    year: comic.title.match(/\d{4}/) || "—",
  };
};
