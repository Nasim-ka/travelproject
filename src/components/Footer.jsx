import { Box, Button, Container, Divider, Grid, IconButton, InputBase, Paper, Stack, Typography, styled } from '@mui/material'
import Banner from "../../public/images/baner.jpg"
import { Directions, Menu, Search } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
    
    backgroundColor: 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    boxShadow:"none",
    color:"#fff",
    // paddingTop:theme.spacing(6),
    // paddingLeft:theme.spacing(6),
    paddingTop: { xs: '0px', lg: '30px' },
    paddingLeft: { xs: '0px', lg: '30px' },
  }));

  const Bgbox = styled(Box)(({ theme }) => ({
    position:"absolute",
    height:"700px",
    width:"100%",
    marginTop:"150px",
    backgroundSize: "cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center center",
    // backgroundColor:"#cecac5",
    zIndex:"-2"

  }));

  const Boxbanner = styled(Container)(({ theme }) => ({
    borderRadius:"50px",
    alignItems:"center",
    justifyContent:"center",
    position:"relative",
    // color: "white",
    backgroundImage:`url(${Banner})`,
    // height:"600px",
    minHeight:"600px",
    // maxHeight:"1300px",
    zIndex:"1",
    backgroundSize: "cover",
      backgroundRepeat:"no-repeat",
      backgroundPosition:"center center",
  }));

  const Subscribebox = styled(Container)(({ theme }) => ({
    position:"absolute",
    opacity:"0.25",
    background: "rgba(10, 10, 0, 3)",
    minHeight:"250px",
    maxHeight:"500px",
    width:"90%",
    borderRadius:"50px",
    top:'55%',
    // top: {xs:'500px', md: '450px'},
    alignItems:"center",
    margin:"auto",
    zIndex:"0",
    display:"flex",

  }));

  const ReadmoreButton = styled(Button)(({ theme }) => ({
    backgroundColor:"#fa8517",
    color:"white",
    borderRadius:"40px",
    padding:"15px 35px",
    fontSize:"10px",
    justifyContent:"center",
    alignItems:"start"
    // fontStyle: "normal",
    //  fontDisplay: "swap",
    
   
  }));

  const Titlebaner = styled(Typography)(({theme})=>({
    fontSize: '1rem',
'@media (min-width:600px)': {
  fontSize: '1rem',
},
[theme.breakpoints.up('sm')]: {
  fontSize: '1.1rem',
},
    
  }))

const Footer = () => {
  return (
    <>
    {/* <Bgbox>
    </Bgbox> */}
    <Boxbanner sx={{ borderRadius:{xs:"10px",md:"50px"}}}>
  <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{marginTop:"50px",display:"flex"}}>
  <Grid container xs={12} md={8} textAlign={"center"}>
    <Item sx={{paddingTop: { xs: '40px', lg: '80px' },
    paddingLeft: { xs: '40px', lg: '80px' }}}>
        <Titlebaner >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, harum similique odit voluptatum cupiditate numquam iusto tenetur illum reiciendis voluptate rem. cupiditate Modi pariatur obcaecati est, et nam ullam eaque cupiditate consequatur non quia repudiandae blanditiis amet explicabo voluptatibus qui fugiat, harum itaque vitae in voluptatem nihil. Alias architecto ullam ea nulla!  </Titlebaner>
        {/* sx={{display: {xs:'none', sm: 'block'}}} */}
        {/* <Typography 
        sx={{display: { xs: 'block', sm: 'none' }}}
        >numquam iusto tenetur illum reiciendis voluptate rem. cupiditate Modi pariatur obcaecati est, et nam ullam  nihil. Alias architecto ullam ea nulla!  </Typography> */}
        </Item>
       
  </Grid>
  
  <Grid xs={12} md={5} lg={5}  spacing={1} mt={"20px"} mb={"40px"} justifyContent={"center"} display={"flex"} alignItems={"center"} >

<Stack direction={"row"} spacing={2}>
        <ReadmoreButton >Book Now!</ReadmoreButton>
        <ReadmoreButton >Read More!</ReadmoreButton>
        </Stack>
  </Grid>
  <Grid xs={12} justifyContent={"center"} alignItems={"center"} display={"flex"}>
  <Subscribebox sx={{display: {xs:'none', md: 'block'}}} container margin={"auto"}></Subscribebox>
  </Grid>
 
  <Grid container xs={12} borderRadius={"30px"}  zIndex={"+1"} sx={{ marginTop: { xs: '0px'}}} >
  
  <Grid xs={12} md={6}>
    <Item sx={{paddingTop: { xs: '20px',sm:"50px", lg: '60px' },
    paddingLeft: { xs: '20px',sm:"40px", lg: '50px' }}}>
    <Titlebaner variant='h4'sx={{fontweight:"bold",paddingLeft:{ xs: 'none', md: '40px' }}}>Subscribe Now Our Newsletter</Titlebaner>
    <Titlebaner sx={{ paddingLeft: { xs: '0px', md: '50px' }}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. nulla explicabo minima enim repellendus repellat id corrupti eveniet dicta nobis delectus et perferendis eligendi blanditiis quia culpa veniam voluptates?</Titlebaner>
    </Item>
  </Grid>
  <Grid lg={6} sx={{ marginY: { xs: '30px', sm: 'auto' }}} alignItems={"center"} justifyContent={"center"} margin={"auto"}>
   
    <Paper
      component="form"
      sx={{ display: 'flex', alignItems: 'center', maxWidth: "400px", borderRadius:"20px",justifyContent:"center",margin:"auto" }}
    >

      <InputBase
        sx={{ ml: 1,boxShadow:"none",p: '2px 4px',width: "calc(100% - 100px)" }}
        placeholder="Enter Your Email"
      />
      <Button variant='contained' sx={{borderRadius:"20px",transition: "0.3s"}}>subscribe</Button>
      
    </Paper>
  </Grid>
</Grid>
</Grid>
    </Boxbanner>
    </>
  )
}

export default Footer