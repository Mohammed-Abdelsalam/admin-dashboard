import React, { useState } from "react";
import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Header from "../../components/Header";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";

const Tabs = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [value, setValue] = useState("1");
  const [value2, setValue2] = useState("4");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange2 = (event, newValue2) => {
    setValue2(newValue2);
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header tittle={"TABS"} subtittle={"Thats just a Tabs for Test"} />
      </Box>
      <Box width="100%" display="flex" gap="2em">
        <Box sx={{ width: "50%", typography: "body1" }}>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                "& .css-1grhalw-MuiButtonBase-root-MuiTab-root.Mui-selected": {
                  color: `${colors.greenAccent[700]} !important`,
                },
                "& .MuiTabs-indicator.css-3dhyfe-MuiTabs-indicator": {
                  color: `${colors.greenAccent[700]} !important`,
                },
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Item One" value="1" />
                <Tab label="Item Two" value="2" />
                <Tab label="Item Three" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              egestas dolor, nec dignissim metus.
            </TabPanel>
            <TabPanel value="2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              egestas dolor, nec dignissim metus.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Donec vel egestas dolor, nec
              dignissim metus.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Donec vel egestas dolor, nec dignissim metus.
            </TabPanel>
            <TabPanel value="3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              egestas dolor, nec dignissim metus.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Donec vel egestas dolor, nec
              dignissim metus.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Donec vel egestas dolor, nec dignissim metus.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Donec vel egestas
              dolor, nec dignissim metus.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Donec vel egestas dolor, nec dignissim
              metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec vel egestas dolor, nec dignissim metus.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Donec vel egestas dolor, nec
              dignissim metus.
            </TabPanel>
          </TabContext>
        </Box>
        <Box sx={{ width: "50%", typography: "body1" }}>
          <TabContext value={value2}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                "& .css-1grhalw-MuiButtonBase-root-MuiTab-root.Mui-selected": {
                  color: `${colors.greenAccent[700]} !important`,
                },
                "& .MuiTabs-indicator.css-3dhyfe-MuiTabs-indicator": {
                  color: `${colors.greenAccent[700]} !important`,
                },
              }}
            >
              <TabList
                onChange={handleChange2}
                aria-label="lab API tabs example"
              >
                <Tab label="Item One" value="4" />
                <Tab label="Item Two" value="5" />
                <Tab label="Item Three" value="6" />
              </TabList>
            </Box>
            <TabPanel value="4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              egestas dolor, nec dignissim metus.
            </TabPanel>
            <TabPanel value="5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              egestas dolor, nec dignissim metus.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Donec vel egestas dolor, nec
              dignissim metus.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Donec vel egestas dolor, nec dignissim metus.
            </TabPanel>
            <TabPanel value="6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              egestas dolor, nec dignissim metus.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Donec vel egestas dolor, nec
              dignissim metus.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Donec vel egestas dolor, nec dignissim metus.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Donec vel egestas
              dolor, nec dignissim metus.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Donec vel egestas dolor, nec dignissim
              metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec vel egestas dolor, nec dignissim metus.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Donec vel egestas dolor, nec
              dignissim metus.
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Box>
  );
};

export default Tabs;
