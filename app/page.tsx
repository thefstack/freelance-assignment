"use client"

import { ThemeProvider, CssBaseline } from "@mui/material"
import Box from "@mui/material/Box"
import theme from "@/theme/theme"
import Navbar from "@/components/sections/navbar"
import Hero from "@/components/sections/hero"
import ProcessRibbon from "@/components/sections/process-ribbon"
import Why from "@/components/sections/why"
import ChallengeSolution from "@/components/sections/challenge-solution"
import Features from "@/components/sections/features"
import Testimonials from "@/components/sections/testimonials"
import Blogs from "@/components/sections/blogs"
import CtaContact from "@/components/sections/cta-contact"
import Footer from "@/components/sections/footer"
import Capabilities from "@/components/sections/capabilities-enabler"
import StandoutFeatures from "@/components/sections/Features2"
import ContactHero from "@/components/sections/contactHero"

export default function Page() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main>
        <Hero />
        <ProcessRibbon />
        <Why />
        <ChallengeSolution />
        <Features />
        <Capabilities/>
        <StandoutFeatures/>
        <Testimonials />
        <Blogs />
        <ContactHero/>
        {/* <CtaContact /> */}
      </main>
      <Footer />
      <Box sx={{ height: 16 }} />
    </ThemeProvider>
  )
}
