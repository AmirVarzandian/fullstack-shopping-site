import { Box } from "@mui/material";
import { Welcomescreen } from './screens/welcome';
import {  RegistrationScreen } from './screens/Registration';
import { FoodDetails } from './screens/FoodDetails';
import { ProfileContainer } from './screens/Profile';
import { AddNewAdress } from './screens/AddNewAdress';
function App() {
  return (
    <Box sx={{display:'flex' , alignItems:'center' , justifyContent:'center'}}>
      <RegistrationScreen/>
      <Welcomescreen/>
     <ProfileContainer/>
     <FoodDetails/>
<AddNewAdress/>
    </Box>   
  )
}

export default App
