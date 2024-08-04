import { KeyboardDoubleArrowRight, NearMe } from '@mui/icons-material'
import {Box, Button, ButtonBase, Card, CardActionArea, CardActions, CardContent, CardMedia, Paper, Typography, styled} from '@mui/material'
import London from "../../public/images/london.jpg"
const Item = styled(CardMedia)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  position: 'absolute',
  width:"250px",
  height:"300px",
  borderRadius:"30px",
  border:"10px solid #fff",
  // right:{md:"20px",lg:"0"},
  // marginTop:{md:"100px",lg:"0px"},
  // marginRight:{md:"100px",lg:"0px"}
}));

const Content = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // textAlign: 'center',
  color: theme.palette.text.secondary,
  width:"220px",
  height:"80px",
  position: 'absolute',
  right:"0",
  bottom:"0",
  // display:"flex",
  borderRadius:"17px 0 17px 0",
  boxShadow:"none",
  fontStyle: 'italic',
  // ...theme.typography.body2,

}));
const ImageButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  backgroundColor:"#6d4c41",
  color:"white",
  borderRadius:"20px",
  right:"15px",
  top:"15px",
  padding:"8px 25px",
  fontSize:"10px",
  // fontStyle: "normal",
  //  fontDisplay: "swap",
  
 
}));


const Rightbar = () => {
  return (
    <Box
      >
          
        <Item
        sx={{  height:400 }}
        image={London}
        alt="london">
        <ImageButton>popular</ImageButton>  
        <Content>
            <CardContent>
              <Typography variant='body2'>
              See London, UK Trip
              </Typography>
              <Typography variant='body2'>
              <NearMe fontSize="small" /> 12 Days Trip < KeyboardDoubleArrowRight fontSize="large" sx={{ marginLeft:"40px", marginTop:"-20px"}}/>
              </Typography>
              </CardContent>
            </Content>

        </Item>
 
    </Box>
  )
}

export default Rightbar