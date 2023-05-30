import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header tittle={"LINE CHART"} subtittle={"Sample Of Line Chart"} />
      </Box>
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
