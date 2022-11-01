import React, { useEffect, useRef } from "react";

function Radar({ children }) {
  const ref = useRef(null);
  useEffect(() => {
    console.log("width", ref.current ? ref.current.offsetWidth : 0);
  }, [ref.current]);

  return (
    <div ref={ref} style={{ width: "1024px", position: "relative" }}>
      {children}
    </div>
  );
}

export default Radar;
