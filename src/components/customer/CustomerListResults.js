import { useState, useEffect } from "react";
import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink, useLocation } from "react-router-dom";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
import AccountProfileDetails from "../account/AccountProfileDetails";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";
import axios from "axios"
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import getInitials from "src/utils/getInitials";
import { db } from "../../firebase";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 500,
    overflow: "auto",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const CustomerListResults = ({ user, ...rest }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address);
  const [phone, setPhone] = useState(user.phone);
  const [pin, setPin] = useState(user.pin_chain);
  const [acceptDate, setAcceptDate] = useState(user.accept_date);
  const [igc, setIgc] = useState(user.igc);
  const [lockAccount, setLockAccount] = useState(user.account_locked);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customers.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(1)
      );
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const updateUser = async () => {
    const loggedUser = {
      name: name,
      email: email,
      pin: pin,
      phone: phone,
      address: address,
      account_locked: lockAccount,
      accept_date: acceptDate,
      igc: igc,
    };

    const addTransaction = {
      _id: user._id,
      name: name,
      email: email,
      totalIGC: igc,
      sign: "+"
    }

    await axios
      // .post(`https://majestic-express-server.herokuapp.com/api/auth/updateuser/${user._id}`, loggedUser)
      .post(`http://localhost:5000/api/auth/updateuser/${user._id}`, loggedUser)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error.message));

      await axios
      // .post(`https://majestic-express-server.herokuapp.com/api/auth/addtransaction`, addTransaction)
      .post(`http://localhost:5000/api/auth/addtransaction`, addTransaction)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error.message));
  }

  const deleteUser = async () => {
    await axios
    // .post(`http://localhost:5000/api/auth/deleteuser/${user._id}`)
    .post(`https://majestic-express-server.herokuapp.com/api/auth/deleteuser/${user._id}`,)

    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error.error)
    })
  }
  //* Modal code

  // const classes = useStyles();
  // // getModalStyle is not a pure function, we roll the style only on the first render
  // const [modalStyle] = useState(getModalStyle);
  // const [open, setOpen] = useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const body = (
  //   <div style={modalStyle} className={classes.paper}>
  //     <AccountProfileDetails users={users} />
  //   </div>
  // );
console.log(user)
  return (
    <div>
        <Box mb={6}>
          <form autoComplete="off" noValidate>
            <Card>
              <CardHeader
                subheader="The information can be edited"
                title={`${user.name} - ${user._id}`}
              />
              <Divider />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      helperText="Please specify the first name"
                      label="Name"
                      name="firstName"
                      onChange={(e) => setName(e.target.value)}
                      required
                      defaultValue={user.name}
                      // value={name}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      // value={user.email}
                      defaultValue={user.email}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Address"
                      name="Address"
                      onChange={(e) => setAddress(e.target.value)}
                      defaultValue={user.address}
                      // value={user.address}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Phone number"
                      name="phone"
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      // value={user.phone}
                      defaultValue={user.phone}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Pin Number"
                      name="pin"
                      onChange={(e) => setPin(e.target.value)}
                      type="number"
                      // value={user.pin_chain}
                      defaultValue={user.pin_chain}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Accepted Date"
                      name="Date"
                      onChange={(e) => setAcceptDate(e.target.value)}
                      defaultValue={user.accept_date}
                      // value={user.accept_date}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="User IGC"
                      name="user igc"
                      onChange={(e) => setIgc(e.target.value)}  
                      type="text"
                      // value={user.igc}
                      defaultValue="0"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Lock Account"
                      name="Lock"
                      onChange={(e) => setLockAccount(e.target.value)}  
                      required
                      select
                      SelectProps={{ native: true }}
                      defaultValue={user.account_locked}
                      // value={user.account_locked}
                      variant="outlined"
                    >
                      <option key={false} value={false}>
                        Unlocked
                      </option>
                      <option key={true} value={true}>
                        Locked
                      </option>
                    </TextField>
                  </Grid>
                </Grid>
              </CardContent>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  p: 2,
                }}
              >
                <Grid item md={6} xs={12}>
                  <Button onClick={async() => {
                     deleteUser()
                     }} color="error" variant="contained">
                    Delete user
                  </Button>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Button onClick={updateUser} color="primary" variant="contained">
                    Save details
                  </Button>
                </Grid>
              </Box>
            </Card>
          </form>{" "}
        </Box>
    </div>
  );
};

CustomerListResults.propTypes = {
  // customers: PropTypes.array.isRequired,
};

export default CustomerListResults;
