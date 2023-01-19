import React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export const Apples = () => {
  return (
    <>
      <h1>Apples Component</h1>
      <Box
        component="ul"
        sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
      >
        <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
          <CardCover>
            <img
              src="https://images.unsplash.com/photo-1590005354167-6da97870c757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80"
              srcSet="https://images.unsplash.com/photo-1590005354167-6da97870c757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80&dpr=2 2x"
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
              Apples Image
            </Typography>
          </CardContent>
        </Card>
        <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
          <CardCover>
            <video
              autoPlay
              loop
              muted
              poster="https://i.vimeocdn.com/video/785079406-8095fe6770f9617283b051f09f12887b2028c2f3baef6b85f0152a09c1d616c4-d?mw=900&mh=506"
            >
              <source
                src="https://res.cloudinary.com/antonjs/video/upload/v1674099157/apples_furzqd.mp4"
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
              Aples Video
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
