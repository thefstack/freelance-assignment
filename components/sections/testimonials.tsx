"use client"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Box from "@mui/material/Box"

const testimonials = [
  {
    title: "Fast implimation",
    quote: "It’s amazing to see how fast Instalanes platform can be set up. Yes, we set it up not in months, weeks but in just 1 day, no kidding, it’s a breakthrough",
    author: "John Doe",
    role: "Logistics Director at Havells",
  },
  {
    title: "Fast implimation",
    quote: "With Instalanes platform, we spend less time managing our transportation and delivers more value to our customers",
    author: "John Doe",
    role: "CEO",
  },
  {
    title: "Fast implimation",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    author: "John Doe",
    role: "CEO",
  },
]

export default function Testimonials() {
  return (
    <Box sx={{bgcolor:"white",}}>
      <Container sx={{ py: { xs: 4, md: 6 } }}>
      <Typography
        variant="h5"
        sx={{ color: "primary.main", mb: 4 }}
      >
        What our Customer says
      </Typography>

      {/* This Box is the flex container, replacing <Grid container> */}
      <Box
        sx={{
          display: 'flex',
          // On extra-small screens (xs), stack them vertically. On medium (md) and up, arrange them in a row.
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4, // This creates space between the cards
        }}
      >
        {testimonials.map((t, index) => (
          // This Box is the flex item (column), replacing <Grid item>
          <Box
            key={index}
            sx={{
              flex: 1, // This makes each item take up an equal amount of space
              display: 'flex',
            }}
          >
            <Card
              sx={{
                boxShadow: 'none',
                bgcolor: '#f7f7f7',
                width: '100%', // Ensure card fills the box
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  {t.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3, flexGrow: 1 }} // flexGrow pushes the author info to the bottom
                >
                  &quot;{t.quote}&quot;
                </Typography>
                
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    {t.author}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {t.role}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
    </Box>
  )
}