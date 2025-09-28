"use client"

import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"

export default function Navbar() {
  return (
    <AppBar position="sticky" color="secondary" sx={{ bgcolor: "secondary.main" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Box
            sx={{
              width: 24,
              height: 24,
              bgcolor: "primary.main",
              borderRadius: 1,
            }}
          />
          <Typography variant="h6" color="common.white" sx={{ fontWeight: 700 }}>
            Instalanes
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center">
          <Button color="inherit">TMS solutions</Button>
          <Button color="inherit">Resources</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">Contact us</Button>
          <Button variant="contained" color="primary">
            Get Demo
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
