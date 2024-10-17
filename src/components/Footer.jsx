import React from "react";
import { Container, Grid, Typography, Box, TextField, Button } from "@mui/material";
import { FaFacebookF, FaTwitter, FaPinterestP, FaGoogle, FaVimeoV } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const handleHomeClick = () => {
        navigate('/');
    };

    const handleRefundCancellationClick = () => {
        navigate('/refund-cancellation');
    };

    const handleTermsConditionsClick = () => {
        navigate('/terms-conditions');
    }

  return (
    <Box sx={{ backgroundColor: "#007bff", color: "#fff", padding: "40px 0", position: "relative" }}>
      <Container>
        <Grid container spacing={4}>
          {/* Reach Us Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h5" sx={{ marginBottom:2}}>Reach Us</Typography>
            <Typography>
              Brick Field Road, Vidyasagar Pally <br />
              Near Jorakol, Baruipur, <br />
              Kolkata 700144 <br />
              Phone: 7980591782 / (033) 2433 1782
            </Typography>
            <Box sx={{ display: "flex", gap: 1, marginTop: 2 , marginBottom:2}}>
              <a href="#" style={{ display: "inline-block", padding: "10px", border: "2px solid white", borderRadius: "50%", width: "40px", height: "40px", textAlign: "center", lineHeight: "18px" }}>
                <FaFacebookF style={{ color: "#fff", fontSize: "18px" }} />
              </a>
              <a href="#" style={{ display: "inline-block", padding: "10px", border: "2px solid white", borderRadius: "50%", width: "40px", height: "40px", textAlign: "center", lineHeight: "18px" }}>
                <FaGoogle style={{ color: "#fff", fontSize: "18px" }} />
              </a>
              <a href="#" style={{ display: "inline-block", padding: "10px", border: "2px solid white", borderRadius: "50%", width: "40px", height: "40px", textAlign: "center", lineHeight: "18px" }}>
                <FaTwitter style={{ color: "#fff", fontSize: "18px" }} />
              </a>
              <a href="#" style={{ display: "inline-block", padding: "10px", border: "2px solid white", borderRadius: "50%", width: "40px", height: "40px", textAlign: "center", lineHeight: "18px" }}>
                <FaVimeoV style={{ color: "#fff", fontSize: "18px" }} />
              </a>
              <a href="#" style={{ display: "inline-block", padding: "10px", border: "2px solid white", borderRadius: "50%", width: "40px", height: "40px", textAlign: "center", lineHeight: "18px" }}>
                <FaPinterestP style={{ color: "#fff", fontSize: "18px" }} />
              </a>
            </Box>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h5" sx={{ marginBottom:2}}>Quick Links</Typography>
            <ul className="list-unstyled">
              <li><a onClick={handleHomeClick} style={{ color: '#fff', textDecoration:'none', cursor:'pointer' }}>Home</a></li>
              <li><a href="#" style={{ color: '#fff' , textDecoration:'none', cursor:'pointer'}}>About Us</a></li>
              <li><a href="#" style={{ color: '#fff', textDecoration:'none', cursor:'pointer' }}>Contact Us</a></li>
              <li><a onClick={handleRefundCancellationClick} style={{ color: '#fff', textDecoration:'none', cursor:'pointer' }}>Refund & Cancellation</a></li>
              <li><a onClick={handleTermsConditionsClick} style={{ color: '#fff', textDecoration:'none', cursor:'pointer' }}>Terms & Conditions</a></li>
            </ul>
          </Grid>

          {/* Open Hours Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h5"sx={{ marginBottom:2}}>Open Hours</Typography>
            <Typography>Monday - Friday: 10:00am - 9:00pm</Typography>
          </Grid>

          {/* Newsletter Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h5" sx={{ marginBottom:2}}>Newsletter</Typography>
            <Typography>Subscribe to our newsletter</Typography>
            <Box
              component="form"
              action="mail/mail.php"
              method="get"
              target="_blank"
              sx={{ display: "flex", alignItems: "center", marginTop: 2 }}
            >
              <TextField
                type="email"
                name="email"
                placeholder="Email Address"
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "4px",
                  marginRight: 1,
                  flexGrow: 1,
                }}
              />
              <Button variant="contained" color="primary" sx={{ padding: "10px 20px" }}>
                <i className="icofont-paper-plane"> Submit</i>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/+917980591782" target="_blank" rel="noopener noreferrer" style={{
    position: "fixed",
    width: "60px",
    height: "60px",
    bottom: "40px",
    right: "40px",
    backgroundColor: "#25D366",
    color: "#fff",
    borderRadius: "50%",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
    zIndex: 1000,
  }}>
  <WhatsAppIcon style={{ color: "#fff", fontSize: "36px" }} />
</a>

      {/* Copyright Section */}
      <Box sx={{
        backgroundColor: "#0069d5", 
        padding: "10px 0", 
        textAlign: "center", 
        position: "absolute", 
        bottom: 0, 
        width: "100%"
      }}>
        <Typography variant="body2">© Copyright 2024 | All Rights Reserved</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
