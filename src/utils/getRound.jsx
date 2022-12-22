import axios from "axios";
import { ENDPOINT } from "./constans";

export const getRoundData = async (setRound, matchId, roundId) => {
  axios.get(`${ENDPOINT}/game/${matchId}/round/${roundId + 1}/`).then((res) => {
    setRound(res.data);
  });
};
