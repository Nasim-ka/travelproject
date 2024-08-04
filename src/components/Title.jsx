
import { Box, Typography } from '@mui/material'
const datas = [
    { id:1,
      title: 'Category',
      content: 'We Offer Best Services',
    },
]
const Title = () => {
  return (
    <Box direction={"row"} spacing={2} justifyContent={"center"} mt={"20px"}>
      {datas.map((data) => (
      <Box
          key={data.id} >
          <Typography variant='h5' textAlign={"center"} fontWeight={"bold"}>
          {data.title}
          </Typography>
          <Typography variant='h3' fontWeight={"bold"} textAlign={"center"} mt={"15px"}>
          {data.content}
          </Typography>
     </Box>
      ))}
 </Box> 
    
  )
}

export default Title
  
