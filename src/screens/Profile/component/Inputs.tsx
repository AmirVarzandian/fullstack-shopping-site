import { List, Box, Typography, TextField } from "@mui/material";
export const InfoForm = () => {
  const formFields = [
    {
      label: "Full name",
      fontSize: 15,
    },
    {
      label: "E-mail",
      fontSize: 16,
    },
    {
      label: "Phone Number",
      fontSize: 16,
    },
  ];
  return (
    <List sx={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
      {formFields.map((field) => (
        <Box key={field.label} sx={{ display: "flex", flexDirection: "column", gap: ".6rem" }}>
          <Typography color={"#9796A1"} fontSize={field.fontSize} marginLeft={".6rem"}>
            {field.label}
          </Typography>
          <TextField color="warning" sx={{ width: "339px", height: "65px", borderRadius: "50%" }} />
        </Box>
      ))}
    </List>
  );
}