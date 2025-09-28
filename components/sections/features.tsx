"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { List, ListItem, ListItemText } from "@mui/material";

const features = [
  {
    id: 1,
    title: "Load dispatch planner",
    description:
      "Optimize resource allocation and maximize load efficiency with intelligent dispatch planning.",
    list: [
      "Automated load consolidation to minimize empty miles.",
      "Real-time capacity matching for quick assignments.",
      "Dynamic routing for optimal delivery times and costs.",
      "Centralized visibility into fleet and load status.",
    ],
  },
  {
    id: 2,
    title: "Transport Order",
    description:
      "Simplify order management with automated, accurate, and connected processes.",
    list: [
      "Seamless integration with customer systems for streamlined order creation.",
      "Automated validation and error-free order entry.",
      "Configurable workflows to adapt to unique operational needs.",
      "Instant notifications and updates to stakeholders.",
    ],
  },
  {
    id: 3,
    title: "Rates and Carrier Selection",
    description:
      "Choose the best carriers and pricing options with data-driven insights.",
    list: [
      "Carrier comparison based on cost, performance, and capacity.",
      "AI-powered recommendations for cost-effective decisions.",
      "Instant rate negotiation and contract management.",
      "Configurable rules for automated carrier selection.",
    ],
  },
  {
    id: 4,
    title: "Shipments and tracking",
    description:
      "Gain end-to-end shipment visibility with real-time tracking and updates.",
    list: [
      "GPS-enabled live tracking for precise location data.",
      "Predictive ETAs with proactive alerts for delays.",
      "Integrated milestone tracking for every shipment stage.",
      "Customizable dashboards for shipment performance.",
    ],
  },
  {
    id: 5,
    title: "PoD, Billing",
    description:
      "Simplify compliance and financial processes with automated documentation.",
    list: [
      "Digital Proof of Delivery (PoD) for faster confirmation.",
      "Automatic invoice generation linked to shipment milestones.",
      "Centralized document storage for easy access and audits.",
      "Compliance checks to meet regulatory requirements.",
    ],
  },
  {
    id: 6,
    title: "Business Intelligence, Reporting",
    description:
      "Transform data into actionable insights for smarter decisions.",
    list: [
      "Customizable reports to track KPIs and performance trends.",
      "Real-time dashboards for operational visibility.",
      "Predictive analytics for demand and capacity forecasting.",
      "Data export and API integration for enterprise reporting tools.",
    ],
  },
];

export default function TmsPlatformSolutions() {
  return (
    <Container sx={{ py: 8 }}>
      {/* Header */}
      <Typography variant="subtitle1" color="primary.main" sx={{ mb: 1 }}>
        Digital TMS platform solutions
      </Typography>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Instalanes digitizes your entire transportation process, solving real
        industry challenges
      </Typography>

      {/* Central diagram */}
      <Paper
        variant="outlined"
        sx={{ mb: 6, border: "none", background: "transparent" }}
      >
        <Box
          component="img"
          src="https://instalanes.com/new_instalanes/wp-content/uploads/2024/12/Instalanes-TMS-Process.svg"
          alt="Digitized transportation process"
          sx={{ width: "100%", borderRadius: 2 }}
        />
      </Paper>

      {/* Feature cards */}
      <Grid
        container
        spacing={4}
        sx={{ justifyContent: "center", alignItems: "stretch" }} // This simple change fixes it
      >
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
                height: "100%",
                position: "relative",
              }}
            >
              {/* Image */}
              <Box sx={{ position: "relative" }}>
                <Box
                  component="img"
                  src="https://instalanes.com/new_instalanes/wp-content/uploads/2024/08/Control-tower-2-1024x577-1.png"
                  alt={feature.title}
                  sx={{ position: "relative", width: "100%", mb: 2 }}
                />

                {/* Number overlay */}
                <Typography
                  variant="h3"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    fontWeight: "bold",
                    color: "rgba(0,0,0,0.75)",
                  }}
                >
                  {feature.id}
                </Typography>
              </Box>

              {/* Title */}
              <Box sx={{px:2}}>
                <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: 600,
                }}
              >
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {feature.title}
                </Typography>
                <ArrowForwardIcon />
              </Box>

              {/* Description */}
              <Typography color="text.secondary">
                {feature.description}
              </Typography>

              <List sx={{ listStyleType: "disc", pl: 4 }}>
                {feature.list.map((item, index) => (
                  <ListItem key={index} sx={{ display: "list-item", p: 0 }}>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
