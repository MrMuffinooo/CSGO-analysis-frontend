export const getMatchesData = async (setGames) => {
  // axios.get(`https://endpoint.com/matches`).then((res) => {
  //   setGames(res.data.matches);
  // });

  fetch(
    "./matches.json",

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
      setGames(myJson.matches);
    });
};
