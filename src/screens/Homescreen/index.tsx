import { Box, Button, Container, Typography } from "@mui/material";
import { Downflash, Filter, Flash, Hometitle, Magnifier, Slidee } from "../../icons";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { IconTabs } from "../../components/NavigationTab";
import Slides from "../../components/MiniSliderFunction";
import BigSlides from "../../components/BigSlider";
import { FoodMenuFunc } from "../../components/FoodMenuFunc";
export const Homescreen = (prop:any) =>{
  const rest = (e:any) => {
    e.target.value = '';
  };
    const styles1 ={
        backgroundColor:'white',
           borderRadius: '10px',
           width: '38px',
       height: '38px',
       boxShadow: '1',
             minWidth:'38px',
             backgroundRepeat: "no-repeat",
             backgroundPosition: 'center',
             backgroundSize: 'cover',
       }
       const styles2 ={
        backgroundColor:'white',
           borderRadius: '10px',
           width: '51px',
       height: '51px',
       
             minWidth:'51px',
             backgroundRepeat: "no-repeat",
             backgroundPosition: 'center',
             backgroundSize: 'cover',
             boxShadow: '1'
       }
       const styles = {
        width:'256px'
        ,height:'51px',
        "& .MuiOutlinedInput-notchedOutline":{borderColor:'#EFEFEF',},
        "& .MuiInputBase-root":{borderRadius: '10px',backgroundColor:'#FCFCFD',fontSize:'14px'},
        "& .MuiInputBase-input":{backgrounColor:'#FCFCFD',color:'#5c5c5c'},
        "& .MuiFormControl-root":{backgroundColor:'#FCFCFD'},
        }
    return(
<Container sx={{display:'flex', flexDirection:'column' ,alignItems:'center' ,width:'375px' ,height:'932px' ,justifyContent:'' ,backgroundColor:'white' ,overflow:"hidden" }}>
<Box sx={{display:'flex',flexDirection:'row',gap:'4rem',justifyContent:'center',mt:'2rem'}}>
<Button sx={styles1}  onClick={prop.ali}>
<Slidee/>
</Button>
<Box sx={{display:'flex' ,flexDirection:'column', gap:'' ,alignItems:'center'}}>
    <Typography fontFamily={'arial'} fontSize={'14px'} color={'#8C9099'} sx={{display:'flex', flexDirection:'row',alignItems:'center', gap:'.3rem'}}>
    Deliver to <Downflash/>
    </Typography>
    <Typography fontFamily={'arial'} fontSize={'15px'} color={'#FE724C'}>
    4102  Pretty View  
    </Typography>
    </Box>
<Box sx={{ backgroundImage: "url('./src/icons/4043277_avatar_person_pilot_traveller_icon (1).png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height:'38px',
        width: '38px',
        borderRadius:'50%'
        }}> 
</Box>
</Box>
<Hometitle/>
<Box sx={{display:'flex',flexDirection:'row',gap:'1.6rem'}}>
<TextField
sx={styles}
defaultValue="Find for food or restaurant..."
        id="input-with-icon-textfield"
        label=""  
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
             <Magnifier/>
            </InputAdornment>
          ),
        }}
        variant="outlined"
        onFocus={rest}
      />
<Button sx={styles2}>
<Filter/>
</Button>
</Box >
<FoodMenuFunc/>
<Box sx={{display:"flex" , flexDirection:'row' , alignItems:'center' , gap:'6rem'}}>
  <Typography variant="h2" fontSize={'18px'} color={'#323643'} fontWeight={'600'}>Featured Restaurants</Typography>
  <Link  to="/Category"   style={{fontSize:'13px',color:'#f50'}} >View All <Flash/> </Link>
</Box>

<BigSlides/>
    <Box sx={{ width:'100%',display:"flex" , flexDirection:"column" , justifyContent:'flex-start' , transform:'translateY(-.2rem)'}}>
<Typography variant="h2" fontSize={'18px'} color={'#323643'} fontWeight={'600'} sx={{my:'1rem'}}>Popular Items</Typography>
      <Slides/>
</Box>
<IconTabs/>
</Container>
    )
}
