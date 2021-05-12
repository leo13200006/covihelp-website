import React, {useState} from "react";
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
import {Link, useHistory} from "react-router-dom";
import FormLabel from "@material-ui/core/FormLabel";
import {PhoneAndroid} from "@material-ui/icons";
import {CircularProgress, FormHelperText} from "@material-ui/core";
import {doLogin} from "../../controllers/LoginControllers";
import {Alert} from "@material-ui/lab";

const useStyles = makeStyles(componentStyles);

function Login() {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();

  const [phone, setPhone] = useState('')
  const [phoneErr, setPhoneErr] = useState('')

  const [loading, setLoading] = useState(false)

  const onSubmit = () => {
    setLoading(true)
    console.log("Phone: " + phone )
    doLogin({phone})
        .then(otp => {
          setLoading(false)
          history.push("/auth/otp", { otp })
        })
        .catch((err) => {
          return (<Alert severity="error">This is an error alert — check it out!</Alert>)
        })
  };

  const handleOnChange = (e) => {
    if (e.target.name === 'phone') {
      let val = e.target.value
      if (val.match(/[0-9]{10}|\+[0-9]{2} [0-9]{10}|\+[0-9]{2} [0-9]{3} [0-9]{3} [0-9]{4}/gmy)) {
        setPhoneErr("")
        console.log("phone - correct !!!")
        setPhone(val)
      } else {
        e.target.error = true
        setPhoneErr("Invalid Phone")
        console.log(e.target.value)
      }
    }
  }

  const mainView = () => (
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
            <form
                className={classes.form}
                onSubmit={onSubmit}
            >
              <FormControl
                  variant="filled"
                  component={Box}
                  width="100%"
                  marginBottom="1rem!important"
              >
                <FormLabel>Phone Number</FormLabel>
                <FilledInput
                    onChange={handleOnChange}
                    name='phone'
                    autoComplete="off"
                    type="phone"
                    placeholder="+XX XXX XXX XXXX"
                    required={true}
                    startAdornment={
                      <InputAdornment position="start">
                        <PhoneAndroid />
                      </InputAdornment>
                    }
                />
                <FormHelperText style={{ color: "red" }}>{phoneErr}</FormHelperText>
              </FormControl>
              <Box textAlign="center" marginTop="1.5rem" marginBottom="1.5rem">
                <Button
                    type="submit"
                    color="primary"
                    variant="contained">
                  Sign in
                </Button>
              </Box>
            </form>
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
  )

  return (
    <>
      { loading ?
          <CircularProgress color="secondary" /> :
          mainView()
      }
    </>
  );
}

export default Login;
