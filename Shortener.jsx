import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import UrlForm from '../components/UrlForm';
import UrlList from '../components/UrlList';

const Shortener = () => {
  const [urls, setUrls] = useState([]);

  const handleAddUrl = (newUrl) => {
    setUrls([...urls, newUrl]);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Shorten URLs
      </Typography>
      <UrlForm onAddUrl={handleAddUrl} />
      <UrlList urls={urls} />
    </Container>
  );
};

export default Shortener;