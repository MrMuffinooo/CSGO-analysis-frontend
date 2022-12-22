import axios from "axios";
import { ENDPOINT } from "./constans";

export const getMatchesData = async (setGames) => {
  axios.get(`${ENDPOINT}/game/`).then((res) => {
    setGames(res.data);
  });
};
