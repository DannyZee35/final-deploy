import { Box, Container, Stack, Typography } from "@mui/material"
import custLogo from "./assets/cust.png"
import folder from "./assets/folder.png"
import hod from "./assets/hod.png"
import instructor from "./assets/instructor.png"
import co from "./assets/co.png"

import { CardComponent } from "./components/CardComponent"
import { useNavigate } from "react-router-dom"



export const StartPage=()=>{
const navigate=useNavigate()
    return(
        <>
        <Container>
            <Box sx={{textAlign:'center',mt:5}}>
               <img src={custLogo} height={120} width={120}/> 
            </Box>
        <Typography variant="h4" textAlign={"center"} mt={2}>
        Web Based Course Folders Management System
        </Typography>

        <Stack mt={10}  direction={"row"} spacing={3} alignItems={"center"} justifyContent={"center"}>
        <Box>
            <CardComponent  title={"Course Instructor"} image={instructor} onClick={(e)=>navigate('/InsLogin')}/>

        </Box>
        <Box>
            <CardComponent  title={"Course Coordinator"} image={co} onClick={(e)=>navigate('/CoLogin')}/>

        </Box>
        <Box>
        <CardComponent  title={"Course Folder Convenor"} image={folder} onClick={(e)=>navigate('/folderCoordinator')}/>


        </Box>
        <Box>
        <CardComponent  title={"Head of Department"} image={hod} onClick={(e)=>navigate('/HodLogin')}/>

        </Box>
        </Stack>
        </Container>
      
        
        </>
    )
}