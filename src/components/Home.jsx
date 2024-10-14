import React, { useState , useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Container, Grid, TextField, MenuItem,
    Select,
    InputLabel,
    FormControl, } from '@mui/material';
import { Card, CardContent, CardMedia } from '@mui/material';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import './Home.css'; // Import custom CSS for additional styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import banner1 from '../assets/banner1.webp';
import banner2 from '../assets/banner2.webp';
import banner3 from '../assets/Slider3.webp';
import banner4 from '../assets/Slider4.webp';
import banner5 from '../assets/Slider2.webp';
import banner from '../assets/banner.webp';
import app from '../assets/app.webp';
import ascii from '../assets/ascii.webp';
import prof from '../assets/100.webp';
import { motion } from "framer-motion";

import { FaHome, FaUserGraduate, FaSmile } from 'react-icons/fa'; // Import icons
import CountUp from 'react-countup'; // CountUp for the number animation
import { useInView } from 'react-intersection-observer'; // Intersection observer to trigger animation

import img1 from '../assets/IMG1.jpeg';
import img2 from '../assets/IMG2.jpeg';
import img3 from '../assets/IMG3.jpeg';
import img4 from '../assets/IMG4.jpeg';
import img5 from '../assets/IMG5.jpeg';

import team1 from '../assets/team1.jpeg';
import team2 from '../assets/team2.jpeg';
import team3 from '../assets/team3.jpeg';

const environmentSlides = [
    { img: img1, caption: '' },
    { img: img2, caption: '' },
    { img: img3, caption: '' },
    { img: img4, caption: '' },
    { img: img5, caption: '' }

  ];

const cardData = [
    {
      image: prof,
      title: '100% Job Assistance',
      description: 'After complete the training our board provied the 100% job assistant portal.',
    },
    {
      image: app,
      title: 'Self App & Webpage',
      description: 'Our institute has self website and Student portal option on our website.',
    },
    {
      image: ascii,
      title: 'All India Accepted Certificate',
      description: 'The certificates issued by our organization are accepted in both government and private sector employment opportunities.',
    }
  ];

const slides = [
  { img: banner1, caption: 'Welcome to Our Academy!' },
  { img: banner2, caption: 'Learn with the Best!' },
  { img: banner3, caption: 'Get Certified!' },
  { img: banner4, caption: 'Boost Your Career!' },
  { img: banner5, caption: 'Join Us Today!' },
];

const keyFeaturesData = [
    {
      title: "100% Job Assistance",
      description: "After Complete The Training, Our Board Provied The 100% JOB Assistant Portal.",
    },
    {
      title: "Online Exam System",
      description: "Our students have opportunity to take both online test exam and final exam at the end of the course.",
    },
    {
      title: "Digital Class",
      description: "Our Training Are Digital Class, Presentation Class And We provide the best digital training.",
    },
    {
      title: "Student Login Id & Password",
      description: "All registered students will receive their own individual 10 and password to access the Android app and website.",
    },
    {
      title: "Self App & Webpage",
      description: "Our Institute Has Self Website Student Protel And Option On Our Website.",
    },
    {
      title: "All India Accepted Certificate",
      description: "The certificates issued by our organization are accepted in both government and private sector employment opportunities",
    },
  ];

  const teamMembers = [
    {
      name: 'Brojo Kishore Mondal',
      designation: 'Managing Director',
      image: team1, // Replace with actual image path
    },
    {
      name: 'Ankita Chakraborty',
      designation: 'Assistant Teacher',
      image: team2, // Replace with actual image path
    },
    {
      name: 'Avismita Dey',
      designation: 'Branch Manager',
      image: team3, // Replace with actual image path
    },
  ];

function Home() {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { ref, inView } = useInView({
    triggerOnce: true,  // The animation should happen only once when in view
    threshold: 0.3,     // Trigger when 30% of the element is visible
  });

  const environmentSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // For tablet and smaller screens
        settings: {
          slidesToShow: 1, // Show 1 slide on smaller screens
        },
      },
      {
        breakpoint: 1024, // For desktop
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
        },
      },
    ],
  };

  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');

  useEffect(() => {
    // Fetch courses from the API
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`https://crpch.in/api/ka/course_copy/`);
        setCourses(response.data.table_data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleViewStaff = () => {
    navigate('/staff');
  };


  return (
    <>
      {/* Slider Section */}
      <Box sx={{ width: '100%', overflow: 'hidden' }} className="container-fluid">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} style={{ position: 'relative', width: '100%', height: '100%' }}>
              <img src={slide.img} alt={`Slide ${index + 1}`} className="slider-image" />
              <Typography variant="h4" sx={{ position: 'absolute', bottom: '20%', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px' }}>
                {slide.caption}
              </Typography>
            </div>
          ))}
        </Slider>
      </Box>

      {/* Cards Section */}
      <Box className="container mt-5">
        <Typography variant="h4" align="center" className="mb-4">
          We Help You To Make Your Career Exciting
        </Typography>
        <div className="row">
          {cardData.map((card, index) => (
            <div key={index} className="col-sm-12 col-md-4 mb-4">
              <Card className="custom-card" sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={card.image}
                  alt={card.title}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </Box>

      {/* Stats Section */}
      <Box className="stats-section" ref={ref}> {/* Attach ref to the section */}
        <div className="container mt-5">
          <Typography variant="h4" align="center" className="mb-4">
            Our Academy Achievements
          </Typography>
          <div className="row">
            <div className="col-md-4 col-sm-12 stat-item">
              <FaHome size={40} className="stat-icon" />
              {inView && (
                <Typography variant="h3" className="stat-number">
                  <CountUp start={0} end={11576} duration={2.5} /> {/* Number animation */}
                </Typography>
              )}
              <Typography variant="body1">Total Students</Typography>
            </div>
            <div className="col-md-4 col-sm-12 stat-item">
              <FaUserGraduate size={40} className="stat-icon" />
              {inView && (
                <Typography variant="h3" className="stat-number">
                  <CountUp start={0} end={3659} duration={2.5} /> {/* Number animation */}
                </Typography>
              )}
              <Typography variant="body1">Certified Students</Typography>
            </div>
            <div className="col-md-4 col-sm-12 stat-item">
              <FaSmile size={40} className="stat-icon" />
              {inView && (
                <Typography variant="h3" className="stat-number">
                  <CountUp start={0} end={7877} duration={2.5} /> {/* Number animation */}
                </Typography>
              )}
              <Typography variant="body1">Registered Students</Typography>
            </div>
          </div>
        </div>
      </Box>

      <Box className="about-section container-fluid" ref={ref}>
  {/* Video Section */}
  <Box className={`video-wrapper ${inView ? 'animate-fade-in' : ''}`} mb={4}>
    <iframe
      width="100%"
      height="415"
      src="https://www.youtube.com/embed/AuWc1JoHT1g?si=PBuruTFfy9MZxlAA"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </Box>

  <Box className={`text-wrapper ${inView ? 'animate-slide-up' : ''}`} mt={4}>
    <Typography variant="h4" className="text-center mb-3">
      Who We Are
    </Typography>

    {/* Flexbox container to align text and bullet points horizontally */}
    <Box
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }} // Stack on small screens, align horizontally on larger
      justifyContent="space-around" // Add space between the two sections
      alignItems="flex-start" // Align items at the start
      px={{ xs: 2, md: 4 }} // Add padding on the x-axis
    >
      {/* Text Section */}
      <Box flex={1} pr={{ md: 2 }}> {/* Add padding to the right on medium and larger screens */}
        <Typography variant="body1" paragraph>
        Krishna Academy For Professional training institute provides high quality Job Oriented course at a very high standard infrastructure and faculty with 100% job assurance. KRISHNA ACADEMY For Professional training institute mission is to build student Personality Development who will meet the demanding needs of multinational organizations for tomorrow’s challenges. We also provide interview traning , Computer training, Management course which is very essential to next Generation. Labs are managed such a way that students feel comfortable while learning. We offer Job placements assistance to our students after the completion of the courses. We build our students with good skill so that We can assist the companies in recruitment our students in their companies. With our job assistance we have placed many students in good companies. We maintain best standards of training to ensure quality in subject.
        </Typography>

      </Box>

      {/* Bullet Points Section */}
      <Box flex={1} pl={{ md: 2 }}>
  <Box className="bullet-points" sx={{ listStyleType: 'none', padding: 0 }}>
    <Box display="flex" flexDirection="column" gap={2}>
      {[
        "Building a Brighter Future Through Education and Empowerment",
        "Committed to Excellence in Teaching and Learning",
        "Where Passion for Knowledge Meets Purposeful Action",
        "A Community Dedicated to Nurturing Minds and Shaping Futures",
        "Your Trusted Partner in Lifelong Learning and Development",
        "Inspiring Success Through Quality Education and Innovation."
      ].map((item, index) => (
        <Box key={index} display="flex" alignItems="center">
          <Box
            component="span"
            sx={{
              width: 24,
              height: 24,
              borderRadius: '50%',
              backgroundColor: 'primary.main', // Change color as needed
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2,
            }}
          >
            <Typography variant="caption" sx={{ color: 'white' }}>
              {index + 1}
            </Typography>
          </Box>
          <Typography variant="body1">{item}</Typography>
        </Box>
      ))}
    </Box>
  </Box>
</Box>

    </Box>
  </Box>
</Box>

<Box
      className="call-action overlay"
      sx={{
        background: 'linear-gradient(135deg, #007bff, #00c6ff)', // Set the linear gradient background
        padding: '60px 0',
        color: 'white',
      }}
    >
      <Container>
        <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
          <Typography variant="h4" gutterBottom>
            Do you need Guidance? When You Need It Most. Call @ +91 79805 91782
          </Typography>

          <Box>
            <Button variant="contained" color="primary" href="#" sx={{ mr: 2 }}>
              Contact Now
            </Button>
            <Button
              variant="outlined"
              color="inherit" // Use 'inherit' to keep the text color white
              href="https://wa.me/+917980591782"
              endIcon={<i className="fa fa-long-arrow-right" />}
            >
              Inquire Now
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>

    <Container sx={{ my: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Take a Tour of Our Environment
        </Typography>
        <Slider {...environmentSettings}>
          {environmentSlides.map((slide, index) => (
            <Box key={index} sx={{ padding: 1 }}>
              <img
                src={slide.img}
                alt={slide.alt}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px", // Add rounded corners
                }}
              />
            </Box>
          ))}
        </Slider>
      </Container>

      <Container
  sx={{
    my: 5,
    background: "linear-gradient(135deg, #007bff, #00c6ff)",
    padding: "40px 20px",
    borderRadius: "8px",
  }}
  className="fade-in"
>
  <Typography variant="h4" align="center" color="white" gutterBottom>
    Key Features
  </Typography>
  <Grid container spacing={2} justifyContent="center">
    {keyFeaturesData.map((feature, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Card
          sx={{
            display: 'flex', // Flexbox for uniform height
            flexDirection: 'column', // Stack content vertically
            height: '150px', // Set a fixed height for the card
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
          className="feature-card"
        >
          <CardContent sx={{ flexGrow: 1 }}> {/* Allow content to grow */}
            <Typography variant="h6" color="primary" gutterBottom>
              {feature.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {feature.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</Container>

{/* <Container sx={{ my: 5 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{mb: 5}}>
        One Team, One Dream
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image={member.image}
                  alt={member.name}
                />
                <CardContent>
                  <Typography variant="h6" align="center">
                    {member.name}
                  </Typography>
                  <Typography variant="body2" align="center" color="text.secondary">
                    {member.designation}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container> */}

        <div style={{display:"flex", justifyContent:"center"}}>
          <Button variant="contained" color="secondary" sx={{ mt: 5 }} onClick={handleViewStaff}>
            View Our Staff
          </Button>
        </div>
       
    <section>
      <Container sx={{ my: 5 }}>
        <Box
          sx={{
            background: 'linear-gradient(to right, #ffffff, #007bff)', // Gradient from white to blue
            padding: 3,
            borderRadius: 2,
            width: '100%',
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                Book A Demo Class
              </Typography>
            </Grid>
          </Grid>

          
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} sx={{ mt: 5 }}>
              <form id="myForm" action="#" >
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Name"
                      name="name"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="email"
                      placeholder="Email"
                      name="email"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Phone"
                      name="mobileno"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
              <InputLabel id="course-label">Course</InputLabel>
              <Select labelId="course-label" id="course" value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)} required>
                {courses.map((course) => (
                  <MenuItem key={course.id} value={course.id}>
                    {course.COURSE_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Write Your Message Here....."
                      name="message"
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <Button variant="contained" color="primary" type="submit" fullWidth>
                      Book A Demo Class
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <Typography variant="body2" align="left">
                      ( We will confirm by an email )
                    </Typography>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={banner} // Update with the correct path
                alt="Appointment"
                sx={{ width: '100%', height: 'auto', mt: 5 }}
              />
            </Grid>
          </Grid>
        </Box>

        
      </Container>
    </section>
    </>
  );
}

export default Home;
