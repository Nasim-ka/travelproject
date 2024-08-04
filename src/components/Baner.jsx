// import styled from '@emotion/styled'
import { styled } from '@mui/material/styles';
import { Box, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const ContentBox = styled(Box)(({theme})=>({
      alignItems:"center",
      marginTop:"70px",
      // padding:"40px",
      padding: { xs: 'none', md: '40px' },
      
    }))
    const Titlebaner = styled(Typography)(({theme})=>({
      fontSize: '2.8rem',
  '@media (min-width:600px)': {
    fontSize: '3.3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3.5rem',
  },
      
    }))

const Baner = () => {
  return (
    <Grid2 xs={12}  flex={4} p={2}>
        <ContentBox>
        <Typography variant='body1' sx={{fontWeight:"bold"}} color="rgb(250, 165, 38)">BEST DESTINATION AROUND THE WORD</Typography>
        <Titlebaner variant='h4' sx={{width:{ sm: '60%',lg:"50%" }, marginTop:"30px",marginBottom:"30px",fontWeight:"bold"}}>Travel, enjoy and live a new and full life</Titlebaner>
        <Typography variant='subtitle2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, recusandae?</Typography>
        </ContentBox>
        {/* ,fontSize:{sm:"70px", md:"60px" } */}
    </Grid2>
  )
}

export default Baner