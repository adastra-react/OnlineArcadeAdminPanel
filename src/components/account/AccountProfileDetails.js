import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";
// Git test
const states = [
  {
    value: "alabama",
    label: "Alabama",
  },
  {
    value: "new-york",
    label: "New York",
  },
  {
    value: "san-francisco",
    label: "San Francisco",
  },
];

const AccountProfileDetails = ({ props }) => {
  const [values, setValues] = useState({
    fullName: "Katarina",
    lastName: "Smith",
    email: "demo@devias.io",
    address: "",
    pin_chain: "",
    phone: "",
    state: "Alabama",
    country: "USA",
    accept_date: "",
    account_locked: false,
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <CardHeader
          subheader="Please enter details to add new user"
          title="Add new user"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="Full Name"
                name="firstName"
                onChange={(e) => setValues(e.target.value)}
                required
                defaultValue={values.fullName}
                // value={name}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={(e) => setValues(e.target.value)}
                required
                // value={values.email}
                defaultValue={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Address"
                name="Address"
                onChange={(e) => setValues(e.target.value)}
                defaultValue={values.address}
                // value={values.address}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone number"
                name="phone"
                type="number"
                onChange={(e) => setValues(e.target.value)}
                required
                // value={values.phone}
                defaultValue={values.phone}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Accepted Date"
                name="Date"
                onChange={(e) => setValues(e.target.value)}
                defaultValue={values.accept_date}
                // value={values.accept_date}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="User IGC"
                name="user igc"
                onChange={(e) => setValues(e.target.value)}
                type="number"
                // value={values.igc}
                defaultValue={values.igc}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Lock Account"
                name="Lock"
                onChange={(e) => setValues(e.target.value)}
                required
                select
                SelectProps={{ native: true }}
                defaultValue={values.account_locked}
                // value={values.account_locked}
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
          <Grid item md={12} xs={12}>
            <Button color="error" variant="contained">
              Add New User
            </Button>
          </Grid>
        </Box>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
