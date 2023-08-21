import { Box, Typography } from "@mui/material"

export const RadioBTNPicName = () =>{
    const items = [
        {esm:"Pepper  Julienned" ,  pic:"./src/pic/chili-pepper.png"},
        {esm:"Baby Spinach" ,  pic:"./src/pic/spinach (4).png"},
        {esm:"Mushroom" ,  pic:"./src/pic/mushrooms.png"},
    ]
return(
    <Box sx={{display:'flex',flexDirection:'column',gap:".80rem"}}>
{items.map((item,index)=>(
    <Typography key={index} sx={{display:'flex', flexDirection:'row',gap:'1rem',alignItems:'center',fontSize:'14px'}}><Box sx={{backgroundImage: `url(${item.pic})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width:'30px',
    height:'30px',}}></Box>{item.esm}</Typography>
))}
    </Box>
)
}
