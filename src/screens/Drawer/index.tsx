import React,{useState} from 'react'
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {  Contact, Help, MenuLoc,  OnOff, Order, Payment, Profile, Setting } from "../../icons";
import { makeStyles } from '@material-ui/core/styles';
import {Button , Box, Typography} from '@mui/material'

//  onClick={handleDrawerClose}
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

const Drawer2 = () =>{
    const classes = useStyles();
    const [open, setOpen] = useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    return(
        <>
        <div className={classes.root} >
      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        classes={{
          paper: classes.drawerPaper,
        }}
        onClick={handleDrawerClose}
      >
        <div className={classes.drawerContainer}>
          <List style={{display:'flex' , flexDirection:'column' , gap:'1rem'}}>
           <ListItem style={{display:'flex',flexDirection:'column',margin:'0px'}}>
            <Box sx={{backgroundImage: `url('./src/icons/4043277_avatar_person_pilot_traveller_icon (1).png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
        backgroundSize: 'cover',width:'90px',height:'90px',borderRadius:'100px'}}></Box>
        <ListItemText style={{fontSize:'20px',paddingTop:'.5rem',transform:'translatey(.5rem)'}} primary="Farion Wick"  />
        <ListItemText style={{fontSize:'14px',color:'#9EA1B1'}} primary="farionwick@gmail.com"  />
        </ListItem>
            <ListItem button style={{display:'flex' , flexDirection:'row' , gap:'1rem'}}>
              <Order/>
              <ListItemText style={{fontSize:'16px'}} primary="My Orders"  />
            </ListItem>
            <ListItem button style={{display:'flex' , flexDirection:'row' , gap:'1rem'}}>
              <Profile/>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button style={{display:'flex' , flexDirection:'row' , gap:'1rem'}}>
              <MenuLoc/>
              <ListItemText primary="Delivery Address" />
            </ListItem>
            <ListItem button style={{display:'flex' , flexDirection:'row' , gap:'1rem'}}>
              <Payment/>
              <ListItemText primary="Payment Methods" />
            </ListItem>
            <ListItem button style={{display:'flex' , flexDirection:'row' , gap:'1rem'}}>
              <Contact/>
              <ListItemText primary="Contact Us" />
            </ListItem>
            <ListItem button style={{display:'flex' , flexDirection:'row' , gap:'1rem'}}>
              <Setting/>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button style={{display:'flex' , flexDirection:'row' , gap:'1rem'}}>
              <Help/>
              <ListItemText primary="Helps & FAQs" />
            </ListItem>
            <Box sx={{height:'40vh', display:'flex' , alignItems:'flex-end',pl:'.7rem'}}>
            <Button sx={{backgroundColor:'#FE724C' , display:'flex',flexDirection:'row' , gap:'1rem' , borderRadius:'28.5px',}}><OnOff/><Typography color={'white'} fontSize={16}>Log Out</Typography></Button>
            </Box>
          </List>
          
        </div>
      </Drawer>
      <main
        className={`${classes.content} ${open ? classes.contentShift : ''}`} >
        <div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={classes.menuButton}
          >
            
           
          </IconButton>
        </div>
        <h1>Main Content</h1>
      </main>
    </div>
    </>
    )
}