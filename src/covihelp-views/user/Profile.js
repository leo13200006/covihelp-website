import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import UserHeader from "components/Headers/UserHeader.js";
import componentStyles from "assets/theme/views/admin/profile.js";
import {Button, CircularProgress, FormHelperText} from "@material-ui/core";
import {checkAlredyDataIsPresentOrNOt, createProfile} from "../../controllers/ProfileController";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles(componentStyles);

function Profile() {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();

  const [phone, setPhone] = useState(localStorage.getItem('phone'))
  const [email, setEmail] = useState(localStorage.getItem('email'))
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [isFirstTime, setIsFirstTime ] = useState(false)
  const [loading, setLoading] = useState(false)

  const [phoneErr, setPhoneErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [pincodeErr, setPincodeErr] = useState("");

  console.log("Phone:", phone, "Email:", email)

  useEffect(async () => {
    setLoading(true)
    let data = await checkAlredyDataIsPresentOrNOt();
    if(data === false) {
      setIsFirstTime(true)
    } else {
      setPhone(data.phone)
      setEmail(data.email)
      setFname(data.fname)
      setLname(data.lname)
      setAddress(data.address)
      setCity(data.city)
      setCountry(data.country)
      setPincode(data.pincode)
    }
    setLoading(false)
  }, [])

  const handleOnChange = (e) => {
    if (e.target.name === 'fname') {
      setFname(e.target.value)
    } else if (e.target.name === 'lname') {
      setLname(e.target.value)
    } else if (e.target.name === 'address') {
      setAddress(e.target.value)
    } else if (e.target.name === 'city') {
      setCity(e.target.value)
    } else if (e.target.name === 'country') {
      setCountry(e.target.value)
    } else if (e.target.name === 'phone') {
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
    } else if (e.target.name === 'email') {
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
    } else if (e.target.name === 'pincode') {
      let val = e.target.value
      if (val.match(/[0-9]{6}/gmy)) {
        console.log("pincode - correct !!!")
        setPincodeErr("");
        setPincode(val)
      } else {
        e.target.error = true
        console.log(e.target.value)
        setPincodeErr("Invalid Pincode");
      }
    }
  }

  const onSubmit = async () => {
    //  to="/admin/dashboard"
    setLoading(true)
    const profile = {
      fname,
      lname,
      address,
      city,
      country,
      phone,
      pincode,
      email
    };
    console.log("Profile: " + profile.toString())
    createProfile(profile)
        .then(status => {
          history.push("/admin/dashboard")
          setLoading(false)
        }).catch(err => {
          setLoading(false)
          alert("Error Something happened")
        })
  }

  const mainView = () => (
      <>
        {!isFirstTime && <UserHeader/>}
        <Container
            maxWidth={false}
            component={Box}
            marginTop="-4rem"
            classes={{ root: classes.containerRoot }}
        >
          <Grid container>
            <Grid
                item
                xs={12}
                xl={12}
                component={Box}
                marginBottom="3rem"
                classes={{ root: classes.gridItemRoot + " " + classes.order2 }}
            >
              <Card
                  classes={{
                    root: classes.cardRoot + " " + classes.cardRootSecondary,
                  }}
              >
                <CardHeader
                    subheader={
                      <Grid
                          container
                          component={Box}
                          alignItems="center"
                          justifyContent="space-between"
                      >
                        <Grid item xs="auto">
                          <Box
                              component={Typography}
                              variant="h3"
                              marginBottom="0!important"
                          >
                            My Account
                          </Box>
                        </Grid>
                        <Grid item xs="auto">
                          <Box
                              justifyContent="flex-end"
                              display="flex"
                              flexWrap="wrap"
                          >
                          </Box>
                        </Grid>
                      </Grid>
                    }
                    classes={{ root: classes.cardHeaderRoot }}
                />
                <form
                    className={classes.form}
                    onSubmit={onSubmit}
                >
                  <CardContent>
                    <Box
                        component={Typography}
                        variant="h6"
                        color={theme.palette.gray[600] + "!important"}
                        paddingTop=".25rem"
                        paddingBottom=".25rem"
                        fontSize=".75rem!important"
                        letterSpacing=".04em"
                        marginBottom="1.5rem!important"
                        classes={{ root: classes.typographyRootH6 }}
                    >
                      User Information
                    </Box>
                    <div className={classes.plLg4}>
                      <Grid container>
                        <Grid item xs={12} lg={6}>
                          <FormGroup>
                            <FormLabel>First name</FormLabel>
                            <FormControl
                                required={true}
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                              <Box
                                  onChange={handleOnChange}
                                  defaultValue={fname}
                                  name={"fname"}
                                  paddingLeft="0.75rem"
                                  paddingRight="0.75rem"
                                  component={FilledInput}
                                  autoComplete="off"
                                  type="text"
                                  placeholder="Lucky"
                              />
                            </FormControl>
                          </FormGroup>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <FormGroup>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl
                                required={true}
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                              <Box
                                  onChange={handleOnChange}
                                  defaultValue={lname}
                                  name={"lanme"}
                                  paddingLeft="0.75rem"
                                  paddingRight="0.75rem"
                                  component={FilledInput}
                                  autoComplete="off"
                                  type="text"
                                  placeholder="Jesse"
                              />
                            </FormControl>
                          </FormGroup>
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid item xs={12} lg={6}>
                          <FormGroup>
                            <FormLabel>Email</FormLabel>
                            <FormControl
                                required={true}
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                              <Box
                                  onChange={handleOnChange}
                                  defaultValue={email}
                                  name={"email"}
                                  paddingLeft="0.75rem"
                                  paddingRight="0.75rem"
                                  component={FilledInput}
                                  autoComplete="off"
                                  type="email"
                                  placeholder="jesse@example.com"
                              />
                              <FormHelperText style={{ color: "red" }}>{emailErr}</FormHelperText>
                            </FormControl>
                          </FormGroup>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <FormGroup>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl
                                required={true}
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                              <Box
                                  onChange={handleOnChange}
                                  defaultValue={phone}
                                  name={"phone"}
                                  paddingLeft="0.75rem"
                                  paddingRight="0.75rem"
                                  component={FilledInput}
                                  autoComplete="off"
                                  type="text"
                                  placeholder="+XX XXX XXX XXXX"
                              />
                              <FormHelperText style={{ color: "red" }}>{phoneErr}</FormHelperText>
                            </FormControl>
                          </FormGroup>
                        </Grid>
                      </Grid>
                    </div>
                    <Box
                        component={Divider}
                        marginBottom="1.5rem!important"
                        marginTop="1.5rem!important"
                    />
                    <Box
                        component={Typography}
                        variant="h6"
                        color={theme.palette.gray[600] + "!important"}
                        paddingTop=".25rem"
                        paddingBottom=".25rem"
                        fontSize=".75rem!important"
                        letterSpacing=".04em"
                        marginBottom="1.5rem!important"
                        classes={{ root: classes.typographyRootH6 }}
                    >
                      Contact Information
                    </Box>
                    <div className={classes.plLg4}>
                      <Grid container>
                        <Grid item xs={12}>
                          <FormGroup>
                            <FormLabel>Address</FormLabel>
                            <FormControl
                                required={true}
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                              <Box
                                  onChange={handleOnChange}
                                  defaultValue={address}
                                  name={"address"}
                                  paddingLeft="0.75rem"
                                  paddingRight="0.75rem"
                                  component={FilledInput}
                                  autoComplete="off"
                                  type="text"
                                  placeholder="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                              />
                            </FormControl>
                          </FormGroup>
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid item xs={12} lg={4}>
                          <FormGroup>
                            <FormLabel>City</FormLabel>
                            <FormControl
                                required={true}
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                              <Box
                                  onChange={handleOnChange}
                                  defaultValue={city}
                                  name={"city"}
                                  paddingLeft="0.75rem"
                                  paddingRight="0.75rem"
                                  component={FilledInput}
                                  autoComplete="off"
                                  type="text"
                                  placeholder="New York"
                              />
                            </FormControl>
                          </FormGroup>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                          <FormGroup>
                            <FormLabel>Country</FormLabel>
                            <FormControl
                                required={true}
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                              <Box
                                  onChange={handleOnChange}
                                  defaultValue={country}
                                  name={"country"}
                                  paddingLeft="0.75rem"
                                  paddingRight="0.75rem"
                                  component={FilledInput}
                                  autoComplete="off"
                                  type="text"
                                  placeholder="United States"
                              />
                            </FormControl>
                          </FormGroup>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                          <FormGroup>
                            <FormLabel>Postal code</FormLabel>
                            <FormControl
                                required={true}
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                              <Box
                                  onChange={handleOnChange}
                                  defaultValue={pincode}
                                  name={"pincode"}
                                  paddingLeft="0.75rem"
                                  paddingRight="0.75rem"
                                  component={FilledInput}
                                  autoComplete="off"
                                  type="text"
                                  placeholder="XXXXXX"
                              />
                              <FormHelperText style={{ color: "red" }}>{pincodeErr}</FormHelperText>
                            </FormControl>
                          </FormGroup>
                        </Grid>
                      </Grid>
                      <Grid>
                        <Box textAlign="right" marginTop="1.5rem" marginBottom="1.5rem">
                          <Button
                              type="submit"
                              size="medium"
                              style={{ width: "10%" }}
                              color="default"
                              variant="contained"
                          >
                            Submit
                          </Button>
                        </Box>
                      </Grid>
                    </div>
                  </CardContent>
                </form>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </>
  )

  return (
    <>
      {loading ?
          <Grid container justify={"center"} alignItems={"center"} >
            <CircularProgress />
          </Grid>:
          mainView()
      }
    </>
  );
}

export default Profile;
