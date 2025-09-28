"use client"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import { Box } from "@mui/material"

const posts = [
  { title: "Deliver 2024: fostering innovation and impact", date: "September 17, 2024", imgLink:"https://instalanes.com/new_instalanes/wp-content/uploads/2024/08/Uber-Freight-Quarterly-Market-Update-Report-2-944x500-1-768x407.jpg" },
  { title: "Embracing efficiency with TMS implementation", date: "August 19, 2024", imgLink:"https://instalanes.com/new_instalanes/wp-content/uploads/2024/08/UFTMSVideoCover-e1722632758987-1440x759-1-768x405.jpg" },
  { title: "Freight market update, Q3 — August 2024", date: "August 19, 2024", imgLink:"https://instalanes.com/new_instalanes/wp-content/uploads/2024/08/Uber-Freight-Quarterly-Market-Update-Report-2-944x500-1-768x407.jpg" },
]

export default function Blogs() {
  return (
    <Container sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="subtitle1" sx={{ color: "primary.main", mb: 1 }}>
        Featured Blogs
      </Typography>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Industries
      </Typography>

      <Grid container spacing={3}>
        {posts.map((p, idx) => (
          <Grid key={p.title} size={{ xs: 12, md: 4 }}>
            <Card variant="outlined">
              <Box
                  component="img"
                  src={p.imgLink}
                  alt={p.title}
                  sx={{ position: "relative", width: "100%", mb: 2 }}
                />
              <CardContent>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {p.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {p.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
