export const getMapMeta = async (
  map,
  setResolution,
  setOffsetX,
  setOffsetY
) => {
  fetch(
    "./map_meta.json",

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

      setResolution(myJson[map].resolution);
      setOffsetX(myJson[map].offset.x);
      setOffsetY(myJson[map].offset.y);
    });
};
