import { Box, Button, Typography } from "@mui/material"
import { X } from "../../icons"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../../Redux/cartSlice';
import { useEffect } from "react";
type ICARTSLIDE = {
    pic:string ,
    name: string ,
    price : number
}
export const CartSlides = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product:any) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product:any) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product:any) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const styles = {
    borderRadius: '50%',
    width: 30,
    height: 30,
    minWidth: 0,
    boxShadow: 'none',backgroundColor:'white',color:'#FE724C',border:'1px solid #FE724C',
    '&:hover': {
      backgroundColor: '#D3D1D8',
    },fontSize:'20px'
    }
    const styles2 = {
      borderRadius: '50%',
      width: 30,
      height: 30,
      minWidth: 0,
      backgroundColor:'orange',
      color:'white',
  '&:hover': {
        backgroundColor: '#f50',
      },fontSize:'20px'
      }
    return(
        <>
         {cart.cartItems.map((cartItem:any) => (
        <Box sx={{width:'20.3rem' , height:'5.1rem',display:'flex',flexDirection:'row',justifyContent:'space-between',borderRadius:'10px',p:'.8rem'}}>
        <img
    style={{
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '5.1rem',
      height: '5.1rem',
      borderRadius:'20px'
    }}
    src={'http://localhost:5000' + cartItem.img}
  />

  <Box sx={{display:'flex', flexDirection:'column' , justifyContent:"space-between" , my:''}} >
    <Typography fontSize={18} fontWeight={'bold'}>{cartItem.name}</Typography>
    <Typography fontSize={13} color={"#8C8A9D"} fontWeight={''} sx={{}}>One Product : ${cartItem.price} </Typography>
    <Typography fontSize={15} color={"#FE724C"} fontWeight={'bold'} sx={{}}>{cartItem.cartQuantity} Product : {cartItem.price * cartItem.cartQuantity} </Typography>
  </Box>
  <Box sx={{display:'flex', flexDirection:'column' , justifyContent:"space-between" , my:''}}>
    <Button sx={{width:'16.7px' , height:'16.7px',transform:'translateX(3rem)'}} onClick={()=>handleRemoveFromCart(cartItem) }><X/></Button>
    <Box sx={{display:"flex",flexDirection:'row',gap:".5rem",alignItems:'center'}}>
  <Button variant="contained"  sx={styles} onClick={()=>handleDecreaseCart(cartItem)}>-</Button>
    <Typography fontSize={19} fontWeight={'bold'}>{cartItem.cartQuantity}</Typography>
    <Button variant="contained"  sx={styles} onClick={()=>handleAddToCart(cartItem)} >+</Button>
  </Box>
  </Box>
        </Box>
        ))}
        </>
    )
}