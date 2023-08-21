import { Box } from "@mui/material";
import { Signinsec, Welcome} from '../../icons';
import { SigninGbtn } from '../../components/SigninWgooglebtn';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const styles = {
    width:'315px',
    height:'54px',
    color:'white',
    borderColor: 'white',
    borderRadius: '30px', 
}
export const Welcomescreen = () =>{
    return(
<Box  sx={{ backgroundImage: "url('Welcome.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height:'812px',
        width: '375px',display: 'flex' ,flexDirection:'column'
        }}> 
    <Box sx={{  display: 'flex', flexDirection:'column',justifyContent:"space-around" , alignItems:'center' , height:'100vh'  , gap:'rem'}}>
<Welcome/>
        <Box sx={{'a':{color:'white'},'p':{color:'white'} , display:'flex',flexDirection:'column',alignItems:'center' ,mt:'18rem', gap:'1rem'}}>
<Signinsec/>
<SigninGbtn/>
<Link to={'/SignUp'} >
<Button sx={styles} variant="outlined" >Start with email or phone</Button>
</Link>
    <Typography variant="body1" sx={{ fontFamily: 'popins' , fontSize:'18px' }}>
    <p>Already have an account?<a href="/LogIn">Sign In</a> </p>
    </Typography>
        </Box>
    </Box>
</Box>
    )
}