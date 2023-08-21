import { Menu, MenuItem } from "@mui/material"
import { useState } from "react";

export const Meno = () =>{
    
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); 
    const [text, setText] = useState(''); 
    const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, menuText: string) => {
        setText(menuText); 
        setAnchorEl(null); 
      };
    return(
        <>
        
        </>
    )
}