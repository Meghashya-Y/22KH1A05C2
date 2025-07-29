import React from 'react';
import { Container, Typography } from '@mui/material';
import UrlList from '../components/UrlList';

function Stats({ urls }) {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Shortened URLs
      </Typography>
      <UrlList urls={urls} />
    </Container>
  );
}

export default Stats;