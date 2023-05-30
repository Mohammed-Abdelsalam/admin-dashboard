import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// React hook form
import { useForm } from "react-hook-form";

// Material UI
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import ThemeIcon from "../../components/ThemeIcon";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Debounce
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log("User Name:", userName);
      console.log("Password:", password);
    }, 500);

    return () => {
      clearTimeout(delayDebounceFn);
    };
  }, [userName, password]);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    if (userName === "admin123" && password === "Aa@159357") {
      localStorage.setItem("isAdmin", true);
      navigate("/dashboardlayout");
    } else {
      localStorage.setItem("isUser", true);
      navigate("/profile");
    }
    console.log("Submit Work");
  };

  return (
    <div className="SignIn">
      <ThemeIcon />
      <Grid className="container">
        <Box>
          <Typography className="tittle">SignIn</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              className="input"
              {...register("userName", {
                required: {
                  value: true,
                  message: `Username field is required`,
                },
                minLength: {
                  value: 8,
                  message: `Minimum length is 8`,
                },
                pattern: {
                  value: /^[a-z0-9]+$/,
                  message: "small letters only",
                },
              })}
              label="Username"
              variant="outlined"
              value={userName}
              onChange={handleInputChange}
              error={!!errors?.userName}
              helperText={errors?.userName ? errors?.userName?.message : null}
            />
            <TextField
              className="input"
              {...register("Password", {
                required: {
                  value: true,
                  message: `Password field is required`,
                },
                minLength: {
                  value: 8,
                  message: `Min number is 8`,
                },
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  message:
                    "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 character, and at least 1 number",
                },
              })}
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={handlePassChange}
              error={!!errors?.Password}
              helperText={errors?.Password ? errors?.Password?.message : null}
            />
            <Button
              variant="contained"
              type="submit"
              value="submit"
              className="btn"
            >
              SignIn
            </Button>
          </form>
        </Box>
      </Grid>
    </div>
  );
};

export default SignIn;
