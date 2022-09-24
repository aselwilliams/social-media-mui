import React from 'react';
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'

function Post() {
  return (
        <Card sx={{margin:5}}>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                M
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <MoreVert />
            </IconButton>
            }
            title="Matt Doan"
            subheader="September 14, 2022"
        />
        <CardMedia
            component="img"
            height="20%"
            image="https://horsej.b-cdn.net/files/styles/article_large/public/pictures-videos/articles/istock-1044008744_-_katiekk2-_web.jpg?itok=BdbwGvWZ"
            alt="Paella dish"
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
            Horseback archery is crazy and its competitors dressed like some kind of warriors gives you the feeling of being in a medieval movie set.This impressive female archer aiming at a target during a traditional horseback archery competition.
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}}/>} />
            </IconButton>
            <IconButton aria-label="share">
            <Share />
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Post