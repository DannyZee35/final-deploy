import {
    Container,
    
  } from "@mui/material";
 
  
  const drawerWidth = 300;
  
  export const CourseLog = () => {
   
    return (
      <>
        <Container
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            p: 5,
            mt: 15,
          }}
        >
         
        </Container>
      </>
    );
  };
  