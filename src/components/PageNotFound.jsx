// PageNotFound.js
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <Container 
      maxWidth="sm" 
      sx={{ 
        textAlign: 'center', 
        mt: 8, 
        p: 4, 
        bgcolor: '#f5f5f5', 
        borderRadius: 2, 
        boxShadow: 3 
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: 100, color: '#ff5722', mb: 2 }} />
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
        404
      </Typography>
      <Typography variant="h6" gutterBottom>
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        It looks like you may have taken a wrong turn. Don’t worry... it happens to the best of us!
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => navigate('/')}
        sx={{ textTransform: 'none', fontWeight: 'bold', px: 4 }}
      >
        Go Back Home
      </Button>
    </Container>
  );
}

export default PageNotFound;
