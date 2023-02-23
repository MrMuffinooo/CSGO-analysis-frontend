import axios from "axios";

export const getMatchData = async (setGame, id) => {
  if (process.env.REACT_APP_ENDPOINT) {
    axios.get(`${process.env.REACT_APP_ENDPOINT}/game/${id}/`).then((res) => {
      setGame(res.data);
    });
  } else {
    fetch(
      "./mocks/match.json",

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
        setGame(myJson);
      });
  }
};
