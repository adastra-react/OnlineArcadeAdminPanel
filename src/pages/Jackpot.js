import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import JackpotLog from 'src/components/dashboard/JackpotLog';


const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
             <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <JackpotLog />
          </Grid>

      </Container>
    </Box>
  </>
);

export default Dashboard;
