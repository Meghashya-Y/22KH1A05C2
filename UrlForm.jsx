import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Box,
  Alert
} from '@mui/material';

function UrlForm({ onAddUrl }) {
  const [originalUrl, setOriginalUrl] = useState('');
  const [validity, setValidity] = useState('');
  const [shortcode, setShortcode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validations
    if (!originalUrl.trim()) {
      setError('Original URL is required.');
      return;
    }

    if (validity && isNaN(validity)) {
      setError('Validity must be a number.');
      return;
    }

    setError('');

    // Simulate shortened URL creation
    const shortUrl =
      `https://affrd.in/${shortcode || Math.random().toString(36).substring(2, 7)}`;
    const newUrl = {
      originalUrl,
      shortUrl,
      expiry: validity ? `${validity} min` : 'No expiry'
    };

    onAddUrl(newUrl);

    // Clear form
    setOriginalUrl('');
    setValidity('');
    setShortcode('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Original URL"
            fullWidth
            required
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Validity (in minutes)"
            fullWidth
            value={validity}
            onChange={(e) => setValidity(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Preferred Shortcode"
            fullWidth
            value={shortcode}
            onChange={(e) => setShortcode(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" fullWidth>
            Shorten URL
          </Button>
        </Grid>
        {error && (
          <Grid item xs={12}>
            <Alert severity="error">{error}</Alert>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default UrlForm;