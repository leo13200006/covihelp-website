import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Checkbox from "@material-ui/core/Checkbox";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons components
import Email from "@material-ui/icons/Email";

// core components
import componentStyles from "assets/theme/views/auth/register.js";
import {Link} from "react-router-dom";
import { Phone } from "@material-ui/icons";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles(componentStyles);

function Register() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Grid item xs={12} lg={6} md={8}>
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
                Sign up
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
                marginBottom="1.5rem!important"
            >
              <FormLabel>Phone Number</FormLabel>
              <FilledInput
                  autoComplete="off"
                  type="phone"
                  placeholder="+XX XXX XXX XXXX"
                  startAdornment={
                    <InputAdornment position="start">
                      <Phone />
                    </InputAdornment>
                  }
              />
            </FormControl>
            <FormControl
              variant="filled"
              component={Box}
              width="100%"
              marginBottom="1.5rem!important"
            >
              <FormLabel>Email</FormLabel>
              <FilledInput
                autoComplete="off"
                type="email"
                placeholder="example@example.cpm"
                startAdornment={
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label={
                <>
                  I agree with the{" "}
                  <Box
                    color={theme.palette.primary.main}
                    component="a"
                    textDecoration="none"
                  >
                    Privacy Policy
                  </Box>
                </>
              }
              labelPlacement="end"
              classes={{
                root: classes.formControlLabelRoot,
                label: classes.formControlLabelLabel,
              }}
            />
            <Box textAlign="center" marginTop="1.5rem" marginBottom="1.5rem">
              <Button
                  component={Link}
                  to="/auth/otp"
                  color="primary"
                  variant="contained">
                Create account
              </Button>
            </Box>
          </CardContent>
        </Card>
        <Grid container component={Box} marginTop="1rem">
          <Grid item xs={6} component={Box} textAlign="left">
            <Link
                className={classes.footerLinks}
                to="/auth/login"
            >
              Already have a account
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Register;
