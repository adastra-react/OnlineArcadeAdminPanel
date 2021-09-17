import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import TransactionHistory from 'src/components/dashboard/TransactionHistory';


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
            <TransactionHistory />
          </Grid>

      </Container>
    </Box>
  </>
);

export default Dashboard;
