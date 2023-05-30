import React, { useState } from "react";
// import "./Profile.css";
import {
  TextField,
  Button,
  TableContainer,
  Table,
  Paper,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  Box,
  Typography,
} from "@mui/material";
import Topbar from "../global/Topbar";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";

const Profile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  return (
    <div>
      <Box className="content">
        <Topbar />
        <div className="row-1">
          <Box display="flex" justifyContent="space-between" mt="2px">
            <Typography
              margin="auto"
              variant="h2"
              sx={{ color: colors.greenAccent[300] }}
            >
              Hello From Profile Page
            </Typography>
          </Box>
          <TextField
            label="Enter a task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            variant="outlined"
            className="input"
            sx={{ width: "100% !important", mb: "3em", mt: "3em" }}
          />
          <Button
            className="btn"
            onClick={addTask}
            variant="contained"
            display="flex"
            margin="auto"
            sx={{
              width: "20% !important",
              mb: "3em",
              background: colors.blueAccent[400],
            }}
          >
            Add Task
          </Button>
        </div>
        <div className="row-2">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableCell className="cell">Task</TableCell>
                <TableCell className="cell">Remove</TableCell>
              </TableHead>
              {tasks.map((task, index) => (
                <TableBody>
                  <TableRow key={index}>
                    <TableCell>{task}</TableCell>
                    <Button
                      className="removeBtn"
                      onClick={() => removeTask(index)}
                      sx={{
                        background: colors.greenAccent[300],
                        display: "flex",
                        alignItems: "center !important",
                        ":hover": {
                          background: colors.greenAccent[700],
                        },
                      }}
                    >
                      X
                    </Button>
                  </TableRow>
                </TableBody>
              ))}
            </Table>
          </TableContainer>
        </div>
      </Box>
    </div>
  );
};

export default Profile;
