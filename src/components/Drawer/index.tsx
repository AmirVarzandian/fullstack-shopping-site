import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Contact, Help, MenuLoc, OnOff, Order, Payment, Profile, Setting } from '../../icons';
import { useDispatch, useSelector } from 'react-redux';
import { Welcomescreen } from '../../screens/welcome';
import { makeStyles } from '@material-ui/core/styles';
import { Homescreen } from '../../screens/Homescreen';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create(['margin', 'transform'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    marginLeft: drawerWidth,
    transform: 'scale(0.8)',
    transition: theme.transitions.create(['margin', 'transform'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

const HomeDrawer = () => {
 const [open, setOpen] = useState(false);

 const handleDrawerOpen = () => {

    setOpen(true)
  };

  const handleDrawerClose = () => {
    
    setOpen(false);
  };

  const items = [
    // {
    //   icon: './src/icons/4043277_avatar_person_pilot_traveller_icon (1).png',
    //   primary: 'Farion Wick',
    //   secondary: 'farionwick@gmail.com',
    // },
    {
      icon: <Order />,
      primary: 'My Orders',
    },
    {
      icon: <Profile />,
      primary: 'Profile',
      to: '/Profile',
    },
    {
      icon: <MenuLoc />,
      primary: 'Delivery Address',
      to: '/AddNewAddress',
    },
    {
      icon: <Payment />,
      primary: 'Payment Methods',
    },
    {
      icon: <Contact />,
      primary: 'Contact Us',
    },
    {
      icon: <Setting />,
      primary: 'Settings',
    },
    {
      icon: <Help />,
      primary: 'Helps & FAQs',
    },
  ];

  const drawerItems = items.map((item, index) => {
    return item.to ? (
      <Link to={item.to} style={{ color: 'black', textDecoration: 'none' }} key={index}>
        <ListItem button style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
          <ListItemIcon style={{ minWidth: '48px' }}>{item.icon}</ListItemIcon>
          <ListItemText primary={item.primary}  />
        </ListItem>
      </Link>
    ) : (
      <ListItem button style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} key={index}>
        <ListItemIcon style={{ minWidth: '48px' }}>{item.icon}</ListItemIcon>
        <ListItemText primary={item.primary}  />
      </ListItem>
    );
  });
  const classes = useStyles();


  return (
    <div>
      <Drawer
        open={open}
        onClose={handleDrawerClose}
        style={{ width: '240px' }}
        PaperProps={{
          style: {
            width: '240px',
          },
        }}
      >
        <List style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
        <ListItem style={{display:'flex',flexDirection:'column',margin:'0px'}}>
            <Box sx={{backgroundImage: `url('./src/icons/4043277_avatar_person_pilot_traveller_icon (1).png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
        backgroundSize: 'cover',width:'90px',height:'90px',borderRadius:'100px'}}></Box>
        <ListItemText style={{fontSize:'20px',paddingTop:'.5rem',transform:'translatey(.5rem)'}} primary="Farion Wick"  />
        <ListItemText style={{fontSize:'14px',color:'#9EA1B1'}} primary="farionwick@gmail.com"  />
        </ListItem>
          {drawerItems}
          <Box sx={{ height: '20vh', display: 'flex', alignItems: 'flex-end', pl: '.7rem' }}>
            <Button
              sx={{ backgroundColor: '#FE724C', display: 'flex', flexDirection: 'row', gap: '1rem', borderRadius: '28.5px' }}
            >
              <OnOff />
              <Typography color={'white'} fontSize={16}>
                Log Out
              </Typography>
            </Button>
          </Box>
        </List>
      </Drawer>

      <main
        className={`${classes.content} ${open ? classes.contentShift : ''}`}
 >       
 <Homescreen ali={handleDrawerOpen} />
      </main>



    </div>
  );
};

export default HomeDrawer;