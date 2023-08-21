import { Box } from "@mui/material";
import { Storeicon } from "../../icons";
import Stack from '@mui/material/Stack';
import React, { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
export const Landingscreen = () =>{
        const navigate = useNavigate();
        useEffect(() => {
          const timer = setTimeout(() => {
            navigate('/Welcome'); 
          }, 3000); 
          return () => clearTimeout(timer);
        }, [history]);
    return(
        <>
<Box sx={{
    backgroundColor: '#FE724C',display: 'flex',flexDirection:'column',justifyContent:"center" , alignItems:'center',
}}width={375} height={812}>
<Storeicon/>
<Stack sx={{ width: '100%', color: '#ffffffff',transform:'translateY(10rem)' }} spacing={2}>
      <LinearProgress color="inherit" />
    </Stack>
</Box>
          </>
    )
}
