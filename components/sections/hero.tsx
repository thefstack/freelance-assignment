"use client"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        color: "common.white",
        bgcolor: "secondary.main",
        minHeight: { xs: 420, md: 560 },
        display: "flex",
        alignItems: "center",
        // background comes from the provided image
        backgroundImage: "url(https://instalanes.com/new_instalanes/wp-content/uploads/2024/11/Banner_pc.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(0,0,0,0.45)",
        }}
      />
      <Container sx={{ position: "relative" }}>
        <Stack spacing={2} sx={{ maxWidth: { md: 900 } }}>
          <Typography variant="h4" sx={{ color: "primary.main", fontWeight: 700 }}>
            Switch to Better
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: 36, md: 64 }, lineHeight: 1.1 }}>
            Transport management system
          </Typography>
          <Typography variant="h6" sx={{ color: "grey.200", fontWeight: 400 }}>
            Cloud-based SaaS TMS and visibility platform for 3PLs, Shippers, LSPs, Transporters, and Carriers, enabling
            end-to-end efficient transportation logistics operations and collaboration
          </Typography>
          <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
            <Button size="large" variant="contained" color="primary" sx={{borderRadius:0}}>
              Schedule a Demo{"  "} <ArrowForwardIcon/>
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
