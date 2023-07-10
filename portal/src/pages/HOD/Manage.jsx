import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Container
} from '@mui/material';

const drawerWidth = 300;

export const Manage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const tokenObj = JSON.parse(localStorage.getItem('token'));
      const token = tokenObj.token;
      const response = await axios.get('https://final-backend-ten.vercel.app/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleStatus = (userId) => {
    const tokenObj = JSON.parse(localStorage.getItem('token'));
    const token = tokenObj.token;
    const user = users.find((user) => user._id === userId);
    const updatedStatus = user.status === 'Enable' ? 'Disable' : 'Enable';
  
    axios
      .put(`https://final-backend-ten.vercel.app/users/${userId}/toggleStatus`, { status: updatedStatus }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        const updatedUsers = users.map((user) =>
          user._id === userId ? { ...user, status: updatedStatus } : user
        );
        setUsers(updatedUsers);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  
  return (
    <>
      <Container
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          p: 5,
          mt: 15,
        }}
      >
        <TableContainer>
          <Table sx={{ border: '1px solid black' }}>
            <TableHead sx={{ backgroundColor: '#8DB3E2' }}>
              <TableRow>
                <TableCell sx={{ border: '1px solid black', fontWeight: 'bold' }}>ID</TableCell>
                <TableCell sx={{ border: '1px solid black', fontWeight: 'bold' }}>Name</TableCell>
                <TableCell sx={{ border: '1px solid black', fontWeight: 'bold' }}>Designation</TableCell>
                <TableCell sx={{ border: '1px solid black', fontWeight: 'bold' }}>Status</TableCell>
                <TableCell sx={{ border: '1px solid black', fontWeight: 'bold' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, index) => (
                <TableRow key={user._id}>
                  <TableCell sx={{ border: '1px solid black' }}>{index + 1}</TableCell>
                  <TableCell sx={{ border: '1px solid black' }}>{user.username}</TableCell>
                  <TableCell sx={{ border: '1px solid black' }}>{user.role}</TableCell>
                  <TableCell sx={{ border: '1px solid black' }}>{user.status}</TableCell>

                  <TableCell sx={{ border: '1px solid black' }}>
                    <Button
                      variant="contained"
                      color={user.status === 'Enable' ? 'primary' : 'secondary'}
                      onClick={() => handleToggleStatus(user._id)}
                    >
                      {user.status === 'Enable' ? 'Disable' : 'Enable'}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};
