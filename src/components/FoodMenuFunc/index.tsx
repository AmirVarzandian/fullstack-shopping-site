import { Box } from "@mui/material"
import { Asian, Donut, Hamburgar, Mexican, Pizza } from "../../icons"
import { FoodMenuBTN } from "../FoodOrganization"

export const FoodMenuFunc = () =>{
    const items = [
        { pic: <Hamburgar />, name: 'Burger' },
        { pic: <Donut />, name: 'Donut' },
        { pic: <Pizza />, name: 'Pizza' },
        { pic: <Mexican />, name: 'Mexican' },
        { pic: <Asian />, name: 'Asian' },

    ]
    const RenderFoodMenuFunc = () => 
    items.map((item,index) =>(
        <FoodMenuBTN key={index} pic={item.pic} name={item.name}/>
    ))
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem', my: '1.5rem' }}>
          {RenderFoodMenuFunc()}
        </Box>
    )
}