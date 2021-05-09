import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
// @material-ui/icons components
// import ArrowDownward from "@material-ui/icons/ArrowDownward";
// import ArrowUpward from "@material-ui/icons/ArrowUpward";
// import EmojiEvents from "@material-ui/icons/EmojiEvents";
// import GroupAdd from "@material-ui/icons/GroupAdd";
// import InsertChartOutlined from "@material-ui/icons/InsertChartOutlined";
// import PieChart from "@material-ui/icons/PieChart";
import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Box from "@material-ui/core/Box";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// core components
// import CardStats from "components/Cards/CardStats.js";
import componentStyles from "assets/theme/components/card-img.js";
import { CardContent, CardHeader, CardMedia, IconButton } from "@material-ui/core";
import { BookmarksOutlined } from "@material-ui/icons";
import Avatar from '@material-ui/core/Avatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CardActions from '@material-ui/core/CardActions';
// import componentStyles from "assets/theme/components/header.js";
import rct from "../../assets/img/theme/angular.jpg"

// const useStyles = makeStyles(componentStyles);

const useStyles = makeStyles({
  cardRoot: {
    width: "18rem",
  },
});

const useImgStyles = makeStyles(componentStyles);

const Header = () => {
  const classes = { ...useStyles(), ...useImgStyles() };
  const theme = useTheme();
  const styles = 
{

media: {
  height: 0,
  paddingTop: '56.25%', // 16:9,
  marginTop:'30'
}, 
mar:{
  marginTop: 100
}
  };
  return (
    <>
      <div className={classes.header}>
        <Container
          maxWidth={false}
          component={Box}
          classes={{ root: classes.containerRoot }}
          // style={{marginTop:50}}
        >
          <div>
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
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
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

            
                 <Grid item xl={5} lg={6} xs={12}>
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
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
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
              {/* </Grid>
              <Grid item xl={7} lg={6} xs={12}>
                <CardStats
                  subtitle="New users"
                  title="2,356"
                  icon={PieChart}
                  color="bgWarning"
                  footer={
                    <>
                      <Box
                        component="span"
                        fontSize=".875rem"
                        color={theme.palette.error.main}
                        marginRight=".5rem"
                        display="flex"
                        alignItems="center"
                      >
                        <Box
                          component={ArrowDownward}
                          width="1.5rem!important"
                          height="1.5rem!important"
                        />{" "}
                        3.48%
                      </Box>
                      <Box component="span" whiteSpace="nowrap">
                        Since last week
                      </Box>
                    </>
                  }
                />
              </Grid>
              <Grid item xl={7} lg={6} xs={12}>
                <CardStats
                  subtitle="Sales"
                  title="924"
                  icon={GroupAdd}
                  color="bgWarningLight"
                  footer={
                    <>
                      <Box
                        component="span"
                        fontSize=".875rem"
                        color={theme.palette.warning.main}
                        marginRight=".5rem"
                        display="flex"
                        alignItems="center"
                      >
                        <Box
                          component={ArrowDownward}
                          width="1.5rem!important"
                          height="1.5rem!important"
                        />{" "}
                        1.10%
                      </Box>
                      <Box component="span" whiteSpace="nowrap">
                        Since yesterday
                      </Box>
                    </>
                  }
                />
              </Grid>
              <Grid item xl={7} lg={6} xs={12}>
                <CardStats
                  subtitle="Performance"
                  title="49,65%"
                  icon={EmojiEvents}
                  color="bgInfo"
                  footer={
                    <>
                      <Box
                        component="span"
                        fontSize=".875rem"
                        color={theme.palette.success.main}
                        marginRight=".5rem"
                        display="flex"
                        alignItems="center"
                      >
                        <Box
                          component={ArrowUpward}
                          width="1.5rem!important"
                          height="1.5rem!important"
                        />{" "}
                        10%
                      </Box>
                      <Box component="span" whiteSpace="nowrap">
                        Since last month
                      </Box>
                    </>
                  }
                />*/}
            </Grid> 
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
