import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme as useMuiTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useColorMode } from '../ThemeModeProvider';

const Header = () => {
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const colorMode = useColorMode();
  const location = useLocation(); // To highlight active link

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Subsidiaries', path: '/subsidiaries' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(40, 40, 40, 0.8)' : 'rgba(255, 255, 255, 0.8)', // Use direct rgba for glassmorphism
        backdropFilter: 'blur(10px)', // Glassmorphism effect
        boxShadow: (theme) => theme.shadows[8], // Enhanced shadow
        zIndex: (theme) => theme.zIndex.appBar + 1, // Ensure it's above other content
        py: { xs: 0.5, sm: 1 }, // Responsive padding
        color: (theme) => theme.palette.text.primary, // Ensure good contrast
      }}
    >
      <Toolbar>
        <Typography
          variant="h4" // More prominent branding
          component="div"
          sx={{ flexGrow: 1, fontWeight: 800, letterSpacing: '-0.02em' }}
        >
          <Link
            to="/"
            style={{
              color: 'inherit',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
          >
            Moghe
          </Link>
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="end"
              color="inherit" // Inherit color for consistent icon color
              aria-label="menu"
              onClick={handleMenu}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom', // Dropdown below button
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                sx: {
                  backgroundColor: (theme) => theme.palette.background.paper, // Menu background
                  boxShadow: (theme) => theme.shadows[10], // Menu shadow
                  borderRadius: theme.shape.borderRadius * 2,
                  py: 1,
                },
              }}
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.name}
                  onClick={handleClose}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: (theme) => (location.pathname === item.path ? theme.palette.primary.main : theme.palette.text.primary),
                    fontWeight: (theme) => (location.pathname === item.path ? 700 : 500),
                    '&:hover': {
                      backgroundColor: (theme) => theme.palette.action.hover,
                      color: (theme) => theme.palette.primary.light,
                    },
                  }}
                >
                  {item.name}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={Link}
                to={item.path}
                sx={{
                  mx: 1,
                  color: (theme) => (location.pathname === item.path ? theme.palette.primary.light : theme.palette.text.primary),
                  fontWeight: (theme) => (location.pathname === item.path ? 700 : 500),
                  '&:hover': {
                    color: (theme) => theme.palette.primary.light,
                    textDecoration: 'underline',
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        )}

        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          {muiTheme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;