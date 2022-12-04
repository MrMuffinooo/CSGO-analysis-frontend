import React, { useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { GameContext } from "./contexts/GameContext";

const columns = [
  { field: "id", headerName: "ID", type: "number", width: 70 },
  { field: "name", headerName: "Nazwa", width: 130 },
  { field: "kills", headerName: "K", type: "number", width: 70 },
  { field: "assists", headerName: "A", type: "number", width: 70 },
  { field: "deaths", headerName: "D", type: "number", width: 70 },
];

const rows = [
  { id: 0, name: "dgd", kills: 5, assists: 22, deaths: 8 },
  { id: 1, name: "Snow", kills: 5, assists: 35, deaths: 8 },
  { id: 2, name: "Lannister", kills: 5, assists: 42, deaths: 8 },
  { id: 3, name: "Lannister", kills: 5, assists: 45, deaths: 8 },
  { id: 4, name: "Stark", kills: 5, assists: 16, deaths: 8 },
  { id: 5, name: "Targaryen", kills: 5, assists: null, deaths: 8 },
  { id: 6, name: "Melisandre", kills: 5, assists: 150, deaths: 8 },
  { id: 7, name: "Clifford", kills: 5, assists: 44, deaths: 8 },
  { id: 8, name: "Frances", kills: 5, assists: 36, deaths: 8 },
  { id: 9, name: "Roxie", kills: 5, assists: 65, deaths: 8 },
];

export default function Table() {
  const game = useContext(GameContext);
  console.log(game);
  if (!game.map) return;

  const getClass = (id) => {
    return id < 5 ? "terro" : "counter";
  };

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
