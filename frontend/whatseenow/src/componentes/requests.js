const API_KEY = "a804b0da37710e733d1d87cf53bb816b";

const requests = {
  trending: "/trending/all/week?api_key=" + API_KEY,
  search: "/search/movie?api_key=" + API_KEY + "&query=",
};

export default requests;
