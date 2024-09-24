import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Menu, MenuItem, IconButton, Button, Drawer, List, ListItem, ListItemText, Collapse,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/ka.webp';
import './Header.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [anchorElCenter, setAnchorElCenter] = useState(null);
  const [anchorElStudent, setAnchorElStudent] = useState(null);
  const [anchorElAcademy, setAnchorElAcademy] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [centerLoginOpen, setCenterLoginOpen] = useState(false);
  const [studentMenuOpen, setStudentMenuOpen] = useState(false);
  const [academyMenuOpen, setAcademyMenuOpen] = useState(false);

  const handleMenuOpen = (setAnchorFn) => (event) => {
    setAnchorFn(event.currentTarget);
  };

  const handleMenuClose = (setAnchorFn, action) => () => {
    setAnchorFn(null);
    if (action) action(); // Call action if provided
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const toggleSubmenu = (setSubmenuOpen) => () => {
    setSubmenuOpen((prevState) => !prevState);
  };

  const handleCoursesClick = () => {
    navigate('/courses');
    toggleDrawer(false)();
  };

  const handleRegistrationClick = () => {
    navigate('/student-registration');
    toggleDrawer(false)();
  };

  const handleHomeClick = () => {
    navigate('/');
    toggleDrawer(false)();
  };

  const handleAdminLoginClick = () => {
    window.open('https://krishna-academy.vercel.app/', '_blank');
  };

  const handleStudentLoginClick = () => {
    window.open('https://ka-student-dashboard.vercel.app/', '_blank');
  };

  const handleCBMCEClick = () => {
    window.open('https://cbmceindia.com/student/verification/', '_blank');
  };

  const handleCBVSDClick = () => {
    window.open('https://cbvsdindia.com/student/verification/', '_blank');
  };

  const styles = {
    logo: {
      marginRight: 'auto',
      display: 'flex',
      alignItems: 'center',
    },
    menuButton: {
      position: 'relative',
      color: 'black',
      textTransform: 'none',
      fontWeight: 500,
      marginLeft: '20px',
      display: 'flex',
      alignItems: 'center',
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 20px',
    },
    arrowIcon: {
      marginLeft: '5px',
    },
    list: {
      width: 250,
    },
    nested: {
      paddingLeft: '30px',
    },
  };

  const renderDrawer = () => (
    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
      <div style={styles.list} role="presentation">
        <List>
          <ListItem button onClick={handleHomeClick}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={handleRegistrationClick}>
            <ListItemText primary="Registration" />
          </ListItem>
          <ListItem button onClick={handleCoursesClick}>
            <ListItemText primary="Our Courses" />
          </ListItem>
          <ListItem button onClick={toggleSubmenu(setCenterLoginOpen)}>
            <ListItemText primary="Center Login" />
            {centerLoginOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={centerLoginOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button style={styles.nested} onClick={toggleDrawer(false)}>
                <ListItemText primary="Staff Login" />
              </ListItem>
              <ListItem button style={styles.nested} onClick={() => { handleAdminLoginClick(); toggleDrawer(false)(); }}>
                <ListItemText primary="Admin Login" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={toggleSubmenu(setStudentMenuOpen)}>
            <ListItemText primary="Student" />
            {studentMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={studentMenuOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button style={styles.nested} onClick={() => { handleStudentLoginClick(); toggleDrawer(false)(); }}>
                <ListItemText primary="Student Login" />
              </ListItem>
              <ListItem button style={styles.nested} onClick={() => { handleCBMCEClick(); toggleDrawer(false)(); }}>
                <ListItemText primary="CBMCE" />
              </ListItem>
              <ListItem button style={styles.nested} onClick={() => { handleCBVSDClick(); toggleDrawer(false)(); }}>
                <ListItemText primary="CBVSD" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={toggleSubmenu(setAcademyMenuOpen)}>
            <ListItemText primary="Academy" />
            {academyMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={academyMenuOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button style={styles.nested} onClick={toggleDrawer(false)}>
                <ListItemText primary="About Us" />
              </ListItem>
              <ListItem button style={styles.nested} onClick={toggleDrawer(false)}>
                <ListItemText primary="Contact Us" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
    </Drawer>
  );

  return (
    <AppBar position="static" color="default">
      <Toolbar style={styles.toolbar}>
        <div style={styles.logo}>
          <img src={Logo} alt="Logo" height="50" />
          <Typography variant="h6" component="div" style={{ marginLeft: '10px', color: 'blue' }}>
            KRISHNA ACADEMY
          </Typography>
        </div>

        <div className="d-none d-md-flex">
          <Button className="menuButton" onClick={handleHomeClick}>Home</Button>
          <Button className="menuButton" onClick={handleRegistrationClick}>Registration</Button>
          <Button className="menuButton" onClick={handleCoursesClick}>Our Courses</Button>
          <Button className="menuButton" onClick={handleMenuOpen(setAnchorElCenter)}>
            Center Login
            <ExpandMoreIcon style={styles.arrowIcon} />
          </Button>
          <Menu
            anchorEl={anchorElCenter}
            open={Boolean(anchorElCenter)}
            onClose={handleMenuClose(setAnchorElCenter)}
          >
            <MenuItem onClick={handleMenuClose(setAnchorElCenter)}>Staff Login</MenuItem>
            <MenuItem onClick={() => { handleAdminLoginClick(); handleMenuClose(setAnchorElCenter)(); }}>
              Admin Login
            </MenuItem>
          </Menu>
          <Button className="menuButton" onClick={handleMenuOpen(setAnchorElStudent)}>
            Student
            <ExpandMoreIcon style={styles.arrowIcon} />
          </Button>
          <Menu
            anchorEl={anchorElStudent}
            open={Boolean(anchorElStudent)}
            onClose={handleMenuClose(setAnchorElStudent)}
          >
            <MenuItem onClick={() => { handleStudentLoginClick(); handleMenuClose(setAnchorElCenter)(); }}>Student Login</MenuItem>
            <MenuItem onClick={() => { handleCBMCEClick(); handleMenuClose(setAnchorElCenter)(); }}>CBMCE</MenuItem>
            <MenuItem onClick={() => { handleCBVSDClick(); handleMenuClose(setAnchorElCenter)(); }}>CBVSD</MenuItem>
          </Menu>
          <Button className="menuButton" onClick={handleMenuOpen(setAnchorElAcademy)}>
            Academy
            <ExpandMoreIcon style={styles.arrowIcon} />
          </Button>
          <Menu
            anchorEl={anchorElAcademy}
            open={Boolean(anchorElAcademy)}
            onClose={handleMenuClose(setAnchorElAcademy)}
          >
            <MenuItem onClick={handleMenuClose(setAnchorElAcademy)}>About Us</MenuItem>
            <MenuItem onClick={handleMenuClose(setAnchorElAcademy)}>Contact Us</MenuItem>
          </Menu>
        </div>

        <IconButton className="d-md-none" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {renderDrawer()}
    </AppBar>
  );
}

export default Header;
