import axios from "axios";

const instance = axios.create({
  baseURL: "https:/api.themoviedb.org/3",
  params: {
    api_key: "018d7ccf8d538d4bfa744881cc7d8d79",
    language: "ko-KR",
  },
});

export { instance as axios };
