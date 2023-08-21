import { Box } from "@material-ui/core"
import { Button } from "@mui/material"
import React from "react"
import { FunctionComponent } from 'react';
import { SVGProps } from 'react';
import {useState} from "react"
const styles3 ={
    backgroundColor:'white',
       borderRadius: '100px',
       width: '58px',
   height: '98px',
   display:'flex',
   flexDirection:'column',
   gap:'',
         minWidth:'51px',
         backgroundRepeat: "no-repeat",
         backgroundPosition: 'center',
         backgroundSize: 'cover',
         boxShadow: '1',
         color:'#67666D',
         fontSize:'11px',
         'p':{textTransform:'none'},
         '&focus':{
         'p':{
          color:'red'
         }
         },
         "& .MuiButtonBase-root":{ '&.Mui-hover': { backgroundColor: 'red'}},
         "& .MuiTouchRipple-root": { '&.Mui-active': { backgroundColor: 'red'}}
        
   }
   type IBtn={
    name:string,
    pic:any
   }
  
export const FoodMenuBTN=(prop: IBtn) =>{
    const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

    return(
     <>
         <Button id="btn1" sx={styles3} onClick={handleClick} style={{ backgroundColor: clicked ? '#f50' : 'white' ,color: clicked ? 'white' : '#67666D' }}>{prop.pic}{prop.name}</Button>
        
      
     </>
        
        
    )
}