import React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export const Bananas = () => {
  return (
    <>
      <h1>Bananas Component</h1>

      <Box
        component="ul"
        sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
      >
        <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
          <CardCover>
            <img
              src="https://images.unsplash.com/photo-1604148482093-d55d6fc62400?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
              srcSet="https://images.unsplash.com/photo-1604148482093-d55d6fc62400?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </CardCover>
          <CardContent>
            <Typography
              level="h6"
              fontWeight="lg"
              textColor="#fff"
              mt={{ xs: 12, sm: 18 }}
            >
              Bananas Image
            </Typography>
          </CardContent>
        </Card>
        <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
          <CardCover>
            <video
              autoPlay
              loop
              muted
              poster="https://i.vimeocdn.com/video/810735104-17760a5a368c04369088067ef7fff4205d9ec10b57c97f697e385e9bade93bcf-d?mw=600&mh=337"
            >
              <source
                src="https://res.cloudinary.com/antonjs/video/upload/v1674099474/bananas_sla3qg.mp4"
                type="video/mp4"
              />
            </video>
          </CardCover>
          <CardContent>
            <Typography
              level="h6"
              fontWeight="lg"
              textColor="#fff"
              mt={{ xs: 12, sm: 18 }}
            >
              Bananas Video
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
