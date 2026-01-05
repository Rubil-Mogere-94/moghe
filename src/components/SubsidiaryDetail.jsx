import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, Container, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const SubsidiaryDetail = () => {
  const { id } = useParams();

  const subsidiaryData = {
    techsub: {
      name: 'TechSub Inc.',
      description: 'TechSub Inc. is our leading technology arm, specializing in cutting-edge gaming development, innovative software solutions, and digital entertainment platforms. We push the boundaries of virtual experiences and create intuitive, powerful applications for a global audience.',
      details: 'TechSub Inc. focuses on developing immersive gaming experiences, enterprise-level software solutions, and leveraging AI/ML for data-driven insights. Our portfolio includes several award-winning games and high-performance business applications.'
    },
    realestate: {
      name: 'RealEstate Sub LLC',
      description: 'RealEstate Sub LLC manages our diverse portfolio of real estate assets, including commercial buildings, expansive land holdings, and sustainable forestry projects. We focus on long-term value creation and responsible asset management.',
      details: 'With a focus on sustainable development and strategic acquisitions, RealEstate Sub LLC is a leader in property management and investment. Our projects range from urban renewal to eco-friendly residential complexes.'
    },
    hotelop: {
      name: 'Hotel Op LLC',
      description: 'Hotel Op LLC is dedicated to excellence in hospitality, operating a collection of premium hotels. We provide exceptional guest experiences, luxurious accommodations, and world-class services across all our properties.',
      details: 'Operating under various renowned brands, Hotel Op LLC ensures unparalleled guest satisfaction through meticulous service, prime locations, and state-of-the-art facilities. We cater to both leisure and business travelers.'
    },
    cinemaop: {
      name: 'Cinema Op LLC',
      description: 'Cinema Op LLC brings the magic of the big screen to life. We operate modern cinemas, offering a diverse range of cinematic experiences, from blockbuster hits to independent films, coupled with state-of-the-art facilities.',
      details: 'Beyond just screenings, Cinema Op LLC creates a complete entertainment destination. Our cinemas feature advanced projection and sound systems, comfortable seating, and a variety of food and beverage options for an immersive experience.'
    },
    autosub: {
      name: 'AutoSub LLC',
      description: 'AutoSub LLC oversees our automotive ventures, including a network of full-service garages and petrol stations. We provide reliable vehicle maintenance, repair services, and fuel distribution with a commitment to customer convenience and safety.',
      details: 'AutoSub LLC is committed to keeping you on the road safely and efficiently. Our certified technicians provide comprehensive vehicle care, from routine maintenance to complex repairs, and our petrol stations offer quality fuels and convenience items.'
    },
    agrisub: {
      name: 'AgriSub LLC',
      description: 'AgriSub LLC manages our agricultural interests, primarily focusing on ranching operations. We are dedicated to sustainable practices, ethical livestock management, and contributing to the food supply chain with high-quality products.',
      details: 'AgriSub LLC champions ethical and sustainable agricultural practices. Our ranching operations prioritize animal welfare and environmental stewardship, delivering premium livestock and agricultural products to market.'
    },
    constructionsub: {
      name: 'ConstructionSub LLC',
      description: 'ConstructionSub LLC is our heavy construction division, delivering robust infrastructure and building projects. We specialize in large-scale residential, commercial, and public works constructions, built on a foundation of quality, safety, and efficiency.',
      details: 'From towering skyscrapers to essential infrastructure, ConstructionSub LLC is synonymous with quality and durability. Our team of expert engineers and builders delivers projects on time and within budget, exceeding industry standards.'
    },
  };

  const currentSubsidiary = subsidiaryData[id] || { name: 'Unknown Subsidiary', description: 'Details not available.', details: 'Please check the URL or navigate back to the subsidiaries list.' };

  return (
    <Container maxWidth="md">
      <Paper elevation={4} sx={{ my: { xs: 2, md: 4 }, p: { xs: 3, md: 5 } }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          {currentSubsidiary.name}
        </Typography>
        <Typography variant="h6" component="p" color="text.secondary" align="center" sx={{ mb: { xs: 2, md: 4 } }}>
          {currentSubsidiary.description}
        </Typography>
        <Typography variant="body1" paragraph align="justify">
          {currentSubsidiary.details}
        </Typography>
        <Box sx={{ mt: { xs: 3, md: 5 }, textAlign: 'center' }}>
          <Button variant="outlined" component={Link} to="/subsidiaries">
            Back to Subsidiaries
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default SubsidiaryDetail;