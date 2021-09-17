import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from "axios";
import { Box, Container, Grid, Pagination } from '@material-ui/core';
import CustomerListResults from 'src/components/customer/CustomerListResults';
import CustomerListToolbar from 'src/components/customer/CustomerListToolbar';
import customers from 'src/__mocks__/customers';
import { db } from '../firebase';
import { User } from 'react-feather';

function CustomerList() {
  const [users, setUsers] = useState([]);

  const getAllUsers = async() => {
    await axios.get(`https://majestic-express-server.herokuapp.com/users`)
    .then((response) => {
      setUsers(response.data)
      console.log(users)
    })
  } 

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <> 
     <div>
      <Helmet>
        <title>Products | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          {/* <ProductListToolbar /> */}
          <Box sx={{ pt: 3 }}>
            <Grid
              container
              spacing={3}
            >
              {users.map((user) => (
                <Grid
                  item
                  key={user._id}
                  lg={4}
                  md={6}
                  xs={12}
                >
                  <CustomerListResults user={user} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pt: 3
            }}
          >
            <Pagination
              color="primary"
              count={3}
              size="small"
            />
          </Box>
        </Container>
      </Box>
    </div>
    
      {/* <Helmet>
        <title>Customers | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <CustomerListToolbar />
          <Box sx={{ pt: 3 }}>
            <CustomerListResults users={users} />
          </Box>
        </Container>
      </Box> */}
    </>
  );
}

export default CustomerList;
