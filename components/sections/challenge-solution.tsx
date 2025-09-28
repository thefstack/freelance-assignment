"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function ChallengeSolution() {
  return (
    <Box sx={{bgcolor: "white"}}>
      <Container sx={{ py: { xs: 6, md: 10, background: "white" } }}>
      <Typography variant="subtitle1" sx={{ color: "primary.main", mb: 1 }}>
        Solving the big challenge
      </Typography>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Simplifying the complex manual chaos, digitally
      </Typography>

      <Grid container spacing={4} alignItems="center">
        {/* Left column */}
  <Grid sx={{ display: "flex", gap: 2 }}>
    <Box sx={{ flex: 1 }}>
      <Typography variant="h3" sx={{ mb: 2 }}>
        The Challenge
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 2 }}>
        Managing the supply chain and maintaining visibility across all
        teams, systems, documents, and process handoffs is complex. Many
        organizations still rely on emails and phone calls, leading to
        high costs and low control.
      </Typography>
    </Box>
    <Paper
      variant="outlined"
      sx={{ flex: 1, p: 1.5, border: "none", display: "flex" }}
    >
      <Box
        component="img"
        src="https://instalanes.com/new_instalanes/wp-content/uploads/2024/08/Before-1024x654-1.png"
        alt="Supply chain complexity diagrams"
        sx={{ width: "100%", borderRadius: 1 }}
      />
    </Paper>
  </Grid>

  {/* Right column */}
  <Grid sx={{ display: "flex", gap: 2 }}>
    <Paper
      variant="outlined"
      sx={{ flex: 1, p: 1.5, border: "none", display: "flex" }}
    >
      <Box
        component="img"
        src="https://instalanes.com/new_instalanes/wp-content/uploads/2024/12/Instalanes-TMS-Digital-SaaS-platform-solution.png"
        alt="Supply chain complexity diagrams"
        sx={{ width: "100%", borderRadius: 1 }}
      />
    </Paper>
    <Box sx={{ flex: 1 }}>
      <Typography variant="h3" sx={{ mb: 2 }}>
        The Digital Solution
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 2 }}>
        Currently, there is a need to have an impactful global platform
        that is easy, smart, and accessible by the masses that keeps
        everyone on the same page.
      </Typography>
      <Typography>
        Instalanes platform enhances the ability of supply chain leaders
        and their teams to make transportation logistics a competitive
        advantage. With the value proposition offered, your teams can
        deliver real impact on business outcomes
      </Typography>
    </Box>
  </Grid>
</Grid>
    </Container>
    </Box>
  );
}
