import axios from "axios";

export const getRoundData = async (setRound, matchId, roundId) => {
  if (process.env.REACT_APP_ENDPOINT) {
    axios
      .get(
        `${process.env.REACT_APP_ENDPOINT}/game/${matchId}/round/${
          roundId + 1
        }/`
      )
      .then((res) => {
        setRound(res.data);
      });
  } else {
    fetch(
      "./mocks/round.json",

      {
        headers: {
          "Content-Type": "application/json",

          Accept: "application/json",
        },
      }
    )
      .then(function (response) {
        return response.json();
      })

      .then(function (myJson) {
        setRound(myJson);
      });
  }
};
