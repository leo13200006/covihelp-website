import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";

// core components
import componentStyles from "assets/theme/views/auth/login.js";
import {Link} from "react-router-dom";
import FormLabel from "@material-ui/core/FormLabel";
import {PhoneAndroid} from "@material-ui/icons";

const useStyles = makeStyles(componentStyles);

function Login() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Grid item xs={12} lg={5} md={7}>
        <Card classes={{ root: classes.cardRoot }}>
          <CardHeader
            className={classes.cardHeader}
            title={
              <Box
                fontSize="120%"
                fontWeight="500"
                component="large"
                color={theme.palette.gray[600]}
              >
                Log In
              </Box>
            }
            titleTypographyProps={{
              component: Box,
              textAlign: "center",
              marginBottom: "1rem!important",
              marginTop: ".5rem!important",
              fontSize: "1rem!important",
            }}
          />
          <CardContent classes={{ root: classes.cardContent }}>
            <FormControl
              variant="filled"
              component={Box}
              width="100%"
              marginBottom="1rem!important"
            >
              <FormLabel>Phone Number</FormLabel>
              <FilledInput
                autoComplete="off"
                type="text"
                placeholder="+XX XXX XXX XXXX"
                startAdornment={
                  <InputAdornment position="start">
                    <PhoneAndroid />
                  </InputAdornment>
                }
              />
            </FormControl>

            <Box textAlign="center" marginTop="1.5rem" marginBottom="1.5rem">
              <Button
                  component={Link}
                  to="/auth/otp"
                  color="primary"
                  variant="contained">
                Sign in
              </Button>
            </Box>

          </CardContent>
        </Card>

        <Grid container component={Box} marginTop="1rem">
          <Grid item xs={6} component={Box} textAlign="left">
          </Grid>
          <Grid item xs={6} component={Box} textAlign="right">
            <Link
              className={classes.footerLinks}
              to="/auth/register"
            >
              Create new account
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
