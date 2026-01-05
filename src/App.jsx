import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Subsidiaries from './components/Subsidiaries'; // New import
import SubsidiaryDetail from './components/SubsidiaryDetail'; // New import
import { Box, Container } from '@mui/material'; // Import Box and Container components


function App() {
  return (
    <Router>
      <Header />
      <Box
        sx={(theme) => ({
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          background:
            theme.palette.mode === 'light'
              ? 'linear-gradient(to bottom, #f4f6f8, #e0e2e4)' // Light gradient
              : 'linear-gradient(to bottom, #121212, #2c2c2c)', // Dark gradient
        })}
      >
        <Container maxWidth="lg" sx={{ pt: 4, pb: 4, flexGrow: 1 }}>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/subsidiaries" element={<Subsidiaries />} /> {/* New route */}
          <Route path="/subsidiaries/:id" element={<SubsidiaryDetail />} /> {/* New route for details */}
                  </Routes>
                </Container>
              </Box>      <Footer />
    </Router>
  );
}

export default App;

