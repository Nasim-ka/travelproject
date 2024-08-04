import React, {useEffect} from 'react'

import video from '../../../public/images/video.mp4'


// import Aos from "aos"
// import 'aos/dist/aos.css'
import { Apps, Facebook, Filter, Instagram, LocationCity, Search, TripOrigin } from '@mui/icons-material'
import { Badge, Box, Button, Container, FormControl, Input, InputBase, InputLabel, List, Paper, Slider, Stack, Typography, alpha, styled } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import Footer from '../Footer'

const Inputtxt = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: "30px",
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
    fontSize: 13,
    width: '300px',
    margin:"2px 0 10px 0",
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));



const SearchButton = styled(Button)(({ theme }) => ({
  backgroundColor:"#fa8517",
  color:"white",
  borderRadius:"30px",
  padding:"10px 30px",
  fontSize:"10px",

  
 
}));
const Contentbox = styled(Container)(({ theme }) => ({
  width: "100%",
  height: "max",
  // height: "700px",
  padding: "8rem 1.5rem 3rem",
  display: "flex",
  rowGap: "3rem",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "center",
  margin: "auto",
  color: "#FFF",
  zIndex: "100",
  marginBottom:"200px"

}));
const Titlebaner = styled(Typography)(({theme})=>({
  fontSize: '2.8rem',
'@media (min-width:600px)': {
fontSize: '3.3rem',
},
[theme.breakpoints.up('md')]: {
fontSize: '3.5rem',
},
  
}))

const Bgbox = styled(Box)(({ theme }) => ({
  // position: "absolute",
  // height: "100%",
  maxHeight:"1200px",
  width: "100%",
  // background:" rgb(47, 106, 127)",
  // top: "0",
  // bottom: "0",
  // zIndex: "1",
  // mix-blend-mode: hard-light,

}));

export const Home = () => {

  // use react hooks to add a scroll animation
  // useEffect(()=>{
  //   Aos.init({duration: 2000})
  // }, [])

  return (
    <>
    <Bgbox className='home'>
      <Box className="overlay"></Box>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <Contentbox className="homeContent container">
        <Grid2 my={"40px"}>

          <Typography variant='h4'>
            Our Packages
          </Typography>

          <Titlebaner variant='h1'>Search Your Holiday </Titlebaner>

        </Grid2>
        <Paper
         component="form"
         sx={{ display: 'flex', alignItems: 'center', width: "100%", borderRadius:"20px",justifyContent:"center",margin:"auto" }}>
        <Grid2  container spacing={{ xs: 2, md: 2 }} columns={{ xs: 12 }} justifyContent="center" alignItems="center" display={"flex"}>
          
          <Grid2 xs={12} md={3} lg={3} justifyContent="center" alignItems="center" display={"flex"}
           sx={{maxWidth: "250",height:"250", padding:"35px",boxShadow:"none"  }}>
          <FormControl variant="standard">
         <Typography gutterBottom> Search your destination:</Typography>
        <Inputtxt defaultValue="Enter name here...." />
      </FormControl>

          </Grid2>

          <Grid2 xs={12} md={3} lg={3} justifyContent="center" alignItems="center" display={"flex"}
           sx={{maxWidth: "250",height:"250", padding:"35px",boxShadow:"none"  }}>
          <FormControl variant="standard">
        <Typography gutterBottom> Select your date:</Typography>

        <Inputtxt type='date' defaultValue="Enter date here...."/>

      </FormControl>

          </Grid2>
           <Grid2 xs={12} md={3} lg={3} justifyContent="center" alignItems="center" display={"flex"}
           sx={{maxWidth: "250",height:"250", padding:"35px",boxShadow:"none"  }}>
          <FormControl variant="standard">
        <Stack direction={"row"} spacing={15} gutterBottom mb={"8px"}>
        <Typography > Price:</Typography>
        <Typography sx={{alignitem:"end"}}>5000$</Typography>
        </Stack>
      <Slider sx={{maxWidth: "250",height:"250",boxShadow:"none"  }} defaultValue={3000} aria-label="slider" valueLabelDisplay="on"  max={5000} />
      </FormControl>

          </Grid2>

          <Grid2 xs={12} md={3} lg={3} justifyContent="center" alignItems="center" display={"flex"}
           sx={{maxWidth: "250",height:"250", padding:"35px",boxShadow:"none"  }}>
            
            <SearchButton><Search />SEARCH</SearchButton>
          </Grid2>


          
        </Grid2>
        </Paper>
      </Contentbox>

    </Bgbox>
    {/* <Box sx={{ marginTop: { xs: '900px', md: '700px' }}}>
    <Footer/>
     </Box> */}
   
    </>
  )
}

export default Home;