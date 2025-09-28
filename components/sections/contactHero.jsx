"use client";

import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';

export default function ContactHero() {
  return (
    // The main full-width blue background Box
    <Box
      sx={{
        bgcolor: '#4169E1',
        py: { xs: 8, md: 12 }, // Responsive vertical padding
        textAlign: 'center', // Center-align all child elements
      }}
    >
      <Container maxWidth="lg">
        {/* Headline */}
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 'bold',
            mb: 3, // Margin bottom for spacing
          }}
        >
          Streamline your transportation process and scale with ease — elevate your business performance with Instalanes TMS !
        </Typography>

        {/* Paragraph */}
        <Typography
          variant="body1"
          sx={{
            mb: 5, // Larger margin bottom for spacing
            maxWidth: '750px', // Constrain the width for better readability
            mx: 'auto', // Center the paragraph block itself
            opacity: 0.9, // A slight transparency for the text
          }}
        >
          Instalanes is a Transport management and visibility platform that helps businesses improve their supply chain visibility, collaboration, growth, and efficiency. The platform helps users to manage and track their supply chain, as well as to access performance insights that help teams make better decisions.
        </Typography>

        {/* Contact Button */}
        <Button
          variant="contained"
          size="large"
          startIcon={<PhoneIcon />}
          sx={{
            bgcolor: 'black',
            color: 'white',
            borderRadius: 0,
            textTransform: 'none', // Prevents the default ALL CAPS
            fontWeight: 'bold',
            px: 4, // Horizontal padding
            py: 1.5, // Vertical padding
            '&:hover': {
              bgcolor: 'grey.800', // A slightly lighter black for the hover effect
            },
          }}
        >
          Contact our expert
        </Button>
      </Container>
    </Box>
  );
}