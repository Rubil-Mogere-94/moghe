import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" color="primary" sx={{ mt: 'auto' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Typography variant="body1" color="inherit">
            &copy; 2025 Moghe. All Rights Reserved. | Software & Gaming Solutions
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;