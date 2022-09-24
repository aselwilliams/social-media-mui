import {Avatar, Button, ButtonGroup, styled, TextField, Typography} from '@mui/material';
import { Add, DateRange, EmojiEmotions, PersonAdd, Photo, VideoCameraBack} from '@mui/icons-material';
import { Fab, Modal } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import { Box, Stack } from '@mui/system';
import React, { useState } from 'react';

const StyledModal=styled(Modal)({
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
})

const UserBox=styled(Box)({
    display:'flex',
    alignItems:'center',
    gap:'10px',
    marginBottom:'20px'
})

function AddPost() {
const [openModal, setOpenModal] = useState(false)

  return (
    <>
    <Tooltip onClick={(e)=> setOpenModal(true)} title="Add" sx={{position:'fixed',bottom:20, left:{xs:'calc(50%-25)', md:30}}}>
        <Fab color="primary" aria-label="add">
            <Add />
        </Fab>
    </Tooltip>
    <StyledModal
  open={openModal}
  onClose={(e)=>setOpenModal(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} p={3} bgcolor={'background.default'} color={'text.primary'} borderRadius={3}>
    <Typography variant='h6' color='grey' textAlign='center'>
        Create post
    </Typography>
        <UserBox >
          <Avatar src='https://images.pexels.com/photos/3775156/pexels-photo-3775156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' sx={{width:'30px', height:'30px'}}/>
          <Typography fontWeight={500} variant='span'>Asel Williams</Typography>
        </UserBox>
        <TextField sx={{width:'100%'}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
        />
        <Stack direction='row' gap={1} mt={2} mb={3}
        fullWidth>
            <EmojiEmotions color={'success'}/>
            <Photo color={'secondary'}/>
            <VideoCameraBack color={'primary'} />
            <PersonAdd color={'error'}/>
        </Stack>
        <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{width:'100px'}}><DateRange/></Button>
        </ButtonGroup>
  </Box>
</StyledModal>
    </>
  )
}

export default AddPost