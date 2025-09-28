"use client"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos"

const steps = [
  { id: 1, label: "Dispatch planner" },
  { id: 2, label: "Transport order" },
  { id: 3, label: "Rates and Carrier" },
  { id: 4, label: "Shipments and tracking" },
  { id: 5, label: "PoD and Billing" },
  { id: 6, label: "Reporting Intelligence" },
]

export default function ProcessRibbon() {
  return (
    <Box sx={{ bgcolor: "grey.300", py: { xs: 4, md: 6 } }}>
      <Container>
        <Typography variant="subtitle1" sx={{ color: "primary.main", mb: 1 }}>
          Instalanes TMS - the all-in-one unified platform for transportation logistics
        </Typography>
        <Typography variant="h4" sx={{ mb: 3, maxWidth: 1000 }}>
          Simplify and digitize FCL, FTL, PTL, ODC, and warehouse shipments with a unified TMS for Shippers, Carriers,
          3PLs, and LSPs
        </Typography>
-
        <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap" alignItems="center">
          {steps.map((s, idx) => (
            <Stack key={s.id} direction="row" alignItems="center" spacing={2}>
              <Box
                sx={{
                  bgcolor: "common.black",
                  color: "common.white",
                  px: 2.5,
                  py: 1.5,
                  borderRadius: 1,
                  width: 180,
                  height:120,
                  textAlign: "center",
                }}
              >
                <Typography variant="subtitle2" sx={{ color: "grey.300" }}>
                  {s.id}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600, fontSize:"1.2rem", }}>
                  {s.label}
                </Typography>
              </Box>
              {idx < steps.length - 1 && <ArrowForwardIos fontSize="small" sx={{ color: "grey.700" }} />}
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
