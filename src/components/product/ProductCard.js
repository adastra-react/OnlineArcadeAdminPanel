import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
// import unAuthUsers from '../../components/product/UnauthenticatedUsers'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Button,
  CardMedia,
  Grid,
  Typography
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';
import { db } from '../../firebase';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 10,
    width: 400,
    paddingTop: '56.25%', // 16:9
    borderRadius: 20,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  // avatar: {
  //   backgroundColor: red[500],
  // },
}));
  
function ProductCard({ product, ...rest }) {
  const classes = useStyles();
  console.log(product)

  const handleDataUpload = async () => {
    const loggedUser = {
      name: product.name,
      email: product.email,
      pin_chain:product.pin_chain,
      pin: product.pin,
      phone: product.phone,
      image_url: product.image_url,
      address: product.address,
      igc: product.igc,
      online_status: product.online_status,
    };

    await axios
      .post(`https://majestic-express-server.herokuapp.com/api/auth/acceptuser`, loggedUser)
      // .post(`http://localhost:5000/api/auth/acceptuser`, loggedUser)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.error));
  }

  const deleteUser = async () => {
    await axios
    // .post(`http://localhost:5000/api/auth/deletenewuser/${product._id}`)
    .post(`https://majestic-express-server.herokuapp.com/api/auth//deletenewuser/${product._id}`)
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error.data)
    })
  }

  return (
    <div>

      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
        {...rest}
      >
        <CardContent>
          {/* <unAuthUsers /> */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pb: 3
            }}
          >
            {/* <Avatar
          alt="Product"
          src={product.imageUrl}
          variant="square"
        /> */}
            <CardMedia
              className={classes.media}
              image={product.imageUrl}
              title="Paella dish"
            />
          </Box>
          <Typography
            align="center"
            color="textPrimary"
            gutterBottom
            variant="h4"
          >
            {product.name}
          </Typography>
          <Typography
            align="center"
            color="textPrimary"
            variant="body1"
          >
            <strong>Address:</strong>
            {' '}
            {product.address}
          </Typography>

          <Typography
            align="center"
            color="textPrimary"
            variant="body1"
          >
            <strong>Email:</strong>
            {' '}
            {product.email}
          </Typography>

          <Typography
            align="center"
            color="textPrimary"
            variant="body1"
          >
            <strong>Phone:</strong>
            {' '}
            {product.phone}
          </Typography>
        </CardContent>
        <Box sx={{ flexGrow: 1 }} />
        <Divider />
        <Box sx={{ p: 2 }}>
          <Grid
            container
            spacing={2}
            sx={{ justifyContent: 'space-between' }}
          >
            <Grid
              item
              sx={{
                alignItems: 'center',
                display: 'flex'
              }}
            >
              {/* <AccessTimeIcon color="action" /> */}
              <Typography
                color="textSecondary"
                display="inline"
                sx={{ pl: 1 }}
                variant="body2"
              >
                <Button onClick={handleDataUpload} variant="contained" color="primary">
                  ACCEPT USER
                </Button>
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                alignItems: 'center',
                display: 'flex'
              }}
            >
              {/* <GetAppIcon color="action" /> */}
              <Typography
                color="textSecondary"
                display="inline"
                sx={{ pl: 1 }}
                variant="body2"
              >
                {/* {product.totalDownloads} */}
                {' '}
                {/* Downloads */}
                <Button onClick={deleteUser} variant="contained" color="secondary">
                  DECLINE USER
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </div>
  );
}

export default ProductCard;
