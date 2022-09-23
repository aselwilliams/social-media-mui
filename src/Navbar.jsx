import { Hive } from "@mui/icons-material";
import { AppBar, InputBase, styled, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

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
    backgroundColor:'white',
}))
function Navbar() {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
          <Typography variant='h6' sx={{display: {xs:'none', sm:'block'}}}>
              ASEL WILL
          </Typography>
          <Hive sx={{display: {xs:'block', sm:'none'}}}/>
          <Search><InputBase placeholder='search...'/></Search>
          <Icons>icons</Icons>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
