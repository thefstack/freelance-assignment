"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const features = [
  {
    id: 1,
    title: "Collaborative tracking and visibility",
    description:
      "Track shipments in real-time through telematics, mobile apps, and shared dashboards. Improve collaboration and transparency across all stakeholders.",
  },
  {
    id: 2,
    title: "Control tower",
    description:
      "Gain a bird's-eye view of operations with map-based insights, next action prompts, and status updates anytime. Enable faster, more informed decision-making.",
  },
  {
    id: 3,
    title: "Data performance and analytics",
    description:
      "Monitor key performance indicators with customizable dashboards and actionable insights. Drive continuous improvement and achieve business goals.",
  },
  {
    id: 4,
    title: "End-to-End mobile platform",
    description:
      "Manage transportation operations seamlessly on mobile, from planning to delivery. Empower on-the-go management and enhanced efficiency.",
  },
  {
    id: 5,
    title: "Alerts and notifications controller",
    description:
      "Configure real-time alerts for exceptions, milestones, and tasks. Stay proactive and reduce operational risks.",
  },
  {
    id: 6,
    title: "Documents centralization",
    description:
      "Store, access, and share all transport-related documents in one place. Simplify compliance and reduce administrative burden.",
  },
  {
    id: 7,
    title: "One-View operations management",
    description:
      "Access end-to-end transportation operations from a single, unified interface. Streamline processes and enhance visibility.",
  },
  {
    id: 8,
    title: "Trip settlement analytics",
    description:
      "Analyze trip settlements to determine profit or loss in real time. Maximize profitability with actionable financial insights.",
  },
];

export default function Capabilities() {
  return (
    <Box sx={{bgcolor:"white"}}>
        <Container sx={{ py: 8, background:"white" }}>
      {/* Header */}
      <Typography variant="subtitle1" color="primary.main" sx={{ mb: 1 }}>
        Capabilities enablers
      </Typography>
      <Grid sx={{ display: "flex", gap: 2 }}>
        <Box sx={{ display: "flex", flexDirection:"column", gap: 2, fontWeight:700 }}>
            <Typography variant="h5">Instalanes platform offers your team powerful capabilities to manage transportation logistics anytime, anywhere</Typography>
            <ArrowForwardIcon/>
        </Box>
        <Paper
        variant="outlined"
        sx={{ mb: 6, border: "none", background: "transparent" }}
      >
        <Box
          component="img"
          src="https://instalanes.com/new_instalanes/wp-content/uploads/2024/12/Instalanes-TMS-Platform-capabilities.svg"
          alt="Digitized transportation process"
          sx={{ width: "100%", borderRadius: 2 }}
        />
      </Paper>
      </Grid>

      {/* Feature cards */}
      <Grid container spacing={4} sx={{justifyContent:"center",
              alignItems:"center"}}>
        {features.map((feature) => (
          <Grid
            key={feature.id}
            sx={{
              flex: { xs: "0 0 100%", sm: "0 0 50%", md: "0 0 33.3333%" },
              maxWidth: { xs: "100%", sm: "40%", md: "30.3333%" },
            }}
          >
            <Paper
              variant="outlined"
              sx={{
                p: 2,
                height: "100%",
                position: "relative",
                border:"none",
                bgcolor:"grey.100"
              }}
            >
              {/* Image */}
              <Box sx={{ position:"relative"}}>
                <Box
                component="img"
                src="https://instalanes.com/new_instalanes/wp-content/uploads/2024/08/Control-tower-2-1024x577-1.png"
                alt={feature.title}
                sx={{ position:"relative", width: "100%", mb: 2 }}
              />

              {/* Number overlay */}
              <Typography
                variant="h3"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform:"translate(-50%,-50%)",
                  fontWeight: "bold",
                  color: "rgba(0,0,0,0.75)",
                }}
              >
                {feature.id}
              </Typography>
              </Box>

              {/* Title */}
                <Typography variant="h5" sx={{ mb: 1, textAlign:"center" }}>
                {feature.title}
              </Typography>


              {/* Description */}
              <Typography color="text.secondary" sx={{textAlign:"center"}}>
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>
  );
}
