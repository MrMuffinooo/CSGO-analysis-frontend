import axios from "axios";
import { ENDPOINT } from "./constans";

export const getMatchData = async (setGame, id) => {
  axios.get(`${ENDPOINT}/game/${id}/`).then((res) => {
    setGame(res.data);
  });
};
