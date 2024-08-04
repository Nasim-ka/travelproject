import { SevereCold } from '@mui/icons-material'
import { Box, Card, CardContent, CardMedia, Container, Grid, Stack, Typography, styled } from '@mui/material'
import Weather from "../../public/images/weather.png"
import Flight from "../../public/images/flight.png"
import Event from "../../public/images/event.png"
import Customazie from "../../public/images/customazie.png"
const datas = [
    { id:1,
      icon:Weather,
      title: 'Calculated Wather',
      content: 'Built Wicket longer odmire to barton vanity itself do.',
    },
    { id:2,
        icon:Flight,
      title: 'Best Flights',
      content: 'Satisfaction rate from our Customers',
      style: {
        border:"1px",
        borderStyle: "bbcc33",
        borderColor: "#hhggrr",
        borderRadius:"30px",
        backgroundColor:"#6d4c41",
      },
    },
    {
        id:3,
        icon:Event,
      title: 'Local Event',
      content: 'Average Customer ratings out of 5.00!',
    },
    {
        id:4,
        icon:Customazie,
      title: 'Customaziation',
      content: 'Average Customer ratings out of 5.00!',
    },
  ];

  const Item = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    // padding: theme.spacing(2),
    textAlign: 'center',
     display:"flex",
     justifyContent:"center",
     alignItems:"center",
     boxShadow:"none",
     bgcolor:"#121212",
     maxWidth: "50",
     maxHeight:"50",
  }));
const Cardservice = () => {
  return (
    <>
       <Container sx={{ flexGrow: 1 ,marginTop:"20px"}} justifyContent="center" alignItems="center" display={"flex"} alignSelf={"center"} >
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 1, sm: 12, md: 12 }} justifyContent="center" alignItems="center" display={"flex"} >
      {datas.map((data) => (
          <Grid xs={12} sm={6} md={3} lg={3} key={data.id} justifyContent="center" alignItems="center" display={"flex"}
           sx={{maxWidth: "250",height:"250", padding:"35px",boxShadow:"none"  }}>
            {/* <Item> */}
            <Card sx={{ maxWidth: "50",height:"50",padding:"35px",boxShadow:"none",borderRadius:"30px"}}
          key={data.id} style={data.style}
        >
        <CardMedia
        component="img"
        height="100%"
        image={data.icon}
        alt="Paella dish"
        sx={{width:60, height:60, margin: 'auto'}} 
      />
        <CardContent sx={{ margin: 'auto',textAlign:"center"}}>
        <Typography variant="h6" fontWeight={"bold"}>
        {data.title}
        </Typography>
        <Typography variant="body1" fontWeight={"bold"} sx={{ margin: 'auto',color:"text.secondary", marginTop:"15px"}}>
          {data.content}
        </Typography>
       
      </CardContent>
          
            </Card>
            {/* </Item> */}
          </Grid>
        ))}
      </Grid>
    </Container>

   
    </>
  )
}

export default Cardservice