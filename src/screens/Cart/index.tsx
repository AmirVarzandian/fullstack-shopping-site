import { Container, Typography } from "@mui/material";
import {  useEffect } from "react";
import { Box } from "@mui/material";
import { Backbtn } from "../../components/Backbtn";
import { CartSlides } from "../../components/CartSlides";
import { Signlogbtn } from "../../components/Signlogbtn";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { getTotals } from '../../Redux/cartSlice';
  const Cart: React.FC = () => {
    const cart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getTotals());
    }, [cart, dispatch]);
    return (
      <>
      <Container maxWidth={false}  sx={{display:'flex', flexDirection:'column' ,alignItems:'center' ,width:'375px' ,height:'872px'  ,backgroundColor:'white' ,overflow:"auto",overflowX:'hidden','&::-webkit-scrollbar': {
            width: '0.4em',
            backgroundColor: 'white',
            
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#f50',
            borderRadius: '10px',
          }, }}>
            <Box sx={{display:'flex',flexDirection:'row',width:"375px",alignItems:'center',justifyContent:'center',mt:'1rem'}}>
              <Box sx={{transform:'translateX(-7rem)'}}>
    <Backbtn linko="/Category"/>
              </Box>
              <Box sx={{mr:'1rem'}}>
 <Typography fontSize={18} color={"#111719"}>Cart</Typography>
              </Box>
            </Box>
            <Box sx={{mt:'2rem'}}>
        <CartSlides/>
            </Box>
        <Box width={"100%"}  sx={{mt:'10rem'}}>
          <hr style={{borderColor:'#F1F2F3'}}/>
          <Box sx={{  my:'1rem',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <Typography fontWeight={500} fontSize={16} sx={{}}>Total</Typography>
          <Typography fontWeight={"bold"} fontSize={17} sx={{display:'flex',flexDirection:'row',alignItems:"center",gap:'.2rem'}}>${cart.cartTotalAmount}<Typography fontSize={15} color={'#9796A1'}>USD</Typography></Typography>
          </Box>
          <hr style={{borderColor:'#F1F2F3'}}/>
        </Box>
        <Box sx={{mt:'11rem'}}>
        <Signlogbtn name='Checkout'/>
        </Box>
        </Container>
      </>
    );
  };
  export default Cart;
