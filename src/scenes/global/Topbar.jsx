import React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ThemeIcon from "../../components/ThemeIcon";
import ClearLocalStorageButton from "../../components/ClearLocalStorageButton";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Box>
        <ThemeIcon />
        <IconButton type="button" sx={{ p: 1 }}>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton type="button" sx={{ p: 1 }}>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton type="button" sx={{ p: 1 }}>
          <PersonOutlinedIcon />
        </IconButton>
        <ClearLocalStorageButton />
      </Box>
    </Box>
  );
};

export default Topbar;
