import TextField from '@mui/material/TextField';
import { Container, Box } from '@mui/material';
import { Circle, Sec } from '../../icons';
import { Typography } from '@mui/material';
import { Backbtn } from '../../components/Backbtn';
import { Signlogbtn } from '../../components/Signlogbtn';
import { SigninGbtn } from '../../components/SigninWgooglebtn';
import { UseRegister } from './UseLogin';
import { Form } from 'react-router-dom';
export const Login = () =>{
    const styles = {
        width:'324px'
        ,height:'65px',
        border:' orange',
        "& .MuiOutlinedInput-notchedOutline":{borderColor:'orange'},
        "& .MuiInputBase-root":{borderRadius: '10px'}
        }
        const {
            HandleLoginScreen,
            handleSubmit,
            register,
            errors
        } = UseRegister()
    return(
        <Container onSubmit={handleSubmit(HandleLoginScreen)} sx={{display:'flex', flexDirection:'column' ,alignItems:'center' ,width:'375px' ,height:'812px' ,justifyContent:'space-between' ,backgroundColor:'white'}} component={Form} >
            <Circle/>
            <Box sx={{alignSelf:'flex-start' , mt:'-30%'}}>
<Backbtn linko='/Welcome'/>
</Box>
            <Typography variant='h4' fontFamily={'sans-serif'} fontWeight={'bold'} textAlign={"left"} width={'100%'}>
                 Login
            </Typography>
            <Box sx={{display:'flex' ,flexDirection:'column',gap:'1rem'}}>
            <TextField error={Boolean(errors.email?.message)} helperText={errors.email?.message} inputProps={{...register("email")}} id="outlined-basic" label="Email" type='email' color='warning' sx={styles} variant="outlined" />
            <TextField error={Boolean(errors.password?.message)} helperText={errors.password?.message} inputProps={{...register("password")}} type='password' label='Password' variant='outlined' color='warning' sx={styles} InputProps={{}}/>
            </Box>
    <Box sx={{display:'flex' , flexDirection:'column' , alignItems:'center', gap:'1rem'}}>
    <Typography fontFamily={'Roboto'} sx={{'a':{color:'#FE724C',textDecoration:'none'},'p':{color:'#5B5B5E' , fontSize:'14px'}}} >
    <a href="">Forgot password?</a>
    </Typography>
    <Signlogbtn name='Login'/>
<Typography fontFamily={'Roboto'} sx={{'a':{color:'#FE724C',textDecoration:'none'},'p':{color:'#5B5B5E' , fontSize:'14px'}}} >
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