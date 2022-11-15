export const getRoundData = async (setRound) => {
  fetch(
    "./round.json",

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

      setRound(myJson);
    });
};
