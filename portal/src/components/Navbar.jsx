import { AppBar, Button, Toolbar, Typography, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";
import { DrawerComponent } from "./DrawerComponent";



const drawerWidth = 300;

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 

  const { user } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  const token = JSON.parse(localStorage.getItem("token"));
  const username = token?.user?.username; 

  const handleLogin=()=>{
    navigate("/login");
  }
 
  return (
    <>
      <AppBar color="primary" position="fixed" component={'nav'} sx={{
                 width: { sm: `calc(100% - ${drawerWidth}px)` },
                 ml: { sm: `${drawerWidth}px` },
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }} >
        <Toolbar>
          <Box
           component={'div'}
         sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap:'20px'
         }}
          >
             <Typography>
                Name: 
            </Typography>
            <Typography sx={{textTransform:'uppercase',color:'white', fontWeight:'bold'}} >{username} </Typography> 
            <Typography>
                Status: 
            </Typography>
            <Typography sx={{textTransform:'uppercase',color:'white', fontWeight:'bold'}} >{user.UserRole} </Typography> 
        {user ? 
        <Button size="large" onClick={onLogout} sx={{ backgroundColor: "white",color:'black',textTransform:'none' }}>
        Logout
      </Button>
      
    :
    <Button size="large" onClick={handleLogin} sx={{ backgroundColor: "white",color:'black',textTransform:'none' }}> 
              Login
            </Button>
    }
            
          </Box>
        </Toolbar>
      </AppBar>
      <DrawerComponent/>
    </>
  );
};
