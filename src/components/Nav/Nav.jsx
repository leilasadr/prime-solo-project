import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/home" sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none'  }}>
          Trauma Informed Growth
        </Typography>
        <Box display="flex">
          {/* If no user is logged in, show these links */}
          {!user.id && (
            // If there's no user, show login/registration links
            <>
              <Button component={Link} to="/login" color="inherit" sx={{ mr: 1 }}>
                Login
              </Button>
              {/* <Button component={Link} to="/register" color="inherit">
                Register
              </Button> */}
            </>
          )}

          {/* If a user is logged in, show these links */}
          {user.id && (
            <>
              <Button component={Link} to="/user" color="inherit"  
              sx={{
              color: 'black',
              '&:hover': {
                backgroundColor: 'antiquewhite',
              },
              }}
              >
              Home
              </Button>

              <Button component={Link} to="/PVT" color="inherit" 
              sx={{
                color: 'black',
                '&:hover': {
                  backgroundColor: 'antiquewhite',
                },
                }}
              >
              What's PVT?
              </Button>

              <Button component={Link} to="/feedback" color="inherit" 
              sx={{
                color: 'black',
                '&:hover': {
                  backgroundColor: 'antiquewhite',
                },
                }}
              >
              Feedback
              </Button>

              <LogOutButton />
            </>
          )}

          <Button component={Link} to="/about" color="inherit"
          sx={{
            color: 'black',
            '&:hover': {
              backgroundColor: 'antiquewhite',
            },
            }}
          >
          About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
