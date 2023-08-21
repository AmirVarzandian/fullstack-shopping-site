import { Swiper, SwiperSlide } from "swiper/react";
import { MiniSlider } from "../MiniSlider";
import { Link, useNavigate } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useCallback, useEffect, useState } from "react";
import { getTodoService2 } from "../../Api/services/todo";
interface SlideData {
  _id:any
  img: string;
  name: string;
  name2: string;
  star: number;
  rew: string;
  price:number;
  onClick: () => void;
}
const Slides: React.FC = () => {
  const navigate = useNavigate();

  const [todoList , setTodoList] = useState<[]>([])
  const fetchTodoList = useCallback(async()=>{
      await getTodoService2().then(res=>{
           setTodoList(res.data)
       })
     },[])
     useEffect(()=>{
  
      fetchTodoList()
    },[fetchTodoList])
  // const slidesData: SlideData[] = [
  //   { pic: "./src/pic/Mask Group (2).png", name1: "Salmon Salad", name2: "Baked salmon fish", star: 4.7, rew: "25+", star2: 5.5, onClick: SliderDate3 },
  //   { pic: "./src/pic/Mask Group (3).png", name1: "Salmon Salad", name2: "Baked salmon fish", star: 4.1, rew: "25+", star2: 3.5, onClick: SliderDate4 },
  //   { pic: "./src/pic/Mask Group (3).png", name1: "Salmon Salad", name2: "Baked salmon fish", star: 4.1, rew: "25+", star2: 3.5, onClick: SliderDate4 }
  // ];

  const slides = todoList.map((slide:SlideData) => (
    <SwiperSlide key={slide._id} style={{ cursor: 'pointer' }} onClick={slide.onClick}>
      <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/FoodDetail/${slide._id}`}>
      <MiniSlider pic={slide.img} name1={slide.name} name2={slide.name2} star={slide.star} rew={slide.rew} star2={slide.price} />
      </Link>
    </SwiperSlide>
  ));
 
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
  width={180}
  spaceBetween={0}
  slidesPerView={1}
  onSwiper={(swiper) => console.log(swiper)}
  onSlideChange={() => console.log('slide change')}
    >
      {slides}
    </Swiper>
  );
};

export default Slides;