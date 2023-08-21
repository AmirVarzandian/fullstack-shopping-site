import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import { shadows } from '@mui/system';
import Stack from '@mui/material/Stack';
import { Facebookicon, Googleicon } from "../../icons";
import { Typography } from '@mui/material';
 const styles ={
 backgroundColor:'white',
    borderRadius: '28.5px',
    width: '147px',
height: '57px',
boxShadow: '1'
}
export const SigninGbtn = () =>{
    return(
<Box width={325} height={57} sx={{display:'flex' ,flexDirection: 'row', justifyContent:'space-between', alignItems:'center' }}>
<Button sx={styles} size="large" variant="text">
<Stack
  direction="row"
  justifyContent="space-between"
  alignItems="center"
  spacing={1}
>
    <Facebookicon/>
    <p>Facebook</p>
</Stack>
</Button>

<Button sx={styles} size="large" variant="text">
<Stack
  direction="row"
  justifyContent="space-between"
  alignItems="center"
  spacing={1}
>
    <Googleicon/>
    <p>Google</p>
</Stack>
</Button>
</Box>
    )
}