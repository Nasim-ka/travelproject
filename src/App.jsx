import {theme} from "../src/components/theme"
import { ThemeProvider} from '@mui/material/styles';
import { Box, Stack, createTheme } from "@mui/material";

import { useState } from "react";
import Customers from "./components/Customers";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Customerscard from "./components/Customerscard";
import DrawerAppBar from "./components/DrawerAppBar";

 const App = () => {
  const[mode,setMode]=useState("light")
const darkTheme = createTheme({
  palette:{
    mode:mode
  }
})
  return (
  <>

<ThemeProvider theme={darkTheme}> 
<Box bgcolor={"background.default"} color={"text.primary"}>

<DrawerAppBar setMode={setMode} mode={mode}/>

</Box>
 </ThemeProvider>
    </>
  )
}
export default App
