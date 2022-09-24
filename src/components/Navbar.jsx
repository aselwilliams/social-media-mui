import { Hive, Mail, Notifications } from "@mui/icons-material";
import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React,{useState} from "react";

const StyledToolbar=styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between'
})

const Search=styled('div') (({theme})=>({
    backgroundColor:'white',
    padding:'0 10px',
    borderRadius : theme.shape.borderRadius,
    width:'40%'
}))

const Icons=styled(Box) (({ theme })=>({
  display:'none', alignItems:'center', gap:'20px', [theme.breakpoints.up("sm")]:{
      display: 'flex'
  }
}))
const UserBox=styled(Box) (({ theme })=>({
    display:'flex', alignItems:'center', gap:'10px',
    [theme.breakpoints.up("sm")]:{
        display:'none'
    }
  }))
function Navbar() {
const [open, setOpen]=useState(false)

  return (
    <AppBar position='sticky' sx={{bgcolor:'#51897B'}}>
      <StyledToolbar>
          <Typography variant='h6' sx={{display: {xs:'none', sm:'block'}}}>
              Bee Hive
          </Typography>
          <Hive sx={{display: {xs:'block', sm:'none'}}}/>
          <Search><InputBase placeholder='search...'/></Search>
          <Icons>
            <Badge badgeContent={4} color="error">
            <Mail />
            </Badge>
            <Badge badgeContent={6} color="error">
            <Notifications />
            </Badge>
            <Avatar onClick={(e)=>setOpen(true)} src='https://images.pexels.com/photos/3775156/pexels-photo-3775156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' sx={{width:'30px', height:'30px'}}/>
          </Icons>
          <UserBox onClick={e=>setOpen(true)}>
          <Avatar src='https://images.pexels.com/photos/3775156/pexels-photo-3775156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' sx={{width:'30px', height:'30px'}}/>
          <Typography variant='span'>Asel</Typography>
          </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
