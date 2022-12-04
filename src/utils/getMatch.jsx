import axios from "axios";

export const getMatchData = async (setGame, id) => {
  // axios.get(`https://endpoint.com/matches/${id}`).then((res) => {
  //   setGame(res.data);
  // });
  fetch(
    "./match.json",

    {
      headers: {
        "Content-Type": "application/json",

        Accept: "application/json",
      },
    }
  )
    .then(function (response) {
      // console.log(response);

      return response.json();
    })

    .then(function (myJson) {
      // console.log(myJson);

      setGame(myJson);
    });
};
