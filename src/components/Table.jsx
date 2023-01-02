import React, { useContext, useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { GameContext } from "../utils/Contexts";

const columns = [
  { field: "team", headerName: "Drużyna", width: 70 },
  { field: "name", headerName: "Nazwa", width: 130 },
  { field: "kills", headerName: "K", type: "number", width: 70 },
  { field: "assists", headerName: "A", type: "number", width: 70 },
  { field: "deaths", headerName: "D", type: "number", width: 70 },
  { field: "kd", headerName: "KD", type: "number", width: 70 },
  {
    field: "killsPerRound",
    headerName: "KPR",
    type: "number",
    width: 100,
  },
  { field: "damage", headerName: "Obrażenia", type: "number", width: 90 },
  {
    field: "adr",
    headerName: "Obrażenia na rundę",
    type: "number",
    width: 170,
  },
  { field: "kast", headerName: "KAST", type: "number", width: 70 },
  {
    field: "flashedEnemies",
    headerName: "Oślepieni przeciwnicy",
    type: "number",
    width: 170,
  },
  {
    field: "flashedEnemiesDuration",
    headerName: "Czas oślepienia przeciwników",
    type: "number",
    width: 220,
  },
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
          kd: p.kd,
          killsPerRound: p.killsPerRound,
          damage: p.damage,
          adr: p.adr,
          kast: p.kast,
          flashedEnemies: p.flashedEnemies,
          flashedEnemiesDuration: p.flashedEnemiesDuration,
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
          kd: p.kd,
          killsPerRound: p.killsPerRound,
          damage: p.damage,
          adr: p.adr,
          kast: p.kast,
          flashedEnemies: p.flashedEnemies,
          flashedEnemiesDuration: p.flashedEnemiesDuration,
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
