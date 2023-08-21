import { Box, Container, TextField, Typography } from "@mui/material"
import { Circle } from "../../icons"
import { Backbtn } from "../../components/Backbtn"
import { Signlogbtn } from "../../components/Signlogbtn"

export const Ressetpass = () =>{
    const styles = {
        width:'324px'
        ,height:'65px',
        border:' orange',
        "& .MuiOutlinedInput-notchedOutline":{borderColor:'orange'},
        "& .MuiInputBase-root":{borderRadius: '10px'},
        }
    return(
        <Container sx={{display:'flex', flexDirection:'column',width:'375px' ,height:'812px',alignItems:'center'  ,backgroundColor:'white' }}>
 <Circle/>
 <Box sx={{alignSelf:'flex-start' , mt:'-2rem'}}>
<Backbtn linko="/HomeScreen"/>
</Box>
<Box sx={{mt:'50%' ,display:'flex' , flexDirection:'column', gap:'2rem',}}>
<Typography variant="h4" fontFamily={'sans-serif'} fontWeight={'bold'}>
Resset Password
</Typography>
<Typography fontSize={'14'} color={'#9796A1'}>
Please enter your email address to request a password reset
</Typography>
<TextField id="outlined-basic" label="Email" color='warning' sx={styles} variant="outlined" />
</Box>
<Box sx={{mt:'3rem'}}>
<Signlogbtn name='Send new password'/>
</Box>

        </Container>
    )
}