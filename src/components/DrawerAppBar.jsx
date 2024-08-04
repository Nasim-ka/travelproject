
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Stack, Switch, Tab, Tabs, styled } from '@mui/material';
import Home from './Home/Home';
import Main from './Main';
import Services from './Services';
import Topdestination from './Topdestination';
import About from './About';
import Contactus from './Contactus';
import Banner from "./../../public/images/baner.jpg";
import { ModeNight } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  // justifyContent:"space-evenly",
  position:"relative",
  opacity:"1",
  borderRadius:"100px",
  backgroundImage:`url(${Banner})`,
  padding:"10px",
  backgroundSize: "cover",
  backgroundRepeat:"no-repeat",
  width:"100%",
  // alignItems:"center",
  // alignSelf:"center",
  // justifyContent:"center",
  // margin:"auto",
  alignItems: { xs: 'start',md:"center" },
  alignSelf: { xs: 'start',md:"center" },
  justifyContent: { xs: 'start',md:"center" },
  // paddingLeft: { xs: '60px',md:"0px" },
});


const StyleAppbar = styled(AppBar)({
  top:"0",
  display:"flex",
  // justifyContent:"space-evenly",
  width:"80%",
  position:"relative",
  borderRadius:"100px",
  // alignItems:"center",
  // alignSelf:"center",
  // justifyContent:"center",
  margin:"auto",
  alignItems: { xs: 'start',md:"center" },
  alignSelf: { xs: 'start',md:"center" },
  justifyContent: { xs: 'start',md:"center" },


});


const drawerWidth = 240;
const navItems = ['Home', 'Packages',"Services","Destinations", 'About', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const [value, setValue] = useState(0);
  const onChange = (e, Val) => {
    setValue(Val);
  };


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 ,display:{xs:"none",md:"block"} }}>
        travel
      </Typography>
      <Divider />

     
        {/* {navItems.map((item) => (
          <Tabs key={item} disablePadding  onChange={onChange}>
            <Tab sx={{ textAlign: 'center' }}  value={value} key={item} label={item}/>
          </Tabs>
          
        ))} */}
       
      <Tabs disablePadding value={value} onChange={onChange}  textColor='#fff' orientation="vertical" >
          {navItems.map((item) => (
          
        <Tab label={item} key={item} sx={{display:"block",  textAlign: 'center' }}/>
       
     
       ))}
          </Tabs>
    </Box>
  );

  // const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <> 
      <CssBaseline />
      <StyleAppbar component="nav" sx={{borderRadius:{xs:"5px",md:"100px"}}}>
        <StyledToolbar sx={{borderRadius:{xs:"5px",md:"100px"}}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            value={value} onChange={onChange}
           
            sx={[
             
              {
                mr: 2, display: { md: 'none' },paddingLeft: { xs: '30px',md:"0px" },
                '&:hover': {
                  color: 'white',
                  backgroundColor: 'none',
                },
              },
             
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}
          >
            travel
          </Typography>
          <Tabs value={value} onChange={onChange} centered textColor='#fff' sx={{ display: { xs: 'none', md: 'block' },textAlign:"center",justifyContent:"space-evenly" }}>
          {navItems.map((item) => (
          
        <Tab label={item} key={item}/>
       
     
       ))}
          </Tabs>
        </StyledToolbar>
      
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
 
     
      </StyleAppbar>
      <TabPanel value={value} index={0} ><Main/></TabPanel>
        <TabPanel value={value} index={1} ><Home/></TabPanel>
        <TabPanel value={value} index={2}><Services/></TabPanel>
        <TabPanel value={value} index={3}><Topdestination/></TabPanel>
        <TabPanel value={value} index={4}><About/></TabPanel>
        <TabPanel value={value} index={5}><Contactus/></TabPanel>


      {/* <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
 
      </nav> */}
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
       
      </Box>
      </>
    
  );
}


export default DrawerAppBar;


function TabPanel(props){
  const {children,value,index}=props;
  
  return(
  <div>
  {
  value === index &&(
  <h1>{children}</h1>
  )
  }
  </div>
  )
  }