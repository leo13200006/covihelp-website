import React from "react";
// javascipt plugin for creating charts
import Chart from "chart.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

// core components
import Header from "components/Headers/Header.js";

import {
  chartOptions,
  parseOptions,
} from "variables/charts.js";

import componentStyles from "assets/theme/views/admin/dashboard.js";
import {Avatar, CardActions, CardMedia, IconButton} from "@material-ui/core";
import {BookmarksOutlined} from "@material-ui/icons";
import rct from "../../assets/img/theme/oxygen.jpg"

const useStyles = makeStyles(componentStyles);

function Dashboard() {
  const classes = useStyles();
  const styles = {
    media: {
      height: 0,
      paddingTop: '56.25%',
      marginTop:'30'
    },
    mar: {
      marginTop: 100
    }
  };

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

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
          <Grid item xl={5} lg={6} xs={12} >
            <Card className={classes.root} style={styles.mar}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    P
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                  <BookmarksOutlined />
                  </IconButton>
                }
                title="Parag Ghorpade"
                subheader="September 20, 2021"
              />
              <CardMedia
                className={classes.media}
                image={rct}
                title="Paella dish"
                style={styles.media}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <b>Description: </b>
                  I have oxygen cylinders around Camp, Pune. Do get in touch for purchase. You have to transport it. No delivery provided.
                </Typography>
              </CardContent>

              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
