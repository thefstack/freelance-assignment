"use client"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Box from "@mui/material/Box"

const stats = [
  {
    title: "9x",
    subtitle: "Visibility",
    body: "Nine-layered visibility gives unmatched control and understanding across your network. See everything at a glance.",
  },
  {
    title: "100%",
    subtitle: "Collaboration",
    body: "Boost productivity and empower your teams with shared context and aligned workflows.",
  },
  {
    title: "~30%",
    subtitle: "Optimization",
    body: "Digitize processes to eliminate manual tasks and standardize operations to lower costs.",
  },
  {
    title: "~2x",
    subtitle: "Growth",
    body: "Unlock opportunities to scale and expand into new geographies with confidence.",
  },
]

export default function Why() {
  return (
    <Box sx={{ bgcolor: "grey.100", py: { xs: 6, md: 10 } }}>
      <Container>
        <Typography variant="subtitle1" sx={{ color: "primary.main", mb: 1 }}>
          Why Instalanes platform
        </Typography>
        <Typography variant="h4" sx={{ mb: 4, maxWidth: 1000 }}>
          Instalanes is a Collaborative TMS platform that helps Business leaders generate real business outcomes, they
          care for!
        </Typography>

        <Grid container spacing={3}>
          {stats.map((s) => (
            <Grid key={s.title} size={{ xs: 6, md: 3 }}>
              <Card variant="outlined" sx={{textAlign:"center"}}>
                <CardContent>
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                    {s.title}
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 1.5 }}>
                    {s.subtitle}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {s.body}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
