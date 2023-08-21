import { Box, Typography, TextField } from "@mui/material";

export const ContactForm = () => {
  const formFields = [
    {
      label: "Full name",
      fontSize: 15,
    },
    {
      label: "Mobile number",
      fontSize: 16,
    },
  ];
return(
    <>
    {formFields.map((item , index )=>(
        <Box key={index} sx={{display:"flex",flexDirection:'column',gap:'.6rem'}}>
        <Typography color={'#9796A1'} fontSize={item.fontSize} marginLeft={'.6rem'}>{item.label}</Typography>
                  <TextField color="warning"  sx={{width:'339px',height:'65px',borderRadius:'50%'}}/>
                    </Box>
    ))}
    </>
)
}