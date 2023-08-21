import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Heart2, Location, Nav, Ring, Store } from '../../icons';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const stylo ={
"& .MuiTabs-scroller":{backgroundColor:'white'},
"& .MuiTabs-indicator":{backgroundColor:'#FE724C'},
}
function MySvg1(props: React.SVGProps<SVGSVGElement>) { // pass SVGProps as a generic type
    return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.8663 1.57634e-08C16.8402 0.000178998 15.8326 0.273457 14.9471 0.791771C14.0615 1.31009 13.3299 2.05476 12.8273 2.94932C12.3246 2.05455 11.5927 1.30974 10.7069 0.791409C9.82109 0.273081 8.81324 -7.57651e-05 7.78692 1.57634e-08C6.21506 0.0848925 4.73644 0.772507 3.65864 1.91981C2.58084 3.0671 1.98685 4.58575 2.00022 6.15985C2.00022 14.1869 12.8273 19.787 12.8273 19.787C12.8273 19.787 23.6544 14.1897 23.6544 6.15985C23.6678 4.58552 23.0736 3.06667 21.9955 1.91933C20.9174 0.771995 19.4384 0.084536 17.8663 1.57634e-08V1.57634e-08Z" />
        </svg>
    );
  }
  type TabValue = number ;
export const IconTabs=()=> {
  const [value, setValue] = React.useState(0);

 const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [activeTab, setActiveTab] = React.useState<TabValue>(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: TabValue) => {
    setActiveTab(newValue);
  };
const navigate = useNavigate()
  return (
    <Box sx={stylo}>
    <Tabs value={activeTab}  onChange={handleTabChange} aria-label="icon tabs example" sx={{width:'375px', position: 'sticky',
    top: 0,
    backgroundColor: '#ffffff',
    zIndex: 1,}} >
      <Tab onClick={()=>navigate('/HomeScreen')} icon={<Nav style={{ fill: activeTab === 0 ? '#FE724C' : 'gray' }}/>} aria-label="phone" sx={{minWidth:'75px'}} value={0} />
      <Tab  icon={<Location style={{ fill: activeTab === 1 ? '#FE724C' : 'gray' }}/>} aria-label="favorite" sx={{minWidth:'75px'}} value={1} />
      <Tab onClick={()=>navigate('/cart')} icon={<Store style={{ fill: activeTab === 2 ? '#FE724C' : 'gray' }}/>} aria-label="person" sx={{minWidth:'75px'}} value={2}/>
      <Tab onClick={()=>navigate('/favorite')} icon={<Heart2 style={{ fill: activeTab === 3 ? '#FE724C' : 'gray' }}/>} aria-label="person" sx={{minWidth:'75px'}} value={3}/>
      <Tab icon={<Ring style={{ fill: activeTab === 4 ? '#FE724C' : 'gray' }}/>} aria-label="person" sx={{minWidth:'75px'}} value={4}/>
    </Tabs>
    </Box>
  );
}