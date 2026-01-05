import React from 'react';
import { Typography, Box, Container, Grid, Paper } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 700 }}>
          About Moghe
        </Typography>
        <Typography variant="h6" component="p" color="text.secondary" align="center" sx={{ mb: 6 }}>
          Moghe is a dynamic and diversified holding company committed to strategic investment and robust management across a spectrum of industries. We empower our subsidiaries to achieve market leadership and foster sustainable growth.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ height: '100%', p: { xs: 3, md: 4 } }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph>
                To cultivate a portfolio of successful enterprises, providing them with the strategic guidance, resources, and oversight necessary to thrive. We aim to generate long-term value for our stakeholders through prudent investment and operational excellence.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ height: '100%', p: { xs: 3, md: 4 } }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                Our Vision
              </Typography>
              <Typography variant="body1" paragraph>
                To be a preeminent holding company renowned for its adaptive strategies, strong governance, and the synergistic success of its diverse subsidiaries, contributing positively to every sector we engage with.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ height: '100%', p: { xs: 3, md: 4 } }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                Our Approach
              </Typography>
              <Typography variant="body1" paragraph>
                We believe in a decentralized yet integrated approach, allowing our subsidiaries the autonomy to innovate while benefiting from shared expertise and consolidated financial strength. Our team comprises seasoned professionals in finance, operations, and market strategy, dedicated to fostering an environment of growth and innovation.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;