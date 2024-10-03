import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import rf from '../assets/rf.jpg';

const RefundCancellation = () => {
  return (
    <div>
      {/* Background Image with Black Mask and Title */}
      <Box
        sx={{
          position: 'relative',
          height: '50vh',
          backgroundImage: `url(${rf})`, // Background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Black mask overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black
          }}
        />
        {/* Title Text */}
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            textShadow: '2px 2px 5px rgba(0,0,0,0.7)',
            position: 'relative', // Keeps the text above the mask
            zIndex: 1, // Ensure text is above the overlay
          }}
        >
          REFUND AND CANCELLATION
        </Typography>
      </Box>

      {/* Policy Content */}
      <Container
        style={{
          padding: '20px',
          backgroundColor: '#f9f9f9',
          marginTop: '20px',
        }}
      >
        <Typography
          variant="h4"
          style={{
            textAlign: 'center',
            marginBottom: '20px',
            color: '#333',
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          Refund and Cancellation Policy
        </Typography>

        <Box
          style={{
            backgroundColor: '#fff',
            padding: '20px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
          }}
        >
          <Typography variant="body1" style={{ marginBottom: '15px' }}>
            This refund and cancellation policy outlines how you can cancel or seek a refund for a service that you have taken through the platform. Under this policy:
          </Typography>

          <ul style={{ margin: '20px 0', paddingLeft: '20px' }}>
            <li style={{ marginBottom: '15px' }}>
              <Typography variant="body1">
                Cancellation will only be considered if the request is made within 5 days of taking admission. However, cancellation requests may not be entertained if the student does a single class or attends any class/course.
              </Typography>
            </li>
            <li style={{ marginBottom: '15px' }}>
              <Typography variant="body1">
                Cancellation of admission requires a proper reason. Our quality team will check the reason and, if valid, approve the cancellation. However, this must be done within 5 days of taking admission.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                In case of any refunds approved by KRISHNA ACADEMY, it will take 5 days for the refund to be processed.
              </Typography>
            </li>
          </ul>
        </Box>
      </Container>
    </div>
  );
};

export default RefundCancellation;
