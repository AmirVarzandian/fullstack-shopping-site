import { Box, Container, Typography } from "@mui/material"
import { Backbtn } from "../../components/Backbtn"
import FavoriteSlideFunction from "../../components/FavoriteSlideFunction"
export const Favorite = () =>{
    return(
     
              <Container maxWidth={false}  sx={{display:'flex', flexDirection:'column' ,alignItems:'center' ,width:'375px' ,height:'872px'  ,backgroundColor:'white' ,overflow:"auto",overflowX:'hidden','&::-webkit-scrollbar': {
            width: '0.4em',
            backgroundColor: 'white',
            
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#f50',
            borderRadius: '10px',
          }, }}>
            <Box sx={{display:'flex',flexDirection:'row',width:"375px",alignItems:'center',justifyContent:'center',mt:'1rem'}}>
              <Box sx={{transform:'translateX(-7rem)'}}>
    <Backbtn linko="/HomeScreen"/>
              </Box>
              <Box sx={{mr:'1rem'}}>
 <Typography fontSize={18} color={"#111719"}>Favorite</Typography>
              </Box>
            </Box>
       <FavoriteSlideFunction/>
        </Container>
    )
}