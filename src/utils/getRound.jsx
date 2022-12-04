export const getRoundData = async (setRound, matchId, roundId) => {
  // axios.get(`https://endpoint.com/matches/${matchId}/${roundId}`).then((res) => {
  //   setRound(res.data.matches);
  // });

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
