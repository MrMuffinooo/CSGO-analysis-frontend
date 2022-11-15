export const getMatchData = async (setGame) => {
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
