import { Swiper, SwiperSlide } from "swiper/react";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Slidero } from "../Slider";
import { getTodoService } from "../../Api/services/todo";
import { useCallback, useEffect, useState } from "react";


interface SlideData {
  _id:any
  img: string;
  name: string;
  star: number;
  rew: string;
  onClick: () => void;
}

const BigSlides: React.FC = () => {
  const navigate = useNavigate();
  const [todoList , setTodoList] = useState<[]>([])
  const fetchTodoList = useCallback(async()=>{
      await getTodoService().then(res=>{
           setTodoList(res.data)
       })
     },[])
     useEffect(()=>{
  
      fetchTodoList()
    },[fetchTodoList])

  // const slidesData: SlideData[] = [
  //   {name:'McDonald`s' , star:4.5 , rew:'25+' , pic:'./src/Pic/Mask Group (1).png', onClick: SliderDate1},
  //   {name:'McDonald`s' , star:4.5 , rew:'25+' , pic:'./src/Pic/Mask Group (1).png', onClick: SliderDate2}
  // ];

  const slides = todoList.map((slide:SlideData) => (
   
    <SwiperSlide key={slide._id} style={{ cursor: 'pointer' }} onClick={slide.onClick}>
       <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/FoodDetail/${slide._id}`}>
      <Slidero pic={slide.img} name={slide.name}  star={slide.star} rew={slide.rew}  />
      </Link>
    </SwiperSlide>
  ));

  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    width={180}
    height={200}
    spaceBetween={120}
    slidesPerView={1}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
      {slides}
    </Swiper>
  );
};

export default BigSlides;