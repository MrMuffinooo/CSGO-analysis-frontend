import React, { memo } from "react";
import { Table } from "./Table";
import { Instructions } from "./Instructions";

function MatchViewww() {
  return (
    <div>
      <Table />
      <Instructions />
    </div>
  );
}

export const MatchView = memo(MatchViewww);
