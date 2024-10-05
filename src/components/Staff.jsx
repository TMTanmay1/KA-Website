import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardMedia, CardContent, Typography, Grid, Container } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

function Staff() {
  const [staffData, setStaffData] = useState([]);

  // Fetch staff data from API
  useEffect(() => {
    axios.get('https://crpch.in/api/ka/staff_copy/')
      .then(response => {
        if (response.data.status) {
          setStaffData(response.data.table_data);
        }
      })
      .catch(error => {
        console.error('Error fetching staff data:', error);
      });
  }, []);

  console.log(staffData);

  return (
    <Container>
      {/* Heading and description */}
      <Typography variant="h3" className="text-center mt-4 mb-3">
        Meet Our Coaching Staff
      </Typography>
      <Typography variant="body1" className="text-center mb-4">
        We are proud to introduce our talented and dedicated coaching staff. They are here to help
        you achieve your goals and provide the best guidance possible.
      </Typography>

      {/* Staff cards */}
      <Grid container spacing={4}>
        {staffData.map((staff) => (
          <Grid item xs={12} sm={6} md={4} key={staff.id}>
            <Card className="h-100">
              {/* Staff Image */}
              <CardMedia
                component="img"
                height="200"
                image={`https://crpch.in${staff.staff_image}`}
                alt={staff.staff_name}
              />
              {/* Staff Info */}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {staff.staff_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email: {staff.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mobile: {staff.mobile_no}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Staff;
