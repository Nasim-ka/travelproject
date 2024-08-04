import { Box, Card, CardContent, Container, Grid, Paper, Stack, Typography, styled } from '@mui/material'


const datas = [
    { id:1,
      title: '1M+',
      content: ' Customers visit us every months',
    },
    { id:2,
      title: '93%',
      content: 'Satisfaction rate from our Customers',
    },
    {
        id:3,
      title: '4.9',
      content: 'Average Customer ratings out of 5.00!',
    },
  ];
  const Item = styled(CardContent)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
     maxWidth: "300px",
     display:"flex",
     height:"200px",
     justifyContent:"center",
     alignItems:"center",
     boxShadow:"none",
     borderRadius:"30px",
  }));

const Customerscard = () => {
  return (
    <>
    <Container sx={{ flexGrow: 1 ,marginTop:"100px",marginBottom:"50px"}} >
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 1, sm: 1, md: 12 }} >
      {datas.map((data) => (
          <Grid xs={6} sm={6} md={4} key={data.id} justifyContent="center" alignItems="center" display={"flex"} >
            <Item>
            <Stack direction={"row"} spacing={3}>
        <Typography variant="h3" fontWeight={"bold"}>
        {data.title}
        </Typography>
        <Typography variant="body1" fontWeight={"bold"}>
          {data.content}
        </Typography>
        </Stack>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Container>
    </>
  )
}

export default Customerscard