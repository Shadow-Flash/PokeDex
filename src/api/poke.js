import axios from "axios";

export default axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
  params: {
    limit: 10,
    offset: Math.floor(Math.random()*60),
  },
});
