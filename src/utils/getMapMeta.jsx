export const getMapMeta = async (
  map,
  setResolution,
  setOffsetX,
  setOffsetY,
  setSliceOffsetX,
  setSliceOffsetY
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
      if (myJson[map].sliceOffset) {
        setSliceOffsetX(myJson[map].sliceOffset.x);
        setSliceOffsetY(myJson[map].sliceOffset.y);
      } else {
        setSliceOffsetX(1.0);
        setSliceOffsetY(1.0);
      }
    });
};
