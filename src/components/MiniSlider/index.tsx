import { Box, Button, Typography } from "@mui/material"
import { Cloack, Heart, Motor, Star, Tic } from "../../icons"
import { SVGProps, useState } from "react";
type ISlider={
    name1:string,
    name2:string,
    pic:string,
    star:number,
    star2:number,

    rew:string,

}
function MySvg(props: SVGProps<SVGSVGElement>) { // pass SVGProps as a generic type
    return (
        <svg width="19" height="18" viewBox="0 0 16 14" {...props}   xmlns="http://www.w3.org/2000/svg">
        <path d="M11.0549 1.09835e-08C10.34 0.00012472 9.63794 0.190537 9.02091 0.551683C8.40389 0.912829 7.8941 1.4317 7.54391 2.055C7.19363 1.43155 6.68369 0.912586 6.06648 0.55143C5.44926 0.190275 4.74702 -5.27909e-05 4.03191 1.09835e-08C2.93669 0.0591506 1.90643 0.53826 1.15545 1.33766C0.404471 2.13707 -0.00940679 3.19522 -9.01977e-05 4.292C-9.01977e-05 9.885 7.54391 13.787 7.54391 13.787C7.54391 13.787 15.0879 9.887 15.0879 4.292C15.0972 3.19506 14.6832 2.13676 13.932 1.33733C13.1808 0.537904 12.1503 0.0589022 11.0549 1.09835e-08V1.09835e-08Z"/>
        </svg>
        
    );
  }
export const MiniSlider = (prop:ISlider) =>{
    const [color, setColor] = useState('#67666D');

    const handleClick = () => {
      setColor(color === '#67666D' ? '#FE724C' : '#67666D');
    };
    return(
        <Box sx={{width:'154px' ,height:'216px' , backgroundColor:'white' , borderRadius:'15px' , boxShadow:" 14px 10px 15px -10px rgba(8,8,8,0.7) " , my:'.5rem'}}>
<Box sx={{
     position: 'relative', 
        display:"flex",
        flexDirection:"column",
       gap:"3rem"
        }}>
            <img
    style={{
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '154px',
      height: '147px',
    }}
    src={'http://localhost:5000' + prop.pic}
  />
            <Box sx={{display:"flex" , flexDirection:"row" , alignItems:"center",justifyContent:'center' , gap:'.8rem' , pt:".6rem" , px:".6rem" , position:'absolute'}}>
            <Box sx={{width:"58px" , height:"28px" ,display:"flex" , flexDirection:"row" , justifyContent:"space-around",gap:"-1rem" , backgroundColor:"white" , alignItems:"center" , borderRadius:"100px"}}>
    <Typography fontSize={"16px"}  variant="h1" fontWeight={'bold'} textAlign={"center"} >${prop.star2}</Typography>
</Box>
<Button onClick={handleClick}    sx={{width:"17px",height:"28px",borderRadius:"100px" , backgroundColor:"white"}}><MySvg style={{ fill: color }} /></Button>
            </Box>
            <Box sx={{mt:'2.8rem',ml:'.5rem',position:'absolute',bottom:0}}>
            <Box sx={{width:"69px" , height:"28px" ,display:"flex",py:'' , flexDirection:"row" , justifyContent:"space-around",gap:"-1rem" , backgroundColor:"white" , alignItems:"center" , borderRadius:"100px" ,boxShadow:'14px 10px 15px -10px rgba(8,8,8,0.7)' }}>
    <Typography fontSize={"12px"}  variant="h1" fontWeight={'bold'}  >{prop.star}</Typography>
    <Star/>
    <Typography fontSize={"8px"} color={"#9796A1"}>({prop.rew})</Typography>
</Box>
            </Box>
</Box>
<Box sx={{display:"flex" , flexDirection:"column" ,gap:".6rem",px:".6rem",pt:".4rem" }}>

<Box sx={{pt:'.5rem'}}>
    <Typography fontSize={"15px"} fontWeight={'1100px'}>{prop.name1}              </Typography>
    <Typography color={'#9796A1'} fontSize={"15px"} fontWeight={'1100px'}>{prop.name2}              </Typography>

</Box>
</Box>
        </Box>
    )
}
