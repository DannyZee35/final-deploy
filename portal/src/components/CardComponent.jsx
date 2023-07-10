
import { Card,CardActionArea,CardContent,Typography,CardMedia } from "@mui/material"
 
export const CardComponent=({title,image,onClick})=>{

    return(
        <>
        <Card sx={{width: 320 }} elevation={5}>
      <CardActionArea onClick={onClick}>
        <CardMedia
          component="img"
          height="200"
          
          image={image}
         
        />
        <CardContent sx={{backgroundColor:'#00347d',color:"white"}}>
          <Typography gutterBottom variant="h5" component="div" textAlign={"center"} >
            {title}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
        </>
    )
}