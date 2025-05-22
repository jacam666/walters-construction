import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import Image from 'next/image';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import ContactMailIcon from '@mui/icons-material/ContactMail';




const pages = [
  { label: 'Home', path: '/', icon: <HomeIcon fontSize="small" /> },
  { label: 'About Us', path: '/about', icon: <InfoIcon fontSize="small" /> },
  { label: 'Gallery', path: '/gallery', icon: <PhotoLibraryIcon fontSize="small" /> },
  { label: 'Contact', path: '/contact', icon: <ContactMailIcon fontSize="small" /> },
];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" className='bg-gray-800 border-none'>
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Link href="/">
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', height: 40, mr: 2 }}>
              <Image
                src="/images/logo.png"
                alt="WP Construction Logo"
                width={120}
                height={40}
                priority
                style={{ objectFit: 'contain' }}
              />
            </Box>
          </Link>
          {/* Mobile Menu Icon (left) */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            TransitionComponent={Fade}
            PaperProps={{
              sx: {
                mt: 1,
                px: 1,
                py: 0.5,
                backgroundColor: 'white',
                boxShadow: 4,
                borderRadius: 2,
              },
            }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page.label}
                onClick={handleCloseNavMenu}
                sx={{
                  borderRadius: 1,
                  '&:hover': {
                    backgroundColor: '#f3f4f6',
                  },
                }}
              >
                <Link href={page.path} passHref>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {page.icon}
                    <Typography
                      textAlign="center"
                      sx={{
                        color: '#1f2937',
                        fontWeight: 500,
                        width: '100%',
                      }}
                    >
                      {page.label}
                    </Typography>
                  </Box>
                </Link>
              </MenuItem>
            ))}
          </Menu>

          <Link href="/">
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'center',
                alignItems: 'center',
                height: '64px',
                width: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 0,
                pointerEvents: 'none', // ✅ disables Box clicks (so menu works)
              }}
            >
              <Image
                src="/images/logo.png"
                alt="WP Construction Logo"
                width={100}
                height={35}
                priority
                style={{
                  objectFit: 'contain',
                  pointerEvents: 'auto', // ✅ enables click on the image
                }}
              />
            </Box>
          </Link>

          {/* Desktop Menu (right) */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link key={page.label} href={page.path} passHref >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.label}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
