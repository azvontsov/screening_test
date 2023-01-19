import React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export const Grapes = () => {
  return (
    <>
      <h1>Grapes Component</h1>
      <Box
        component="ul"
        sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
      >
        <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
          <CardCover>
            <img
              src="https://images.unsplash.com/photo-1537640538966-79f369143f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80"
              srcSet="https://images.unsplash.com/photo-1537640538966-79f369143f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80&dpr=2 2x"
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
              Grapes Image
            </Typography>
          </CardContent>
        </Card>
        <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
          <CardCover>
            <video
              autoPlay
              loop
              muted
              poster="https://i.vimeocdn.com/video/1054083938-e9dfd84d4fa9fb739b29f96628cfdaebc745d7e282643549add088381f104168-d?mw=600&mh=337"
            >
              <source
                src="https://res.cloudinary.com/antonjs/video/upload/v1674100265/grapes_bp4hnc.mp4"
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
              Grapes Video
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
