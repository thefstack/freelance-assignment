"use client"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "secondary.main", color: "common.white", pt: 6, pb: 4 }}>
      <Container>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Instalanes
        </Typography>
        <Typography sx={{ color: "grey.300", maxWidth: 900, mb: 4 }}>
          Instalanes is a Transport management and visibility platform that helps businesses improve supply chain
          visibility, collaboration, growth, and efficiency.
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Company
            </Typography>
            <Stack spacing={0.5} sx={{ color: "grey.300" }}>
              <span>About</span>
              <span>Careers</span>
              <span>Terms</span>
              <span>Privacy</span>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              TMS Capabilities
            </Typography>
            <Stack spacing={0.5} sx={{ color: "grey.300" }}>
              <span>Dispatching</span>
              <span>Data insights</span>
              <span>Reporting</span>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Resources
            </Typography>
            <Stack spacing={0.5} sx={{ color: "grey.300" }}>
              <span>Blogs</span>
              <span>Partnering</span>
              <span>Pricing</span>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Subscribe
            </Typography>
            <Stack direction="row" spacing={1}>
              <TextField
                fullWidth
                size="small"
                placeholder="Enter Email for updates"
                sx={{
                  bgcolor: "common.white",
                  borderRadius: 1,
                  "& .MuiInputBase-input": { py: 1 },
                }}
              />
              <Button variant="contained" color="primary">
                Subscribe
              </Button>
            </Stack>
          </Grid>
        </Grid>

        <Typography variant="caption" sx={{ display: "block", color: "grey.400", mt: 4 }}>
          © {new Date().getFullYear()} Instalanes.com. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}
