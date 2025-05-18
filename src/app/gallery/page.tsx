"use client";
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import { useMediaQuery, useTheme } from '@mui/material';
import ResponsiveAppBar from '@/components/Navbar';
import Footer from '@/components/Footer';

function srcset(image: string, width: number, height: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${height * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  const [open, setOpen] = React.useState(false);
  const [selectedImg, setSelectedImg] = React.useState<string | null>(null);

  const handleClickOpen = (img: string) => {
    setSelectedImg(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImg(null);
  };

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  let cols = 4;
  if (isXs) cols = 3;
  else if (isSm) cols = 2;
  else if (isMdUp) cols = 3;

  return (
    <div>
      <ResponsiveAppBar />
      <div className='bg-white py-6 px-4'>
        <h1 className="text-4xl text-gray-900 font-bold mb-8 text-center">
          Gallery
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center mb-8">
          Explore our collection of stunning images showcasing our work.
        </p>
      </div>
      <div className='bg-gray-100 py-6 px-4'>
        <ImageList
          sx={{
            width: '100%',
            maxWidth: 1200,
            margin: '0 auto',
            transform: 'translateZ(0)',
          }}
          rowHeight={200}
          gap={8}
          cols={cols}
        >
          {itemData.map((item) => {
            const cols = item.featured ? 2 : 1;
            const rows = item.featured ? 2 : 1;

            return (
              <ImageListItem key={item.img} cols={cols} rows={rows}>
                <img
                  {...srcset(item.img, 250, 200, rows, cols)}
                  alt={item.title}
                  loading="lazy"
                  onClick={() => handleClickOpen(item.img)}
                  style={{
                    cursor: 'pointer',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                  }}
                />
                <ImageListItemBar
                  sx={{
                    background:
                      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                  }}
                  title={item.title}
                  position="top"
                  actionIcon={
                    <IconButton
                      sx={{ color: 'white' }}
                      aria-label={`star ${item.title}`}
                    >
                    </IconButton>
                  }
                  actionPosition="left"
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      </div>

      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        {selectedImg && (
          <img
            src={selectedImg}
            alt="preview"
            style={{ maxWidth: '90vw', maxHeight: '90vh' }}
          />
        )}
      </Dialog>

      <Footer />
    </div>
  );
}

const itemData = [
  {
    img: '/images/image-1.jpg',
    featured: true,
  },
  {
    img: '/images/image-2.jpg',
  },
  {
    img: '/images/image-3.jpg',
  },
  {
    img: '/images/image-4.jpg',
  },
  {
    img: '/images/image-5.jpg',
  },
  {
    img: '/images/image-7.jpg',
  },
  {
    img: '/images/image-6.jpg',
    featured: true,

  },
  {
    img: '/images/image-8.jpg',
  },
  {
    img: '/images/image-9.jpg',
  },
  {
    img: '/images/image-10.jpg',
  },
  {
    img: '/images/image-11.jpg',
  },
  {
    img: '/images/image-12.jpg',
    // featured: true,
  },
  {
    img: '/images/image-15.jpg',
    featured: true,
  },
  {
    img: '/images/image-14.jpg',
    // featured: true,
  },
  {
    img: '/images/image-13.jpg',
    // featured: true,
  },
];
