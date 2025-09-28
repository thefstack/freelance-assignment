"use-client";

import * as React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Stack,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArticleIcon from "@mui/icons-material/Article";

const navLinks = ["TMS solutions", "Pricing", "Contact us"];
const resourcesLink = "Resources";

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "common.black" }}>
      <Toolbar>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ flexGrow: 1, py:2 }}
          
        >
          <Box
            component="img"
            src="https://instalanes.com/new_instalanes/wp-content/uploads/2024/08/cropped-cropped-WhatsApp-Image-2024-03-23-at-12.47.36-PM.jpeg"
            alt="logo"
            sx={{ position: "relative", width: "80px", mb: 2 }}
          />
          <Typography
            variant="h6"
            color="common.white"
            sx={{ fontWeight: 700 }}
          >
            Instalanes
          </Typography>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Button color="inherit">{navLinks[0]}</Button>
          <Button color="inherit" endIcon={<KeyboardArrowDownIcon />}>
            {resourcesLink}
          </Button>
          <Button color="inherit">{navLinks[1]}</Button>
          <Button color="inherit">{navLinks[2]}</Button>
        </Stack>

        <Box sx={{ flexGrow: { xs: 0, md: 1 } }} />

        <Button
          variant="contained"
          color="primary"
          startIcon={<ArticleIcon />}
          sx={{ ml: { md: 2 }, border:"none", borderRadius:0 }}
        >
          Get Demo
        </Button>

        <Box sx={{ display: { xs: "flex", md: "none" }, ml: 1 }}>
          <IconButton
            size="large"
            aria-label="navigation menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {[...navLinks.slice(0, 1), resourcesLink, ...navLinks.slice(1)].map(
              (link) => (
                <MenuItem key={link} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{link}</Typography>
                </MenuItem>
              )
            )}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
