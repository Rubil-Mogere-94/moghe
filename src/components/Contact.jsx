import React, { useState } from 'react';
import { Typography, Box, Container, TextField, Button, Grid, Alert, Snackbar } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSnackbarMessage(data.message);
        setSnackbarSeverity('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setSnackbarMessage(data.error || 'Something went wrong.');
        setSnackbarSeverity('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSnackbarMessage('Network error. Please try again later.');
      setSnackbarSeverity('error');
    } finally {
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4, p: { xs: 3, md: 5 }, bgcolor: 'background.paper', borderRadius: (theme) => theme.shape.borderRadius * 3, boxShadow: (theme) => theme.shadows[6] }}>
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 700 }}>
          Contact Us
        </Typography>
        <Typography variant="h6" component="p" color="text.secondary" align="center" sx={{ mb: 5 }}>
          Have a project in mind? We'd love to hear from you. Whether it's a custom software solution or the next big game, our team is ready to help you bring your vision to life.
        </Typography>

        <Box component="form" noValidate autoComplete="off" sx={{ mt: 3 }} onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined" // Use outlined variant for a cleaner look
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="message"
                label="Message"
                name="message"
                multiline
                rows={6} // Slightly more rows for message
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 4, mb: 2 }} // More margin
          >
            Send Message
          </Button>
        </Box>

        <Box sx={{ mt: 5, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            You can also reach us at:
          </Typography>
          <Typography variant="body1" color="text.secondary">
            contact@moghe.com
          </Typography>
        </Box>
      </Box>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
