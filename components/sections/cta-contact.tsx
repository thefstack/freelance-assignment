"use client";

import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Avatar,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputAdornment
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

// Data for the contact persons
const contacts = [
  {
    name: 'Priyanka S',
    role: 'Sales Manager',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Lucky S',
    role: 'Sales Manager',
    avatarUrl: 'https://i.pravatar.cc/150?img=2',
  },
];

// Options for the dropdown menu
const demoOptions = ['Platform demo', 'Pricing inquiry', 'General question'];

export default function ContactFormSection() {
  // State to manage the select field's value
  const [demoType, setDemoType] = React.useState('Platform demo');

  const handleDemoChange = (event) => {
    setDemoType(event.target.value);
  };

  return (
    <Box sx={{ bgcolor: 'grey.100', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography variant="h6" color="primary.main" sx={{ mb: 5 }}>
          We'd love to talk about how we can work together.
        </Typography>

        <Grid container spacing={{ xs: 5, md: 10 }}>
          {/* Left Column: "Talk to us" */}
          <Grid >
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 4 }}>
              Talk to us
            </Typography>
            {contacts.map((contact) => (
              <Box key={contact.name} sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar src={contact.avatarUrl} sx={{ width: 56, height: 56 }} />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 'bold', textTransform: 'uppercase' }}>
                    {contact.role}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                    {contact.name}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>

          {/* Right Column: "Submit your details" Form */}
          <Grid >
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              Submit your details
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <TextField fullWidth label="Full name" variant="outlined" margin="normal" />
              <TextField fullWidth label="Email" type="email" variant="outlined" margin="normal" />
              <TextField
                fullWidth
                label="Mobile number"
                variant="outlined"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Box component="span" sx={{ mr: 1 }} role="img" aria-label="India flag">🇮🇳</Box>
                      +91
                    </InputAdornment>
                  ),
                }}
              />
              <FormControl fullWidth variant="outlined" margin="normal">
                <Select
                  value={demoType}
                  onChange={handleDemoChange}
                  displayEmpty
                >
                  {demoOptions.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
              />

              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<PhoneIcon />}
                  sx={{
                    bgcolor: 'common.black',
                    color: 'common.white',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    px: 3,
                    py: 1.5,
                    '&:hover': {
                      bgcolor: 'grey.800',
                    },
                  }}
                >
                  Get call back
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}