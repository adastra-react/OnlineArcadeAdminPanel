import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Pagination
} from '@material-ui/core';
import ProductListToolbar from 'src/components/product/ProductListToolbar';
import ProductCard from 'src/components/product//ProductCard';
import axios from 'axios';
import products from 'src/__mocks__/products';
import { db } from '../firebase';

function ProductList() {
  // const [unauthenticatedUsers, setUnauthenticatedUsers] = useState([]);
  const [newUsers, setNewUsers] = useState([]);

  //   const fetchUsers=async()=>{
  //     const response=db.collection('UnauthenticatedUsers');
  //     const data=await response.get();
  //     data.docs.forEach(item=>{
  //       setUnauthenticatedUsers([...unauthenticatedUsers,item.data()])
  //      })
  //   }

  // console.log(unauthenticatedUsers);

  const getAllNewUsers = async () => {
    await axios.get(`https://majestic-express-server.herokuapp.com/newusers`)
    // await axios.get(`http://localhost:5000/users`)
    .then((response) => {
    setNewUsers(response.data)
    console.log(newUsers);
    })
}

  useEffect(() => {
    getAllNewUsers();
  }, []);

  return (
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
          <ProductListToolbar />
          <Box sx={{ pt: 3 }}>
            <Grid
              container
              spacing={3}
            >
              {newUsers.map((product) => (
                <Grid
                  item
                  key={product._id}
                  lg={4}
                  md={6}
                  xs={12}
                >
                  <ProductCard product={product} />
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
  );
}

export default ProductList;

// import { Helmet } from 'react-helmet';
// import {
//   Box,
//   Container,
//   Grid,
//   Pagination
// } from '@material-ui/core';
// import ProductListToolbar from 'src/components/product/ProductListToolbar';
// import ProductCard from 'src/components/product//ProductCard';
// import products from 'src/__mocks__/products';

// const ProductList = () => (
//   <>
//
//   </>
// );

// export default ProductList;
