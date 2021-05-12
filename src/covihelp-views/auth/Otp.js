import React, {useState} from "react";
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
import componentStyles from "assets/theme/views/auth/otp.js";
import {useHistory} from "react-router-dom";
import { ConfirmationNumberSharp } from "@material-ui/icons";
import FormLabel from "@material-ui/core/FormLabel";
import {CircularProgress, FormHelperText} from "@material-ui/core";
import {doCheckOtp} from "../../controllers/LoginControllers";

const useStyles = makeStyles(componentStyles);

function Otp(props) {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const ogOtp = props.location.state.otp;

    const [otp, setOtp] = useState();
    const [otpErr, setOtpErr] = useState("");

    const [loading, setLoading] = useState(false);

    const handleOnChange = (e) => {
        if (e.target.name === 'otp') {
            let val = e.target.value
            if (val.match(/[0-9]{4}/gmy)) {
                setOtpErr("")
                console.log("otp - correct !!!")
                setOtp(val)
            } else {
                e.target.error = true
                console.log(e.target.value)
                setOtpErr("Format of OTP is Wrong")
            }
        }
    }

    const onSubmit = () => {
    //    to => "/admin/user-profile"
        setLoading(true)
        console.log("Otp: " + otp )
        doCheckOtp({ogOtp, otp})
            .then(jwt => {
                console.log("JWT: " + jwt)
                localStorage.setItem('jwtToken', jwt)
                setLoading(false)
                history.push("/auth/set-user-profile")
            })
            .catch((err) => {
                setOtpErr("Otp Doesn't Match")
            })
    }

    const mainView = () => (
        <Grid item xs={12} lg={5} md={7}>
            <Card classes={{ root: classes.cardRoot }}>
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
                            <FormLabel>OTP</FormLabel>
                            <FilledInput
                                onChange={handleOnChange}
                                name='otp'
                                required={true}
                                autoComplete="off"
                                type="text"
                                placeholder="XXXX"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <ConfirmationNumberSharp />
                                    </InputAdornment>
                                }
                            />
                            <FormHelperText style={{ color: "red" }}>{otpErr}</FormHelperText>
                        </FormControl>
                        <Box textAlign="center" marginTop="1.5rem" marginBottom="1.5rem">
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained">
                                Verify OTP
                            </Button>
                        </Box>
                    </form>

                </CardContent>
                <CardHeader
                    className={classes.cardHeader}
                    title={
                        <Box
                            fontSize="80%"
                            fontWeight="400"
                            component="small"
                            color={theme.palette.gray[600]}
                        >
                            Enter You OTP
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
            </Card>
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

export default Otp;
