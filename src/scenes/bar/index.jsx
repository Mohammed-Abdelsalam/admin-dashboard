import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header tittle={"BAR CHART"} subtittle={"Sample Of Bar Chart"} />
      </Box>
      <Box color={'black'} m="40px 0 0 0" height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
