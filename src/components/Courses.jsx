import React, { useState, useEffect } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import axios from 'axios';
import allcoursr from '../assets/all_course.webp';

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://crpch.in/api/ka/course_copy/',{
          headers: {
            'Content-Type': 'application/json'
          }
        });
        setCourses(response.data.table_data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="courses" style={{ padding: '20px' }}>
      <div
  style={{
    position: 'relative', // To contain the text and the mask inside the div
    height: '200px',      // Adjust height as needed
    width: '100%',        // Make it full width or adjust as needed
    borderRadius: '8px',  // Rounded corners
    overflow: 'hidden',   // Ensure the mask and image stay within the div
  }}
>
  {/* Background Image */}
  <div
    style={{
      backgroundImage: `url(${allcoursr})`, // Correct path to your image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100%',   // Full height of the parent div
      width: '100%',    // Full width of the parent div
      position: 'absolute', // Positioned absolutely to cover the div
      top: 0,
      left: 0,
      zIndex: 1,        // Ensure the image is at the back
    }}
  />

  {/* Black Mask (Overlay) */}
  <div
    style={{
      background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
      height: '100%',
      width: '100%',
      position: 'absolute', // Positioned absolutely over the image
      top: 0,
      left: 0,
      zIndex: 2,            // Positioned above the image, but below the text
    }}
  />

  {/* Text Heading */}
  <Typography
    variant="h2"
    sx={{
      fontSize: {
        xs: '1.5rem',  // Small devices
        sm: '2rem',    // Tablets
        md: '2.5rem',  // Laptops
        lg: '3rem',    // Larger screens
      },
      color: '#fff',         // White text to contrast against the black mask
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Optional: adds a shadow for depth
      position: 'relative',  // Relative to the container
      zIndex: 3,             // Ensure the text is above the image and the mask
      display: 'flex',
      justifyContent: 'center', // Center the text horizontally
      alignItems: 'center',     // Center the text vertically
      height: '100%',           // Full height of the div
    }}
  >
    All Courses
  </Typography>
</div>


      <Grid
        container
        spacing={3}
        sx={{
          padding: {
            xs: '10px',  // Padding for extra small devices (phones)
            sm: '15px',  // Padding for small devices (tablets)
            md: '20px',  // Padding for medium devices (laptops)
            lg: '30px',  // Padding for large devices (desktops)
          },
        }}
      >
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
            <Card
              sx={{
                maxWidth: '100%',
                height: '100%', // Full height
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '16px', // Rounded corners
                boxShadow: '0 8px 16px rgba(0,0,0,0.1)', // Custom shadow
                transition: 'transform 0.2s', // Animation for hover
                '&:hover': {
                  transform: 'scale(1.05)', // Slightly enlarge on hover
                },
              }}
            >
              {/* Course Image */}
              {course.COURSE_image ? (
                <CardMedia
                  component="img"
                  height="150"
                  image={`https://crpch.in${course.COURSE_image}`} // Image URL from the API
                  alt={course.COURSE_name}
                  sx={{ borderRadius: '16px 16px 0 0' }} // Rounded top corners for the image
                />
              ) : (
                <CardMedia
                  component="img"
                  height="150"
                  image="/path/to/placeholder.jpg" // Use a placeholder image if the course has no image
                  alt="Placeholder Image"
                  sx={{ borderRadius: '16px 16px 0 0' }} // Rounded top corners for the placeholder image
                />
              )}

              {/* Course Details */}
              <CardContent
                sx={{
                  flexGrow: 1, // Allows content to grow to fill the available space
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontSize: {
                      xs: '1.2rem',
                      sm: '1.4rem',
                      md: '1.5rem',
                    },
                  }}
                >
                  {course.COURSE_name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: {
                      xs: '0.85rem',
                      sm: '0.9rem',
                      md: '1rem',
                    },
                    marginBottom: '10px',
                  }}
                >
                  {course.COURSE_description
                    ? course.COURSE_description
                    : 'No description available.'}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{
                    fontSize: {
                      xs: '0.9rem',
                      sm: '1rem',
                      md: '1.1rem',
                    },
                  }}
                >
                  Fee: ₹{course.COURSE_fee}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{
                    fontSize: {
                      xs: '0.9rem',
                      sm: '1rem',
                      md: '1.1rem',
                    },
                  }}
                >
                  Duration: {course.COURSE_duration ? `${course.COURSE_duration} Months` : 'N/A'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Courses;
