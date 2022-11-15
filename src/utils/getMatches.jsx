export const getMatchesData = async (setGames) => {
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
      // console.log(response);

      return response.json();
    })

    .then(function (myJson) {
      // console.log(myJson);
      setGames(myJson.matches);
    });
};
