import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CategorySlider } from "../CategorySlider";
import { Box, Button } from "@mui/material";
import { deleteSavesService, getTodoService4 } from "../../Api/services/save";

interface SlideData {
    _id:any
    img: string;
    name: string;
    name2: string;
    star: number;
    rew: string;
    price: number;
    onClick: () => void;
  }
  const FavoriteSlideFunction: React.FC = () => {
    const navigate = useNavigate();
    const [todoList , setTodoList] = useState<[]>([])
    const fetchTodoList = useCallback(async()=>{
        await getTodoService4().then(res=>{
             setTodoList(res.data)
         })
       },[])
       useEffect(()=>{
        fetchTodoList()
      },[fetchTodoList])
  
    const slides = todoList.map((slide:SlideData) => (
     
      <Box key={slide._id} sx={{display:'flex',flexDirection:'column',gap:'1.5rem' ,cursor: 'pointer' }} onClick={slide.onClick}>
       
         <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/FoodDetail/${slide._id}`}>
        <CategorySlider pic={slide.img} name1={slide.name} name2={slide.name2} star={slide.star || 4.5} rew={slide.rew} money={slide.price}  />
        </Link>
       
        <Button onClick={ async ()=>{
await deleteSavesService(slide._id)
fetchTodoList()
} 
} sx={{backgroundColor:'#FE724C',color:'black'}}>Remove</Button>
      </Box>
    ));
  
    return (
      <>
        {slides}
        
      </>
    );
  };
  
  export default FavoriteSlideFunction;