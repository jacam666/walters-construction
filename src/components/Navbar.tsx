import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';
import path from 'path';
import Image from 'next/image';

// const pages = ['About Us', 'Gallery', 'Contact'];

const pages = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
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
          <Link href="/" passHref>
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
          {/* Mobile Logo (centered) */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              position: 'absolute',
              left: 0,
              top: 0,
              height: '64px', // default AppBar height
              pointerEvents: 'none', // prevent blocking menu button clicks
              zIndex: 0, // ensure it's behind the menu icon
            }}
          >
            <Image
              src="/images/logo.png"
              alt="WP Construction Logo"
              width={100}
              height={35}
              priority
              style={{ objectFit: 'contain' }}
            />
          </Box>


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
