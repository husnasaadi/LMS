import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './LMS/Screens/Login';
import Signup from './LMS/Screens/Signup';
import StudentRegistration from './LMS/Screens/StudentRegistration';
import Dashboard from './LMS/Screens/Dashboard';
import StudentList from './LMS/Screens/StudentList';
import TeacherRegistration from './LMS/Screens/TeacherRegistration';
import TeacherList from './LMS/Screens/TeacherList';
import SubjectAdd from './LMS/Screens/SubjectAdd';
import SubjectList from './LMS/Screens/SubjectList';
import ProtectedRoute from './LMS/Screens/ProtectedRoute';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from './LMS/Screens/Layout'; // Ensure this path is correct

const theme = createTheme({
  palette: {
    primary: {
      main: '#007BFF', // Blue
    },
    background: {
      default: '#f0f8ff', // Light blue
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {/* Routes without Sidebar */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/*" element={
            <Layout>
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path="/students/registration" element={<StudentRegistration />} />
                <Route path="/students/list" element={<StudentList />} />
                <Route path='/teachers/registration' element={<TeacherRegistration />} />
                <Route path='/teachers/list' element={<TeacherList />} />
                <Route path='/subjects/add' element={<SubjectAdd />} />
                <Route path='/subjects/list' element={<SubjectList />} />
                {/* Add other routes as needed */}
              </Routes>
            </Layout>
          } />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
