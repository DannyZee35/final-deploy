
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset, login } from "../features/auth/authSlice";
import {
  Container,
  Box,
  TextField,
  Stack,
  Button,
  Alert,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import custLogo from "../assets/cust.png"

import { alpha, styled } from "@mui/material/styles";

const drawerWidth = 300;



export const InsLogin=()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, isLoading, isError, isSuccess, message } = useSelector(
      (state) => state.auth
    );
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    }
    useEffect(() => {
      if (isError) {
        setErrorMessage(error.response.data);

      }
  
      if (isSuccess || user) {
        navigate("/InstDashboard");
          }
  
      dispatch(reset());
    });
  
    const handleSubmit = async (e) => {
      e.preventDefault(); // prevent default form submission behavior
  
      try {
        const userData = {
          username,
          password,
        };
        const response = await axios.post(
          "https://final-backend-ten.vercel.app/login",
          userData
        );
        const { token, user } = response.data;
  
        localStorage.setItem("token", token);
        localStorage.setItem("userRole", user.role);
        if (response.data) {
          console.log(response.data);
        }
        dispatch(login(user));
        // redirect user based on role
        const role = response.data.user.role;
        switch (role) {
          case "course instructor":
            break;
          case "course coordinator":
            // redirect to coordinator page
            break;
          case "head of department":
            // redirect to hod page
            break;
          default:
            // redirect to default page
            break;
        }
      } catch (error) {
        setErrorMessage(error.response.data);
        console.log(error.message);
        if (error.response && error.response.status === 400) {
          console.log(error.response.data);  
        }
      }
    };
    const CssTextField = styled(TextField)({
      "& label.Mui-focused": {
        color: "blue",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "blue",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "blue",
        },
        "&:hover fieldset": {
          borderColor: "blue",
        },
        "&.Mui-focused fieldset": {
          borderColor: "blue",
        },
      },
    });
    return(
        <>
          <Container sx={{}}>
      <Box
        component="form"
        sx={{
          p: 5,
          mx: 35,
          mt: 5,
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <img src={custLogo} height={200} width={200}/>
          <Typography variant="h3" color={"primary"}>
            Course Instructor
          </Typography>
          <TextField
            label="Username"
            type="text"
            fullWidth
            value={username}
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
          />
        
          <FormControl sx={{ m: 1,  }} variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           
          />
        </FormControl>
          <Button
            sx={{ textTransform: "none" }}
            size="large"
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </Button>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <Typography>Dont Have An Account?</Typography>
          <Button sx={{textTransform:'none'}} size="large" onClick={(e)=>navigate('/signup')}> 
            Sign Up
          </Button>
          </Stack>
          {errorMessage && (
   <Alert severity="error"> {errorMessage}</Alert>

   
 
)}
        </Stack>
  
      </Box>
    </Container>
        </>
    )
}