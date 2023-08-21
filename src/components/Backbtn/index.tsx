import Button from '@mui/material/Button';
import { Back } from '../../icons';
import { Link, useNavigate } from 'react-router-dom';
type IROTO ={
    linko:string
}
export const Backbtn = (prop:IROTO)=>{
    const styles ={
        backgroundColor:'white',
           borderRadius: '10px',
           width: '38px',
       height: '38px',
       boxShadow: '1',
             minWidth:'38px',
            
      display:'flex',
       alignItems:'flexStart',
    //    justifyContent:'center'
       }
      
    return(
        <Link to={`${prop.linko}`}>
<Button sx={styles}>
<Back/>
</Button>
        </Link>
    )
}
