import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Box, Container } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={(theme) => ({
        py: { xs: 10, md: 15 }, // Increased padding for more vertical space
        textAlign: 'center',
        color: 'common.white',
        // High-res placeholder for a dynamic, immersive feel
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://picsum.photos/1920/1080?random=1) no-repeat center center`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed', // Parallax-like effect
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: { xs: '70vh', md: '80vh' }, // Taller hero section
        borderRadius: theme.shape.borderRadius * 3, // More rounded corners
        mt: theme.spacing(4),
        mb: theme.spacing(6), // More margin for separation
        boxShadow: theme.shadows[10], // Deeper shadow for elevation
      })}
    >
      <Container maxWidth="md">
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 900, // Even bolder
            fontSize: { xs: '3rem', sm: '4.5rem', md: '5.5rem' }, // Even larger
            textShadow: '2px 2px 4px rgba(0,0,0,0.7)', // Text shadow for depth
          }}
        >
          Innovate. Create. Dominate.
        </Typography>
        <Typography
          variant="h5"
          component="p"
          paragraph
          sx={{
            mb: { xs: 4, md: 6 }, // More margin below description
            maxWidth: 800,
            mx: 'auto',
            fontSize: { xs: '1.1rem', sm: '1.4rem' },
            fontWeight: 400,
            textShadow: '1px 1px 2px rgba(0,0,0,0.6)',
          }}
        >
          Moghe is a diverse holding company, strategically investing in and managing innovative ventures across various industries. We empower growth and leadership.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/subsidiaries"
          sx={(theme) => ({
            mt: { xs: 3, md: 4 },
            px: { xs: 5, md: 8 }, // Wider button
            py: { xs: 2, md: 2.5 }, // Taller button
            fontSize: { xs: '1.1rem', md: '1.3rem' },
            fontWeight: 700,
            boxShadow: theme.shadows[5], // Button shadow
            '&:hover': {
              boxShadow: theme.shadows[8], // Deeper shadow on hover
            },
          })}
        >
          Explore Our Portfolio
        </Button>
      </Container>
    </Box>
  );
};

export default Home;