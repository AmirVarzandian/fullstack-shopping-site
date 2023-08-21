import TextField from '@mui/material/TextField';
import { Container, IconButton , Box, Button } from '@mui/material';
import { Circle } from '../../icons';
import { Typography } from '@mui/material';
import { Backbtn } from '../../components/Backbtn';
import { createMuiTheme , ThemeProvider } from '@material-ui/core';
export const Verification =() =>{
    const theme = createMuiTheme({
       typography:{
        fontFamily:[
            'Sofia',
             'cursive'
        ].join(',')
       } 
    })
    const styles ={
        width:'65px'
        ,height:'65px',
        fontWeight:'bold',
        "& .MuiInputBase-root":{borderRadius: '10px'},
        "& .MuiInputBase-input":{color:'orange' , fontWeight:'600' , fontSize:'20px' , type:'number' ,  textAlign: 'center'},
        "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
            WebkitAppearance: "none",
            margin: 0,
                       
            }        
    }
    return(
        

       
<Container sx={{display:'flex', flexDirection:'column',width:'375px' ,height:'812px',alignItems:'center'  ,backgroundColor:'white' }}>
<Circle/>
<ThemeProvider theme={theme}>
<Box sx={{alignSelf:'flex-start' , mt:'-2rem'}}>
<Backbtn linko='/Login'/>
</Box>

<Box sx={{mt:'50%' ,display:'flex' , flexDirection:'column', gap:'2rem', ml:'1rem'}}>
<Typography variant="h4" fontFamily={'sans-serif'} fontWeight={'bold'}>
Verification Code
</Typography>
<Typography fontSize={'14'} color={'#9796A1'}>
Please type the verification code sent to prelookstudio@gmail.com
</Typography>
<Box sx={{display:'flex' ,flexDirection:'row',gap:'10px' }}>
<TextField  id="outlined-basic" label="" variant="outlined"  sx={styles} color="warning" inputProps={{ maxLength: 1 }}/>
<TextField id="outlined-basic" label="" variant="outlined" sx={styles} color="warning" inputProps={{ maxLength: 1 }}/>
<TextField id="outlined-basic" label="" variant="outlined" sx={styles} color="warning" inputProps={{ maxLength: 1 }}/>
<TextField id="outlined-basic" label="" variant="outlined" sx={styles} color="warning" inputProps={{ maxLength: 1 }}/>
</Box>
<Typography fontFamily={'Roboto'} sx={{'a':{color:'#FE724C'},'p':{color:'#5B5B5E' , fontSize:'16px'} , ml:'1.5rem'}}>
    <p>I don’t recevie a code! <a href=""> Please resend</a></p>
    </Typography>
</Box>
</ThemeProvider>
</Container>
    )
}
