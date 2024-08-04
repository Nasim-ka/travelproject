import { Box, Button, CardMedia, Paper, Typography, styled } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import About from "../../public/images/about.jpg"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F392O1',
    ...theme.typography.h4,
    color: theme.palette.text.mode === 'dark' ? '#FFF' : '#F392O1',
    maxWidth:"1000px",
    lineHeight:"3",
    fontWeight:"bold",
    textAlign:"start",
    borderRadius:"100px 0 100px 0",
    marginTop:"60px",
    zIndex:"+1",
    padding: "40px", 
   }));


const Aboutus = () => {
  return (
    <Box padding={5}>
        <Grid container>
  <Grid xs={12} md={8} variant='h3' fontWeight={"bold"}>
    <Item>Who Are We?
        <Typography lineHeight={"2"} fontWeight={"bold"} variant='h6'sx={{borderRadius:"100px 0 100px 0" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, nisi, reprehenderit dolorem sit nostrum<br/> quam voluptatibus incidunt necessitatibus rerum totam beatae! A nemo labore eaque veniam asperiores nulla nisi sunt optio eos corrupti. Asperiores<br/> enim, optio velit, nesciunt odit praesentium culpa voluptatibus illum repellat aliquam assumenda<br/> necessitatibus numquam perferendis quia accusantium cumque dignissimos alias itaque, repudiandae quisquam qui sit rerum.<br/> Sed dolore veritatis sint, vitae quo pariatur itaque totam quis nemo placeat natus dolorem id accusamus laborum esse.
        </Typography>
        
    </Item>
  </Grid>
  <Grid xs={12} md={4} padding={5} sx={{padding: { xs: '5px', md: '30px' },marginTop:"20px"}} zIndex={"+1"}>
    
        <CardMedia
        component="img"
        image={About}
        sx={{ maxWidth: 440, height:600, borderRadius:"400px" }}
        />
  </Grid>
  </Grid>
  
    </Box>
  )
}

export default Aboutus