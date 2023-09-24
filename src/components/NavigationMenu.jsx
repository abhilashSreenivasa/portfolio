import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Hidden from '@mui/material/Hidden';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#F6F6EB',
    color: 'black',
    boxShadow: 'none !important',
    border: 'none !important',
    transition: 'width 0.3s ease',
    position:'relative'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuItems: {
    display: 'flex',
    justifyContent: 'space-between', 
    alignItems: 'center',
    width: '100%',
  },
  menuItem: {
    textDecoration: 'none',
    color: '#4F4F4F',
    margin: '0 10px',
    fontSize: '15px',
  },
  resumeLink: {
    textDecoration: 'none',
    color: '#4F4F4F',
    margin: '0 10px',
    fontSize: '15px',
    textAlign: 'right', // Align the "Resume" link to the right
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
      <Hidden mdUp>
        <AppBar className={classes.appBar}>
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
      <Hidden smDown>
        <AppBar position='relative' className={classes.appBar}>
          <Toolbar>
            <div className={classes.menuItems}>
              <div>
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
              </div>
              <div>
                <a href="/resume.pdf" target='_blank' className={classes.resumeLink}>
                  Resume/CV
                </a>
              </div>
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
          <a href="/resume.pdf" target='_blank' className={classes.menuItem}>
            Resume/CV
          </a>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default NavigationMenu;
