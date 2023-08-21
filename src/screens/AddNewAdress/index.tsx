import { Box, Button, Container, List, Menu, MenuItem, TextField, TextareaAutosize, Typography } from "@mui/material"
import { Backbtn } from "../../components/Backbtn"
import { useEffect, useState } from "react";
import { FlashBtn } from "../../icons";
import { Signlogbtn } from "../../components/Signlogbtn";
import { ContainerStyleAddress } from "./components/styles";
import { ContactForm } from "./components/Input";

export const AddNewAdress = () =>{
    const [text, setText] = useState(''); 
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); 

  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, menuText: string) => {
    setText(menuText); 
    setAnchorEl(null); 
  };
  const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value); 
  };
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget); 
  };
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  useEffect(() => {
    const textField = document.getElementById('my-textfield');
    const button = document.getElementById('my-button')!;

    if (isFocused) {
      button.style.border = '2px solid #f50';
    } else {
      button.style.border = '';
    }
  }, [isFocused]);
  const men = [
    {esm:"Shiraz"},
    {esm:"Tehran"},
    {esm:"Mashhad"},
    {esm:"kerman"},
    {esm:"Esfahan"},
]
    return(
        <Container sx={ContainerStyleAddress}>
            <Box sx={{display:'flex',flexDirection:'row',mt:'2.4rem',alignItems:'center'}}>
                <Box sx={{transform:"translateX(-5rem)"}}>
<Backbtn linko="/HomeScreen" />
                </Box>
<Typography fontSize={18}>Add new address</Typography>
            </Box>
            <List sx={{display:"flex",flexDirection:'column',gap:'2.5rem',"& .MuiInputBase-root":{borderRadius:'10px'}}}>
            <ContactForm/>       
            <div>
                <Box sx={{}}>
                <Typography color={'#9796A1'} fontSize={16} marginLeft={'.6rem'} marginBottom={'.6rem'}>City</Typography>
      <Box id="my-button"  sx={{backgroundColor:"white" ,display:'flex',flexDirection:'row',alignItems:'center',"& .MuiOutlinedInput-notchedOutline":{border:'none'},border:'2px solid rgba(0, 0, 0, 0.23)',width:'339px',height:'65px',borderRadius:'10px','&:hover':{border:'2px solid #f50'} }}>
      <TextField
    id="my-textfield" onFocus={handleFocus} onBlur={handleBlur}
    sx={{border:'none',"&:focus":{border:'2px solid #f50'},width:'300px'}} 
    value={text} 
    onChange={handleTextFieldChange}
    />
        <Button sx={{}} onClick={handleMenuOpen}><FlashBtn/></Button>
        </Box>
    </Box>
      <div> 
      <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={() => setAnchorEl(null)}
    >
      {men.map((item , index) => (
        <MenuItem key={index} onClick={(event) => handleMenuItemClick(event, `${item.esm}`)}>
          {item.esm}
        </MenuItem>
      ))}
    </Menu>
      </div>
    </div>
    <Box sx={{display:"flex",flexDirection:'column',gap:'.6rem'}}>
<Typography color={'#9796A1'} fontSize={16} marginLeft={'.6rem'}>Full address</Typography>
          <TextareaAutosize color="warning"  style={{width:'339px',height:'145px',borderRadius:'10px',resize:'none'}}/>
            </Box>
          </List>
          <Box sx={{mt:'5.4rem'}}>
          <Signlogbtn name="Save"/>
          </Box>
          </Container>
    )
}