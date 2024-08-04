import styled from '@emotion/styled';
import { ModeNight, Pets } from "@mui/icons-material";
import { AppBar,Box,Container,ListItemButton,ListItemIcon,Stack,Switch,Toolbar } from "@mui/material"
import {Typography } from '@mui/material';
import Banner from "../../../public/images/baner.jpg";
import {Tab,Tabs} from '@mui/material';
import { useState } from 'react';
import Home from '../Home/Home';
import Services from '../Services';
import Feed from '../Feed';
import Topdestination from '../Topdestination';
import Contactus from '../Contactus';
import About from '../About';
import Main from '../Main';


const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-evenly",
  position:"relative",
  opacity:"1",
  borderRadius:{md:"100px"},
  backgroundImage:`url(${Banner})`,
  padding:"10px",
  backgroundSize: "cover",
  backgroundRepeat:"no-repeat",
  width:"100%",
  alignItems:"center",
  alignSelf:"center",
  // justifyContent:"center",
  margin:"auto"
});
// const StyleNavbar = styled(Container)({
//   top:"0",
//   display:"flex",
//   justifyContent:"space-evenly",
//   borderRadius:"100px",
//   width:"90%",
//   position:"relative",
//   padding:"0",
//   fontWeight:"bold",
//   alignItems:"center",
//   alignSelf:"center",
//   // justifyContent:"center",
//   margin:"auto",

// });
const StyleAppbar = styled(AppBar)({
  top:"0",
  display:"flex",
  // justifyContent:"space-evenly",
  width:"75%",
  position:"relative",
  borderRadius:{md:"100px"},
  alignItems:"center",
  alignSelf:"center",
  justifyContent:"center",
  margin:"auto",
  right: "calc(20px)",

});

const Bgbox = styled(Box)(({ theme }) => ({
  position:"absolute",
  opacity:"0.2",
  backgroundImage:`url(${Banner})`,
  height:"800px",
  width:"100%",
  top:"0",
  backgroundSize: "cover",
  backgroundRepeat:"no-repeat",
  backgroundPosition:"center center",

}));


const Navbar = ({mode,setMode}) => {
  const [value, setValue] = useState(0);
  const onChange = (e, Val) => {
    setValue(Val);
  };

  return (
    <>
     {/* <Bgbox>
    </Bgbox> */}
    <Box>
    <StyleAppbar position="fixed">
       <StyledToolbar>
        {/* <StyleNavbar> */}
        <Tabs value={value} onChange={onChange} centered textColor='#fff'>
        <Tab label="Home" />
        <Tab label="Packages" />
        <Tab label="Services" />
        <Tab label="Destinations" />
        <Tab label="About Us" />
        <Tab label="Contact Us" />
        <Tab >
        </Tab>
      </Tabs>
       <Pets sx={{display:{xs:"block", sm:"none"}}}/>
       <Stack direction={"row"} spacing={1}>
        <Switch onChange={e=>setMode(mode==="light" ? "dark" : "light")}/>
        <ModeNight sx={{alignSelf:"center"}}/>
        </Stack>
       {/* </StyleNavbar> */}
       </StyledToolbar>
        </StyleAppbar>
        <TabPanel value={value} index={0} ><Main/></TabPanel>
        <TabPanel value={value} index={1} ><Home/></TabPanel>
        <TabPanel value={value} index={2}><Services/></TabPanel>
        <TabPanel value={value} index={3}><Topdestination/></TabPanel>
        <TabPanel value={value} index={4}><About/></TabPanel>
        <TabPanel value={value} index={5}><Contactus/></TabPanel>
        </Box>
       </>
  )
}

export default Navbar


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