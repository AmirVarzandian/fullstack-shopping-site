import { Box, Container, Typography } from "@mui/material"
import { Bottom, Fastfood, Filter, PizzaContainer } from "../../icons"
import { Backbtn } from "../../components/Backbtn"
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CategorySliderFunction from "../../components/CategorySliderFunction";
const styles2 ={
    backgroundColor:'white',
       borderRadius: '10px',
       width: '51px',
   height: '51px',
   
         minWidth:'51px',
         backgroundRepeat: "no-repeat",
         backgroundPosition: 'center',
         backgroundSize: 'cover',
         
   }
export const Category = () =>{
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return(
        <Container sx={{display:'flex', flexDirection:'column' ,alignItems:'center' ,width:'375px' ,height:'872px' ,justifyContent:'' ,backgroundColor:'white' ,overflow:"auto",overflowX:'hidden','&::-webkit-scrollbar': {
            width: '0.4em',
            backgroundColor: 'white',
            
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#f50',
            borderRadius: '10px',
          }, }}>
            <Box sx={{display:'flex',flexDirection:'row'}}>
<Box sx={{display:'flex',flexDirection:'column',transform:'translateX(6rem)',mt:'1rem',gap:'2rem'}}>
    <Backbtn linko="/HomeScreen"/>
    <Fastfood/>
</Box>
<PizzaContainer style={{marginRight:'4rem'}}/>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',gap:'6rem',alignItems:'center'}}>

            <Typography>Sort by:  <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{color:"#FE724C",fontSize:'13px',fontFamily:'sans-serif'}}
      >
        Popular<Bottom/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Low Price</MenuItem>
        <MenuItem onClick={handleClose}>High Price</MenuItem>
        <MenuItem onClick={handleClose}>Popular</MenuItem>
      </Menu></Typography>
      <Button sx={styles2}>
<Filter/>
</Button>
            </Box>
            <CategorySliderFunction/>
        </Container>
    )
}