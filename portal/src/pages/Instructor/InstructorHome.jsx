import { Container, Typography } from "@mui/material"
 
import { CreateCourse } from "./CreateCourse";
import { Courses } from "./Courses";


const drawerWidth=300;
export const InstructorHome=()=>{
    /***
     
    const navigate = useNavigate()

    const {user} = useSelector((state)=> state.auth)
    
    
    useEffect(()=>{
        if(!user){
            navigate('/login')
        } <Courses/>
    },[user,navigate])* 
     */
    return(
        <>
        <Container sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
           p:3
        }}>
  

        <CreateCourse/>
     
        </Container>
        </>
    )
}
