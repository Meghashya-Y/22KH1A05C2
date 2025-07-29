
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid
} from '@mui/material';

function UrlList({ urls }) {
  if (urls.length === 0) {
    return (
      <Typography variant="body1" sx={{ mt: 4 }}>No URLs shortened yet.</Typography>
    );
  }

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {urls.map((url,index)=>(
        <Grid item xs={12} key={index}>
          <Card variant="outlined">
            <CardContent>
               <Typography variant="h6" gutterBottom>
                Short URL: <a href={url.shortUrl} target="_blank" rel="noopener noreferrer">{url.shortUrl}</a>
              </Typography>
              <Typography variant="body2">Original URL: {url.originalUrl}</Typography>
              <Typography variant="body2">Expiry: {url.expiry}</Typography>
            </CardContent>
          </Card>
        </Grid>
        ))}
    </Grid>
  );
}

export default UrlList;