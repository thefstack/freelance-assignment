"use client"

import type React from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"

// Icons
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid"
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn"
import NotificationsIcon from "@mui/icons-material/Notifications"
import VisibilityIcon from "@mui/icons-material/Visibility"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import DescriptionIcon from "@mui/icons-material/Description"
import AssessmentIcon from "@mui/icons-material/Assessment"
import ApiIcon from "@mui/icons-material/Api"
import InsightsIcon from "@mui/icons-material/Insights"
import TouchAppIcon from "@mui/icons-material/TouchApp"
import CloudQueueIcon from "@mui/icons-material/CloudQueue"
import PeopleIcon from "@mui/icons-material/People"
import SpeedIcon from "@mui/icons-material/Speed"
import GroupsIcon from "@mui/icons-material/Groups"
import PublicIcon from "@mui/icons-material/Public"

type Feature = {
  id: number
  icon: React.ElementType
  title: string
  description: string
}

const features: Feature[] = [
  {
    id: 1,
    icon: PhoneAndroidIcon,
    title: "Mobile driven",
    description: "Run logistics anytime, anywhere effortlessly",
  },
  {
    id: 2,
    icon: AssignmentTurnedInIcon,
    title: "Instant PoD & Invoicing",
    description: "Fast proof of delivery and billing",
  },
  {
    id: 3,
    icon: NotificationsIcon,
    title: "Smart notifications",
    description: "Stay ahead with timely updates and alerts",
  },
  { id: 4, icon: VisibilityIcon, title: "Control tower view", description: "Full operational visibility in one place" },
  {
    id: 5,
    icon: ArrowForwardIcon,
    title: "Next action ready",
    description: "Your next action is visible and a click away",
  },
  {
    id: 6,
    icon: DescriptionIcon,
    title: "Centralized documentation",
    description: "Access all documents from one location",
  },
  {
    id: 7,
    icon: AssessmentIcon,
    title: "Auto status reporting",
    description: "Customized reports delivered automatically",
  },
  { id: 8, icon: ApiIcon, title: "API-Enabled", description: "Easily integrate with your existing systems" },
  { id: 9, icon: InsightsIcon, title: "Data intelligence", description: "Boost revenue, reduce costs, improve KPIs" },
  { id: 10, icon: TouchAppIcon, title: "Intuitive interface", description: "Easy-to-use design for all users" },
  {
    id: 11,
    icon: CloudQueueIcon,
    title: "Neutral SaaS platform",
    description: "Open collaboration across all stakeholders",
  },
  {
    id: 12,
    icon: PeopleIcon,
    title: "Networked & Collaborative",
    description: "Seamless teamwork within and across entities",
  },
  { id: 13, icon: SpeedIcon, title: "Quick implementation", description: "Rapid setup in days, not months" },
  {
    id: 14,
    icon: GroupsIcon,
    title: "Built for everyone",
    description: "Designed for all, including C-level executives",
  },
  { id: 15, icon: PublicIcon, title: "Global & Scalable", description: "Designed for global operations and growth" },
]

export default function StandoutFeatures() {
  return (
    <Container maxWidth="lg" sx={{ py: 6, }}>
      <Typography variant="subtitle1" color="primary" sx={{ mb: 1 }}>
        Features
      </Typography>

      <Typography variant="h4" sx={{ mb: 4, maxWidth: 1000 }}>
        Instalanes platform makes you standout in front of your Customers by offering
      </Typography>

      {/* 1 / 2 / 3 / 5 columns across breakpoints */}
      <Grid container spacing={0} columns={{ xs: 15, sm: 15, md: 15, lg: 15 }} alignItems="stretch">
        {features.map((f) => {
          const Icon = f.icon
          return (
            <Grid key={f.id} >
              <Paper
                elevation={0}
                sx={{
                  height: 160,
                  p: 2,
                  border: "none",
                  borderRadius: 0,
                  boxShadow: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  width:280
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: "grey.200",
                    color: "text.primary",
                    width: 36,
                    height: 36,
                    mb: 1.5,
                  }}
                >
                  <Icon fontSize="small" />
                </Avatar>

                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 }}>
                  {f.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {f.description}
                </Typography>
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}
