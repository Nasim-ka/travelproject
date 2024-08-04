import { Box, Typography } from '@mui/material'
const datas = [
    { id:1,
      title: 'Top Selling',
      content: 'Top Destinations',
    },
]
const Sellingtitle = () => {
  return (
    <Box direction={"row"} spacing={2} justifyContent={"center"} my={"40px"} >
      {datas.map((data) => (
      <Box
          key={data.id} >
          <Typography variant='h6' textAlign={"center"} fontWeight={"bold"}>
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

export default Sellingtitle
  



// const Sellingtitle = () => {
//   return (
//     <div>Sellingtitle</div>
//   )
// }

// export default Sellingtitle