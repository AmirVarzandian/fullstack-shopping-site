import { Button } from '@mui/material';
type buttoni = {
    name?:string
}
export const Signlogbtn = (prop:buttoni) =>{
return(
    <Button type='submit' variant="contained" sx={{backgroundColor:'#FE724C', borderRadius:'28px' , width:'248px' , height:'60px',fontSize:'16.5px',fontFamily:'Arial' }}>{prop.name}</Button>
)
}