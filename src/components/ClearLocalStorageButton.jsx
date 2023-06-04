import React, { useContext } from "react";

// Material UI
import { Button } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

// React Router
import { Link } from "react-router-dom";

const ClearLocalStorageButton = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleClick = () => {
    localStorage.clear(); // Clears all data in localStorage
  };

  return (
    <React.Fragment>
      <Link to="/">
      <Button
        sx={{
          borderRadius: "0 !important",
          background: colors.greenAccent[500],
          "&:hover": {
            background: colors.blueAccent[400],
          },
        }}
        onClick={handleClick}
      >
        Logout
      </Button>
      </Link>
    </React.Fragment>
  );
};

export default ClearLocalStorageButton;
