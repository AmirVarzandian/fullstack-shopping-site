import { Container, Box } from '@mui/material';
import { Circle, Sec } from '../../icons';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import * as React from 'react'
import { Signlogbtn } from '../../components/Signlogbtn';
import { SigninGbtn } from '../../components/SigninWgooglebtn';
import { Form } from 'react-router-dom';
import { UseSignUp } from './UseSignup';
const styles = {
    width:'324px'
    ,height:'65px',
    border:' orange',
    "& .MuiOutlinedInput-notchedOutline":{borderColor:'orange'},
    "& .MuiInputBase-root":{borderRadius: '10px'}
    }



export const Signup = ()=>{
    const {
        HandleLoginScreen,
        handleSubmit,
        register,
        errors
    } = UseSignUp()
    return(
        <Container onSubmit={handleSubmit(HandleLoginScreen)} component={Form} sx={{display:'flex', flexDirection:'column' ,alignItems:'center' ,width:'375px' ,height:'812px' ,justifyContent:'space-between' ,backgroundColor:'white'}}>
            <Circle/>
            <Typography variant='h4' fontFamily={'sans-serif'} fontWeight={'bold'} textAlign={"left"} width={'100%'}>
                 Sign up
            </Typography>
           <TextField error={Boolean(errors.username?.message)} helperText={errors.username?.message} inputProps={{...register("username")}} id="outlined-basic" label="Full name" color='warning' sx={styles} variant="outlined" />  
            <TextField error={Boolean(errors.email?.message)} helperText={errors.email?.message} inputProps={{...register("email")}} id="outlined-basic" label="Email" type='email' color='warning' sx={styles} variant="outlined" />
            <TextField error={Boolean(errors.password?.message)} helperText={errors.password?.message} inputProps={{...register("password")}} type='password' label='password' variant='outlined' color='warning' sx={styles} InputProps={{
            }}/>
            <Box sx={{display:'flex' , flexDirection:'column' , alignItems:'center'}}>
<Signlogbtn name='Sign in'/>
<Typography fontFamily={'Roboto'} sx={{'a':{color:'#FE724C'},'p':{color:'#5B5B5E' , fontSize:'14px'}}} >
    <p>Don’t have an account? <a href="">Sign Up</a> </p>
    </Typography>
            </Box>
<Box sx={{mb:'1.5rem', display:'flex' ,flexDirection:'column', gap:'1rem'}}>
<Sec/>
<SigninGbtn/>
</Box>
        </Container>
    )
}