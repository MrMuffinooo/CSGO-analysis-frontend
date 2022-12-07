import React, { useContext, useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { GameContext } from "./contexts/GameContext";

const columns = [
  { field: "team", headerName: "Team", width: 70 },
  { field: "name", headerName: "Nazwa", width: 130 },
  { field: "kills", headerName: "K", type: "number", width: 70 },
  { field: "assists", headerName: "A", type: "number", width: 70 },
  { field: "deaths", headerName: "D", type: "number", width: 70 },
];

export default function Table() {
  const game = useContext(GameContext);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (game.teams) {
      const tempRows = [];
      game.teams.lastTSide.players.forEach((p, i) => {
        tempRows.push({
          id: i,
          team: "T",
          name: p.name,
          kills: p.kills,
          assists: p.assists,
          deaths: p.deaths,
        });
      });
      game.teams.lastCTSide.players.forEach((p, i) => {
        tempRows.push({
          id: i + 5,
          team: "CT",
          name: p.name,
          kills: p.kills,
          assists: p.assists,
          deaths: p.deaths,
        });
      });

      setRows(tempRows);
    }
  }, [game]);

  if (!game.teams) return;

  const getClass = (id) => {
    return id < 5 ? "terro" : "counter";
  };

  if (!rows) return;

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={10}
      autoHeight
      disableExtendRowFullWidth
      disableSelectionOnClick
      hideFooter
      showCellRightBorder
      density={"compact"}
      getRowClassName={(params) => getClass(params.row.id)}
    />
  );
}
