import axios from "axios";

export const getMatchesData = async (setGames) => {
  if (process.env.REACT_APP_ENDPOINT) {
    axios.get(`${process.env.REACT_APP_ENDPOINT}/game/`).then((res) => {
      setGames(res.data);
    });
  } else {
    fetch(
      "./mocks/games_list.json",

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
        setGames(myJson);
      });
  }
};
