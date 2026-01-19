import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Box, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import SpeedIcon from '@mui/icons-material/Speed';
import GroupIcon from '@mui/icons-material/Group';

const coreValues = [
  {
    icon: <BusinessIcon fontSize="large" color="primary" />,
    title: 'Strategy',
    description: 'We invest in long-term growth and sustainable value creation.',
  },
  {
    icon: <SpeedIcon fontSize="large" color="primary" />,
    title: 'Agility',
    description: 'We adapt quickly to market changes and seize new opportunities.',
  },
  {
    icon: <GroupIcon fontSize="large" color="primary" />,
    title: 'Partnership',
    description: 'We build strong relationships with our companies and partners.',
  },
];

const featuredSubsidiaries = [
  {
    name: 'Innovate Inc.',
    description: 'Pioneering new technologies in the AI space.',
    logo: 'https://picsum.photos/200/200?random=3&grayscale',
  },
  {
    name: 'Green Ventures',
    description: 'Investing in sustainable and renewable energy sources.',
    logo: 'https://picsum.photos/200/200?random=4&grayscale',
  },
  {
    name: 'Apex Logistics',
    description: 'Modernizing the supply chain with smart solutions.',
    logo: 'https://picsum.photos/200/200?random=5&grayscale',
  },
];

const Home = () => {
  return (
    <React.Fragment>
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

      {/* Core Values Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Our Core Values
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {coreValues.map((value) => (
            <Grid item key={value.title} xs={12} sm={6} md={4}>
              <Card sx={{ textAlign: 'center', p: 2 }}>
                <CardContent>
                  {value.icon}
                  <Typography variant="h5" component="h3" sx={{ mt: 2, mb: 1 }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body1">{value.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* About Us Snippet */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h2" gutterBottom>
                About Moghe
              </Typography>
              <Typography variant="body1" paragraph>
                Founded in 2024, Moghe has grown into a dynamic and diversified holding company. Our philosophy is rooted in identifying and nurturing businesses with high growth potential, fostering innovation, and creating lasting value for our stakeholders.
              </Typography>
              <Button variant="outlined" color="primary" component={Link} to="/about">
                Learn More About Us
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
                alt="About us"
                src="https://picsum.photos/800/600?random=2"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Subsidiaries Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Featured Subsidiaries
        </Typography>
        <Grid container spacing={4}>
          {featuredSubsidiaries.map((sub) => (
            <Grid item key={sub.name} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={sub.logo}
                  alt={`${sub.name} logo`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {sub.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {sub.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: 6, mt: 4 }}>
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" component="h2" gutterBottom>
            Ready to Grow With Us?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            We are always looking for new investment opportunities and partnerships. If you have a business with high growth potential, we would love to hear from you.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            to="/contact"
          >
            Get in Touch
          </Button>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Home;