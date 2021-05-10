import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// core components
import Header from "components/Headers/Header.js";
import componentStyles from "assets/theme/views/admin/dashboard.js";
import TicketCard from "../../components/Cards/TicketCard";
import {tickets} from "../../covihelp-dummy-data/Tickets";
const useStyles = makeStyles(componentStyles);

function Dashboard() {
  const classes = useStyles();

  return (
    <>
      <Header />
      {/* Page content */}
      <Container
        maxWidth={false}
        component={Box}
        marginTop="-6rem"
        classes={{ root: classes.containerRoot }}
      >
        <Grid container>
            <Grid
                container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="center"
            >
                {tickets.map((e, index) => (
                    <Grid item xs={10} sm={7} md={6} lg={4} key={index}
                          direction="column"
                          alignItems="center"
                          justify="center">
                        <TicketCard name={e.name} date={e.date} img={e.img} des={e.des} imgAlt={e.imgAlt} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
