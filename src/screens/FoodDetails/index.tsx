import { Box, Button, Typography,Container, List, ListItem, ListItemText } from "@mui/material"
import { Star, StoreBTN} from "../../icons"
import { SVGProps, useEffect, useState } from "react";
import { Backbtn } from "../../components/Backbtn";
import Link from '@mui/material/Link';
import {  useNavigate } from 'react-router-dom';
import { RadioBTN } from "./component/RadioBTN";
import { RadioBTNPicName } from "./component/RadioBTNPicName";
import { useParams } from "react-router-dom";
import { getSingleTodoService, getSingleTodoService2, getSingleTodoService3 } from "../../Api/services/todo";
import { addTodoService } from "../../Api/services/save";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlice";


function MySvg(props: SVGProps<SVGSVGElement>) { // pass SVGProps as a generic type
    return (
        <svg width="19" height="18" viewBox="0 0 16 14" {...props}   xmlns="http://www.w3.org/2000/svg">
        <path d="M11.0549 1.09835e-08C10.34 0.00012472 9.63794 0.190537 9.02091 0.551683C8.40389 0.912829 7.8941 1.4317 7.54391 2.055C7.19363 1.43155 6.68369 0.912586 6.06648 0.55143C5.44926 0.190275 4.74702 -5.27909e-05 4.03191 1.09835e-08C2.93669 0.0591506 1.90643 0.53826 1.15545 1.33766C0.404471 2.13707 -0.00940679 3.19522 -9.01977e-05 4.292C-9.01977e-05 9.885 7.54391 13.787 7.54391 13.787C7.54391 13.787 15.0879 9.887 15.0879 4.292C15.0972 3.19506 14.6832 2.13676 13.932 1.33733C13.1808 0.537904 12.1503 0.0589022 11.0549 1.09835e-08V1.09835e-08Z"/>
        </svg>
        
    );
  }
export const FoodDetails = () =>{
    const [color, setColor] = useState('#67666D');
    const [user , setUser] = useState<any>({
      _id:'',
      img:"",
      name:"",
      star:0,
      rew:0,
      price:0

    })

    const handleClick = () => {
      setColor(color === '#67666D' ? '#FE724C' : '#67666D');
      addTodoService(user)
    };
    // const { family,picts,star,price } = store.getState();
    const {id} = useParams()
   
    useEffect(() => {
      const fetchUser = async () => {
        try {
          const res1 = await getSingleTodoService(id || '');
          const res2 = await getSingleTodoService2(id || '');
          const res3 = await getSingleTodoService3(id || '');
          setUser((prevUser: any) => ({ ...prevUser, ...res1.data, ...res2.data,...res3.data }));
        } catch (error) {
          console.error('Error retrieving user data:', error);
        }
      };
  
      fetchUser();
    }, [id]);
    console.log(user)
    const dispatch = useDispatch();
  const history = useNavigate();
    const handleAddToCart = (products:any) => {
      dispatch(addToCart(products));
      history("/cart");
    };
    return(
        <Container sx={{display:'flex', flexDirection:'column' ,alignItems:'center' ,width:'375px' ,height:'872px' ,justifyContent:'' ,backgroundColor:'white' ,overflow:"hidden" }}>
    <List>
    <ListItem>
<Box sx={{position:'relative' ,width: '323px',
      height: '206px',mt:'1rem'}}>
          <img
    style={{
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '323px',
      height: '206px',
      borderRadius:'10px'
    }}
    src={'http://localhost:5000' + user.img}
  />
            <Box sx={{display:"flex" , flexDirection:"row" , alignItems:"center" , justifyContent:"center",gap:'12.5rem' , pt:".6rem" , px:".6rem" ,position:'absolute',top:0}}>
<Backbtn linko="/HomeScreen" />
<Button onClick={handleClick}    sx={{width:"20px",height:"28px",borderRadius:"100px" , backgroundColor:"white"}}><MySvg style={{ fill: color }} /></Button>
            </Box>
</Box>
</ListItem>
<ListItem>
<Box>
  <Typography color={'#323643'} fontSize={'28px'} fontWeight={'bold'}>{user.name}</Typography>  
  <Box sx={{width:"163.31px" , height:"28px" ,display:"flex" , flexDirection:"row" ,gap:".4rem" ,  alignItems:"center" , borderRadius:"100px"}}>
  <Star width={17} height={20} />
    <Typography fontSize={"14px"}  variant="h1" fontWeight={'bold'}  >{user.star}</Typography>   
    <Typography fontSize={"14px"} color={"#9796A1"}>{user.rew}</Typography>
    <Link href="#"  color={'#FE724C'} fontSize={'13px'}>View All  </Link>
</Box>
</Box>
</ListItem>
<ListItem>
<Box sx={{display:'flex' , flexDirection:'row',gap:"12.5rem"}}>
  <Typography color={'#FE724C'} fontSize={22} fontWeight={'bold'}>${user.price}</Typography>
  {/* <INCDEC quantity={quantity} min={setQuantity(quantity-1)} sum={quantity+1}/> */}
</Box>
</ListItem>
<ListItem>
<ListItemText  style={{fontSize:'15px',color:'#858992'}} >
Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.
</ListItemText>
</ListItem>
<ListItem>
<Typography  style={{fontSize:'18px',color:'#323643',fontWeight:'bold'}} >
Choice of Add On
</Typography>
</ListItem>
<ListItem>
  <RadioBTNPicName/>
<RadioBTN/>
    </ListItem>
</List>
<Button  sx={{backgroundColor:'#FE724C',width:"167px",height:'53px',borderRadius:'28.5px',color:'white',fontSize:'14px',display:'flex',flexDirection:"row",gap:'1rem','&:hover': {
          bgcolor: '#D3D1D8', 
        },mt:'6rem'}} onClick={() => {
          // addTodoService(user),
          handleAddToCart(user)
          }} ><StoreBTN/>Add to cart </Button>
           </Container>
    )
}