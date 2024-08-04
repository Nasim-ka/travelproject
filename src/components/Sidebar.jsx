
import { Box, Switch } from '@mui/material'

const Sidebar = ({mode,setMode}) => {
  return (
    <Box flex={1} p={2}
    sx={{ display:{
        xs:"none", sm:"block"} }}
    >
      <Box position={'fixed'}>
        <Switch onChange={e=>setMode(mode==="light" ? "dark" : "light")}/>
      </Box>
    </Box>
  )
}

export default Sidebar