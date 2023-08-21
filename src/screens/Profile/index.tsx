import { Box, Container, Typography } from "@mui/material"
import { Backbtn } from "../../components/Backbtn"
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { Camera, Mammad } from "../../icons";
import { ContainerStyle } from "./component/Styles";
import { InfoForm } from "./component/Inputs";
export const ProfileContainer = () =>{
    return(
        <Container sx={ContainerStyle}>
<Box sx={{backgroundImage: `url('./src/pic/Group.png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width:'378px',
        height:'285px',
        display:"flex",
        flexDirection:"column",  
       gap:"3rem"
        }}>
            <Box sx={{mt:'2rem',ml:'1.5rem'}}>
            <Backbtn linko="/HomeScreen" />
            </Box>
        </Box>
        <Box sx={{transform:'translateY(-9rem)'}}>
        <Badge 
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
            <Avatar sx={{ bgcolor:'white',width:'27px',height:'27px',transform:"translateX(-.6rem)",boxShadow:'1' }}>
            <Camera/>
          </Avatar>}>
          <Box sx={{p:'.5rem',backgroundColor:'white',borderRadius:'50%'}}>
        <Avatar sx={{width:'90px',height:'90px'}}>
            <Mammad/>
        </Avatar>
          </Box>
      </Badge>
      <Box sx={{display:'flex',flexDirection:'column',gap:'.4rem',alignItems:'center'}}><Typography fontSize={20} fontWeight={'bold'}>Eljad Eendaz</Typography>
      <Typography fontSize={12} color={'#9796A1'}>Edit Profile</Typography>
      </Box>
          </Box>
          <InfoForm/>
        </Container>
    )
}