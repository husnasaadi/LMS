import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/firebaseConfig';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      const teachersCollection = collection(db, 'teachers');
      const teacherSnapshot = await getDocs(teachersCollection);
      const teacherList = teacherSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTeachers(teacherList);
    };

    fetchTeachers();
  }, []);

  return (
    <Box
      sx={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f4f6f8',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ marginBottom: '20px', color: '#333' }}
      >
        Teacher List
      </Typography>

      <TableContainer component={Paper} sx={{ maxWidth: '900px', width: '100%', borderRadius: '10px', boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold', backgroundColor: '#e8eaf6' }}>ID</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold', backgroundColor: '#e8eaf6' }}>Name</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold', backgroundColor: '#e8eaf6' }}>Email</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold', backgroundColor: '#e8eaf6' }}>Age</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold', backgroundColor: '#e8eaf6' }}>Subject</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold', backgroundColor: '#e8eaf6' }}>Department</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold', backgroundColor: '#e8eaf6' }}>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers.map((teacher) => (
              <TableRow key={teacher.id}>
                <TableCell sx={{ color: '#8E1DFF' }}>{teacher.id}</TableCell>
                <TableCell>{teacher.name}</TableCell>
                <TableCell>{teacher.email}</TableCell>
                <TableCell>{teacher.age}</TableCell>
                <TableCell>{teacher.subject}</TableCell>
                <TableCell>{teacher.department}</TableCell>
                <TableCell>{teacher.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TeacherList;
