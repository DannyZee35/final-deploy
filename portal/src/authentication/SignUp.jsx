

import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify'

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset, login, register } from "../features/auth/authSlice";
import {
  Container,
  Box,
  TextField,
  Stack,
  Button,
  Alert,
  RadioGroup ,
  FormControlLabel,
  Radio,
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

import { withAuth } from "./withAuth";
import { alpha, styled } from "@mui/material/styles";

const drawerWidth = 300;



export const SignUp=()=>{
    const navigate= useNavigate()
    const [errorMessage, setErrorMessage] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const dispatch = useDispatch()
    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
      )
      const [showPassword, setShowPassword] = useState(false);
   
      const handleClickShowPassword = () => setShowPassword((show) => !show);
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      }
      useEffect(() => {
        if (isError) {
          setErrorMessage(message);
          dispatch(reset());
    

        }
    
        if (isSuccess) {
          navigate('/login')
        }
    
        dispatch(reset())
      }, [user, isError, isSuccess, message, navigate, dispatch])
    
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const userData = {
            username,
            password,
            role,
          };
      
          dispatch(register(userData));
        } catch (error) {
          setErrorMessage(message); // Set the error message
        }
      };
      
      useEffect(() => {
        if (isSuccess && role) {
          switch (role) {
            case "course instructor":
              navigate("/login");
              break;
            case "course coordinator":
              navigate("/login");
              break;
            case "head of department":
              navigate("/login");
              break;
            case "course folder convenor":
              navigate("/login");
              break;
            default:
              navigate("/login");
              break;
          }
        }
      }, [isSuccess, user, navigate]);
      
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
          <Typography variant="h6" color={"primary"}>
          Web Based Course Folders Management System
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
           <Stack
            direction="row" // New stack direction
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="role"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <FormControlLabel
                  value="course instructor"
                  control={<Radio />}
                  label="Course Instructor"
                />
                <FormControlLabel
                  value="course coordinator"
                  control={<Radio />}
                  label="Course Coordinator"
                />
               
                <FormControlLabel
                  value="course folder convenor"
                  control={<Radio />}
                  label="Course Folder Convenor"
                />
              </RadioGroup>
            </FormControl>
          </Stack>
          <Button
            sx={{ textTransform: "none" }}
            size="large"
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
          >
            SignUp
          </Button>
      
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <Typography>Already Have An Account?</Typography>
          <Button sx={{textTransform:'none'}} size="large" onClick={(e)=>navigate('/')}> 
            Login
          </Button>
 
          </Stack>
          
        </Stack>
        {errorMessage && (
   <Alert severity="error"> {errorMessage}</Alert>

   
 
)}
      </Box>
    </Container>
        
        </>
    )
}