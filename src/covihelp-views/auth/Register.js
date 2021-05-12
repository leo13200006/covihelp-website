import React, {useState} from "react";
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
import Email from "@material-ui/icons/Email";
import componentStyles from "assets/theme/views/auth/register.js";
import {Link, useHistory} from "react-router-dom";
import { Phone } from "@material-ui/icons";
import FormLabel from "@material-ui/core/FormLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import {CircularProgress} from "@material-ui/core";
import { doSignup } from "../../controllers/LoginControllers";

const useStyles = makeStyles(componentStyles);

function Register() {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();

  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const [emailErr, setEmailErr] = useState('')
  const [phoneErr, setPhoneErr] = useState('')

  const [loading, setLoading] = useState(false)

  const onSubmit = () => {
    setLoading(true)
    console.log("Phone: " + phone + " Email: " + email)
    doSignup({phone, email})
        .then(otp => {
          localStorage.setItem('phone', phone)
          localStorage.setItem('email', email)
      setLoading(false)
      history.push("/auth/otp", { otp })
    })
        .catch((err) => {
        alert("Error Something happened")
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

    if (e.target.name === 'email') {
      let val = e.target.value
      if (val.match(/[a-z0-9]*@[a-z]*\.[a-z]{2}/gmy)) {
        console.log("email - correct !!!")
        setEmailErr("");
        setEmail(val)
      } else {
        e.target.error = true
        console.log(e.target.value)
        setEmailErr("Invalid Email");
      }
    }
  }

  const mainView = () => (
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
            <form
                className={classes.form}
                onSubmit={onSubmit}
            >
              <FormControl
                  variant="standard"
                  component={Box}
                  width="100%"
                  marginBottom="1.5rem!important"
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
                        <Phone />
                      </InputAdornment>
                    }
                />
                <FormHelperText style={{ color: "red" }}>{phoneErr}</FormHelperText>
              </FormControl>
              <FormControl
                  variant="filled"
                  component={Box}
                  width="100%"
                  marginBottom="1.5rem!important"
              >
                <FormLabel>Email</FormLabel>
                <FilledInput
                    onChange={handleOnChange}
                    name='email'
                    autoComplete="off"
                    type="email"
                    placeholder="example@example.cpm"
                    required={true}
                    startAdornment={
                      <InputAdornment position="start">
                        <Email />
                      </InputAdornment>
                    }
                />
                <FormHelperText style={{ color: "red" }}>{emailErr}</FormHelperText>
              </FormControl>

              <FormControlLabel
                  value="end"
                  control={<Checkbox checked={true} color="primary" />}
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
                    type={"submit"}
                    classes={classes.submit}
                    color="primary"
                    variant="contained">
                  Create account
                </Button>
              </Box>
            </form>
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
  )

  return (
    <>
      {loading ?
        <CircularProgress color="secondary" /> :
          mainView()
      }
    </>
  );
}

export default Register;
