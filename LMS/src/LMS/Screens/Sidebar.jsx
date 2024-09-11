import React, { useState } from 'react';
import { IoPersonRemove } from "react-icons/io5";
import { RiMenuUnfold2Fill, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { FaUserPlus, FaChalkboardTeacher, FaBook, FaMoneyBill, FaFileInvoice, FaCalendarAlt, FaGrav } from "react-icons/fa";
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../../Firebase/firebaseConfig'; // Ensure the path is correct

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    console.log('Sidebar toggled');
    setIsOpen(!isOpen);
  };
  

  const toggleSubOptions = (link) => {
    setActiveLink(activeLink === link ? null : link);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      signOut(auth)
        .then(() => {
          console.log('User logged out');
          navigate('/login');
        })
        .catch((error) => {
          console.error('Error logging out:', error);
        });
    }
  };

  const sidebarLinks = [
    { 
      name: 'Students', 
      route: '/students',
      icon: <FaUserPlus />,
      subOptions: [
        { name: 'Student Registration', route: '/students/registration' },
        { name: 'Student List', route: '/students/list' }
      ]
    },
    { 
      name: 'Teachers', 
      route: '/teachers',
      icon: <FaChalkboardTeacher />,
      subOptions: [
        { name: 'Teacher Registration', route: '/teachers/registration' },
        { name: 'Teacher List', route: '/teachers/list' }
      ]
    },
    { 
      name: 'Subjects', 
      route: '/subjects',
      icon: <FaBook />,
      subOptions: [
        { name: 'Subject Add', route: '/subjects/add' },
        { name: 'Subject List', route: '/subjects/list' }
      ]
    },
    { 
      name: 'Fee Submission', 
      route: '/fee-submission',
      icon: <FaMoneyBill />,
      subOptions: [
        { name: 'Fee Structure', route: '/fee-structure' },
        { name: 'Fee Submission', route: '/fee-submission' }
      ]
    },
    { 
      name: 'Admission', 
      route: '/admission',
      icon: <FaFileInvoice />,
      subOptions: [{ name: 'Admission Form', route: '/admission/form' }] 
    },
    { 
      name: 'Exams', 
      route: '/exams',
      icon: <FaCalendarAlt />,
      subOptions: [{ name: 'Exam Schedule', route: '/exams/schedule' }] 
    },
    { 
      name: 'Results', 
      route: '/results',
      icon: <FaGrav />,
      subOptions: [
        { name: 'Result Schedule', route: '/result-schedule' },
        { name: 'Result', route: '/results' }
      ]
    }
  ];

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: '#003366', 
          color: '#fff', 
          zIndex: 1201 // Ensure it's above the sidebar
        }}
      >
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar}>
            <RiMenuUnfold2Fill />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Learning Management System
          </Typography>
          <IconButton color="inherit" onClick={handleLogout}>
            <IoPersonRemove />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="persistent"
        anchor="left"
        open={isOpen}
        sx={{ 
          width: 240, 
          flexShrink: 0, 
          '& .MuiDrawer-paper': { 
            width: 240, 
            boxSizing: 'border-box',
            backgroundColor: '#e3f2fd', // Light blue background
            zIndex: 1200 // Ensure it's below the AppBar
          } 
        }}
      >
        <List>
          {sidebarLinks.map((linkItem) => (
            <div key={linkItem.route}>
              <ListItem 
                button 
                onClick={() => toggleSubOptions(linkItem.route)}
                sx={{ 
                  backgroundColor: activeLink === linkItem.route ? '#b3e5fc' : 'inherit', // Light blue when active
                  '&:hover': {
                    backgroundColor: '#81d4fa', // Slightly darker on hover
                  }
                }}
              >
                <ListItemIcon>{linkItem.icon}</ListItemIcon>
                <ListItemText primary={linkItem.name} />
                {activeLink === linkItem.route ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
              </ListItem>
              {activeLink === linkItem.route && (
                <List component="div" disablePadding>
                  {linkItem.subOptions.map((subOption) => (
                    <ListItem 
                      button 
                      component={NavLink} 
                      to={subOption.route} 
                      key={subOption.route}
                      sx={{ pl: 4, color: '#0288d1', '&:hover': { color: '#01579b' } }} // Darker blue on hover
                    >
                      <ListItemText primary={subOption.name} />
                    </ListItem>
                  ))}
                </List>
              )}
              <Divider />
            </div>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
