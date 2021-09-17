import React from 'react'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { green } from '@material-ui/core/colors';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';


function TotalCustomers() {

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
    <div>
       <Card>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            TOTAL USERS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            {users.length}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: green[600],
              height: 56,
              width: 56
            }}
          >
            <PeopleIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box 
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        <ArrowUpwardIcon sx={{ color: green[900] }} />
        <Typography
          variant="body2"
          sx={{
            color: green[900],
            mr: 1
          }}
        >
          16%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since last month
        </Typography>
      </Box>
    </CardContent>
  </Card>
    </div>
  )
}

export default TotalCustomers


// import {
//   Avatar,
//   Box,
//   Card,
//   CardContent,
//   Grid,
//   Typography
// } from '@material-ui/core';
// import { useState, useEffect } from 'react';
// import { green } from '@material-ui/core/colors';
// import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
// import PeopleIcon from '@material-ui/icons/PeopleOutlined';


// const [users, setUsers] = useState()

// const getAllUsers = async() => {
//   await axios.get(`https://majestic-express-server.herokuapp.com/users`)
//   .then((response) => {
//     setUsers(response.data)
//     console.log(users)
//   })
// } 

// useEffect(() => {
//   getAllUsers();
// }, []);

// const TotalCustomers = (props) => (


//   <Card {...props}>
//     <CardContent>
//       <Grid
//         container
//         spacing={3}
//         sx={{ justifyContent: 'space-between' }}
//       >
//         <Grid item>
//           <Typography
//             color="textSecondary"
//             gutterBottom
//             variant="h6"
//           >
//             TOTAL CUSTOMERS
//           </Typography>
//           <Typography
//             color="textPrimary"
//             variant="h3"
//           >
//             1,600
//           </Typography>
//         </Grid>
//         <Grid item>
//           <Avatar
//             sx={{
//               backgroundColor: green[600],
//               height: 56,
//               width: 56
//             }}
//           >
//             <PeopleIcon />
//           </Avatar>
//         </Grid>
//       </Grid>
//       <Box 
//         sx={{
//           alignItems: 'center',
//           display: 'flex',
//           pt: 2
//         }}
//       >
//         <ArrowUpwardIcon sx={{ color: green[900] }} />
//         <Typography
//           variant="body2"
//           sx={{
//             color: green[900],
//             mr: 1
//           }}
//         >
//           16%
//         </Typography>
//         <Typography
//           color="textSecondary"
//           variant="caption"
//         >
//           Since last month
//         </Typography>
//       </Box>
//     </CardContent>
//   </Card>
// );

// export default TotalCustomers;
