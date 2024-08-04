import { NearMe } from '@mui/icons-material'
import Grid from '@mui/material/Unstable_Grid2';
import {Badge, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Paper, Typography, styled} from '@mui/material'
import Banner from "../../public/images/banner.jpg"
import Sellingtitle from './Sellingtitle';
import Footer from './Footer';
import Rome from "../../public/images/rome.jpg"
import London from "../../public/images/london.jpg"
import Vienna from "../../public/images/vienna.jpg"
import Brussels from "../../public/images/brussels.jpg"
import Berline from "../../public/images/berline.jpg"
import Japan from "../../public/images/japan.jpg"
const datas = [
    { id:1,
      imgURL:Rome,
      title: 'Rome,Italy',
      content: ' 10 Days Trip',
    },
    { id:2,
        imgURL:London,
      title: 'See London,UK Trip',
      content: ' 12 Days Trip',
      style: {
        border:"1px",
        borderStyle: "solid",
        borderColor: "#b59460",
        borderRadius:"10px",
        backgroundColor:"#194C2D",
        backgroundImage:`url(${Banner})`,
      },
      style1: {
        border:"1px",
        borderStyle: "solid",
        borderColor: "#b59460",
        borderRadius:"10px",
        backgroundColor:"#194C2D",
        backgroundImage:`url(${Banner})`,
      },
      titlebutton: 'popular',
      main: {
        border:"1px",
        borderStyle: "solid",
        borderColor: "#b59460",
        position: 'absolute',
    backgroundColor:"#6d4c41",
    color:"white",
    borderRadius:"30px",
    right:"15px",
    top:"15px",
    padding:"10px 30px",
    fontSize:"12px",
      },
    },
    {
        id:3,
        imgURL:Vienna,
      title: 'Vienna,Austria',
      content: ' 13 Days Trip',
    },
    {
        id:4,
        imgURL:Brussels,
      title: 'Brussels,Belgium',
      content: ' 14 Days Trip',
    },
    {
        id:5,
        imgURL:Berline,
      title: 'Berlin,Germany',
      content: ' 11 Days Trip',
    },
    {
        id:6,
        imgURL:Japan,
      title: 'Tokyo,japan',
      content: ' 28 Days Trip',
      backgroundImage:`url(${Banner})`,
    },
  ];

  const Item = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    spacing: theme.spacing(2),
    color: theme.palette.text.secondary,
    width:"280px",
    height:"300px",
    borderRadius:"20px 20px 0 0",
    display:"flex",
    margin:"auto",
  }));
  const Content = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    textAlign: 'center',
    width:"280px",
    height:"100px",
    margin:"auto",
    display:"flex",
    borderRadius:"0 0 20px 20px"

  }));

const Topdestination = () => {
    return (
        <>
        <Sellingtitle/>
        <Container>
        <Grid container spacing={2} justifyContent="center" alignItems="center" display={"flex"}>
         {datas.map((data) => (
             <Grid xs={12} sm={6} md={4} key={data.id} justifyContent="center" alignItems="center" mb={"40px"}>
             
            <Item>
            <CardMedia 
            component="img"
               sx={{ maxWidth: 280, height:300,borderRadius:" 20px 20px 0 0" }}
               zIndex={"0"}
               image={data.imgURL}
               alt={data.title}
               margin="auto"
               position={"absolute"}
               
            />
             {/* <Badge style={data.main}>{data.titlebutton} </Badge>  */}
          </Item>
          <Content>
            <CardContent>
              <Typography component="div">
              {data.title}
              </Typography>
              <Typography>
              <NearMe fontSize="small" />{data.content}
              </Typography>
              </CardContent>
            </Content>
          </Grid>
         ))}
         </Grid>  
       </Container>
       {/* <Footer/> */}
        </>
      )
}

export default Topdestination