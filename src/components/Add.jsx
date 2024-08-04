import styled from '@emotion/styled'
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Avatar, Box, Button, ButtonGroup, Fab, IconButton, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'

const StyledModal= styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
});
const UserBox= styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"
});

const Add = () => {
    const [open,setOpen] = useState(false)
  return (
    <>
    <Tooltip onClick={e=>setOpen(true)}
     title="Add" sx={{position:"fixed",
    bottom:20,
     left: {xs: "calc(50% - 25px)", md:30}}}>
    <Fab color='primary' aria-label='add'>
      <AddIcon />
    </Fab>
  </Tooltip>
  <StyledModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={e=>setOpen(false)}
      >
        
          <Box width={400} height={280}  bgcolor={"background.default"} color={"text.primary"} borderRadius={5} p={3}>
           <Typography variant='h6' color={'gray'} textAlign={"center"}>Create Post</Typography>
           <UserBox>
            <Avatar src='../../public/images/testimonials-1.jpg' sx={{width:30 , height:30}} />
            <Typography variant='span'>John Doe</Typography>
          </UserBox>
          <TextField
          id="standard-multiline-static"
          multiline
          rows={3}
          variant='standard'
          placeholder="what's on your mind?"
          sx={{width:"100%"}}
        />
        <Stack direction={"row"} gap={1} mt={2} mb={3}>
            <EmojiEmotions />
            <VideoCameraBack />
            <PersonAdd />
            <Image />
        </Stack>
        <ButtonGroup variant="contained" aria-label="Basic button group" fullWidth>
        <Button>Post</Button>
        <Button sx={{width:"10px"}}><DateRange/></Button>
        </ButtonGroup>
          </Box>
          </StyledModal>

  </>
  )
}

export default Add