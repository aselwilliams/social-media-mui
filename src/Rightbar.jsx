import { Box, Typography } from '@mui/material'
import React from 'react'

function Rightbar() {
  return (
    <Box bgcolor='#C4D7D2' p={2} flex={2} sx={{display: {xs:'none', sm:'block'}}}>
        <Box position='fixed'>
            <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
        </Box>
    </Box>
  )
}

export default Rightbar