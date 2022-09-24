import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import React from 'react'

function Rightbar() {
  return (
    <Box bgcolor='#C4D7D2' p={2} flex={2} sx={{display: {xs:'none', sm:'block'}}}>
        <Box position='fixed' width={300}>
            <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
                <AvatarGroup max={7}>
                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                    <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/3779448/pexels-photo-3779448.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                    <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/4769490/pexels-photo-4769490.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                    <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/3774071/pexels-photo-3774071.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                    <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/7989135/pexels-photo-7989135.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/13020447/pexels-photo-13020447.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                    <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/3779448/pexels-photo-3779448.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                    <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/4769490/pexels-photo-4769490.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                </AvatarGroup>
                <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Snapshots</Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img src='https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='burger'/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='smoothie'/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='steak'/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='salad'/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='fusion'/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='pasta'/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='pizza'/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://images.pexels.com/photos/53148/shish-kebab-meat-skewer-vegetable-skewer-meat-products-53148.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='grilled veggies'/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://images.pexels.com/photos/461431/pexels-photo-461431.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='tart'/>
                    </ImageListItem>
                </ImageList>
                <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Conversations</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/4769490/pexels-photo-4769490.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/3779448/pexels-photo-3779448.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
        </Box>
    </Box>
  )
}

export default Rightbar