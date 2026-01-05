import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box, Container, Grid, Card, CardContent, CardActions, Button, CardMedia } from '@mui/material';

const subsidiaryList = [
  { id: 'techsub', name: 'TechSub Inc.', description: 'Leading innovation in software and technology solutions.', image: 'https://picsum.photos/400/250?random=tech' },
  { id: 'realestate', name: 'RealEstate Sub LLC', description: 'Developing and managing premier residential and commercial properties.', image: 'https://picsum.photos/400/250?random=realestate' },
  { id: 'hotelop', name: 'Hotel Op LLC', description: 'Providing exceptional hospitality experiences across various brands.', image: 'https://picsum.photos/400/250?random=hotel' },
  { id: 'cinemaop', name: 'Cinema Op LLC', description: 'Curating memorable entertainment through state-of-the-art cinemas.', image: 'https://picsum.photos/400/250?random=cinema' },
  { id: 'autosub', name: 'AutoSub LLC', description: 'Delivering cutting-edge automotive services and sustainable transport solutions.', image: 'https://picsum.photos/400/250?random=auto' },
  { id: 'agrisub', name: 'AgriSub LLC', description: 'Pioneering sustainable agriculture and food production technologies.', image: 'https://picsum.photos/400/250?random=agri' },
  { id: 'constructionsub', name: 'ConstructionSub LLC', description: 'Building the future with innovative and reliable construction projects.', image: 'https://picsum.photos/400/250?random=construction' },
];

const Subsidiaries = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Our Subsidiaries
        </Typography>
        <Typography variant="h6" component="p" color="text.secondary" align="center" sx={{ mb: 6 }}>
          Moghe proudly oversees a diverse portfolio of companies, each a leader in its respective industry. Explore our subsidiaries below:
        </Typography>

        <Grid container spacing={4}>
          {subsidiaryList.map((subsidiary) => (
            <Grid item key={subsidiary.id} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}> {/* boxShadow handled by theme hover */}
                <CardMedia
                  component="img"
                  height="180"
                  image={subsidiary.image}
                  alt={subsidiary.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 700 }}>
                    {subsidiary.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {subsidiary.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end', p: 2 }}>
                  <Button
                    variant="contained" // Changed to contained for more prominence
                    size="small"
                    component={Link}
                    to={`/subsidiaries/${subsidiary.id}`}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Subsidiaries;