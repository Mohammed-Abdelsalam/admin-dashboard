import React, { useState } from "react";

// MUI
import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

// componants
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-colum--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "E-mail",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="5em"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header tittle={"TEAM"} subtittle={"Our Team Members"} />
      </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
          getRowId={(row) => row.id}
          onRowClick={(params) => {
            setIsModalOpen(true);
            setSelectedRow(params.row);
            console.log(params.row);
          }}
        />
      </Box>
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DialogTitle
          sx={{
            textAlign: "center",
            borderRadius: "0 !important",
            background: colors.greenAccent[500],
          }}
          variant="h2"
        >
          Row Details
        </DialogTitle>
        <DialogContent>
          {selectedRow && (
            <Box width={"30em"}>
              <Typography variant="h2" margin="0.5em 0">
                ID: {selectedRow.id}
              </Typography>
              <Typography variant="h2" margin="0.5em 0">
                Name: {selectedRow.name}
              </Typography>
              <Typography variant="h2" margin="0.5em 0">
                Age: {selectedRow.age}
              </Typography>
              <Typography variant="h2" margin="0.5em 0">
                Access: {selectedRow.access}
              </Typography>
              <Typography variant="h2" margin="0.5em 0">
                Phone: {selectedRow.phone}
              </Typography>
              <Typography variant="h2" margin="0.5em 0">
                E-mail: {selectedRow.email}
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              borderRadius: "0 !important",
              background: colors.greenAccent[500],
              "&:hover": {
                background: colors.blueAccent[400],
              },
            }}
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Team;
