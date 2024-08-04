import { Box, createTheme, styled } from '@mui/material'
import React, { useState } from 'react'
import Feed from './Feed'
import Banner from "../../public/images/baner.jpg"
import Navbar from './header/Navbar';
import Customers from './Customers';

const Bgbox = styled(Box)(({ theme }) => ({
    position:"absolute",
    opacity:"0.2",
    backgroundImage:`url(${Banner})`,
    height:"710px",
    width:"100%",
    top:"0",
    backgroundSize: "cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center center",
    

  }));
const Main = () => {
  return (
    <>
    <Bgbox>
    </Bgbox>
    <Feed/> 
    {/* <Customers/> */}
        
    </>
  )
}

export default Main