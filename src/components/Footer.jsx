import React from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  Container,
  Box,
  Grid,
  IconButton,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[900],
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Moghe
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Innovate. Create. Dominate.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton aria-label="Facebook" color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="Twitter" color="inherit">
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="LinkedIn" color="inherit">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="body2" sx={{ mb: 1 }}>Home</Typography>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="body2" sx={{ mb: 1 }}>About Us</Typography>
            </Link>
            <Link to="/subsidiaries" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="body2" sx={{ mb: 1 }}>Subsidiaries</Typography>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="body2">Contact</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Holding Lane
              <br />
              Business City, 12345
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Email: contact@moghe.com
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: 4,
            py: 2,
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} Moghe. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;