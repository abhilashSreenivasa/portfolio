import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Hidden from '@mui/material/Hidden'; // Import Hidden component
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor:'#F6F6EB',
    color: 'black', // Set the text color to black
    boxShadow:'none !important',
    border:'none !important',
    transition: 'width 0.3s ease',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuItems: {
    display: 'flex',
    justifyContent: 'left', // Center-align the menu items
    alignItems: 'center', // Vertically center-align the menu items
    width:'100%'
  },
  menuItem: {
    textDecoration: 'none',
    color: '#4F4F4F', // Set the text color to black
    margin: '0 10px', // Add margin between menu items if needed
    fontSize: '21px', // Increase font size
  },
}));

function NavigationMenu() {
  const classes = useStyles();
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  return (
    <div>
      <Hidden mdUp> {/* Hide the following content on screens bigger than md */}
        <AppBar  className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              className={classes.menuButton}
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Hidden>
      <Hidden smDown> {/* Hide the following content on screens smaller than sm */}
        <AppBar position='inherit' className={classes.appBar}>
          <Toolbar>
            <div className={classes.menuItems}>
              <a href="/" className={classes.menuItem}>
                Home
              </a>
              <a href="/experience" className={classes.menuItem}>
                Experience
              </a>
              <a href="/projects" className={classes.menuItem}>
                Projects
              </a>
              <a href="/skills" className={classes.menuItem}>
                Skills
              </a>
              <a href="/hobbies" className={classes.menuItem}>
                Hobbies
              </a>
            </div>
          </Toolbar>
        </AppBar>
      </Hidden>
      <Menu
        anchorEl={mobileMenuAnchorEl}
        keepMounted
        open={Boolean(mobileMenuAnchorEl)}
        onClose={handleMobileMenuClose}
      >
        <MenuItem onClick={handleMobileMenuClose}>
          <a href="/" className={classes.menuItem}>
            Home
          </a>
        </MenuItem>
        <MenuItem onClick={handleMobileMenuClose}>
          <a href="/experience" className={classes.menuItem}>
            Experience
          </a>
        </MenuItem>
        <MenuItem onClick={handleMobileMenuClose}>
          <a href="/projects" className={classes.menuItem}>
            Projects
          </a>
        </MenuItem>
        <MenuItem onClick={handleMobileMenuClose}>
          <a href="/skills" className={classes.menuItem}>
                Skills
          </a>
        </MenuItem>
        <MenuItem onClick={handleMobileMenuClose}>
          <a href="/hobbies" className={classes.menuItem}>
            Hobbies
          </a>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default NavigationMenu;
