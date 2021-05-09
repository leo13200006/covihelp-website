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
// @material-ui/icons components
// core components
import componentStyles from "assets/theme/views/auth/otp.js";
import { Link } from "react-router-dom";
import { ConfirmationNumberSharp } from "@material-ui/icons";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles(componentStyles);

function Otp() {
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
                    <CardContent classes={{ root: classes.cardContent }}>
                        <FormControl
                            variant="filled"
                            component={Box}
                            width="100%"
                            marginBottom="1rem!important"
                        >
                            <FormLabel>OTP</FormLabel>
                            <FilledInput
                                autoComplete="off"
                                type="text"
                                placeholder="XXXX"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <ConfirmationNumberSharp />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>

                        <Box textAlign="center" marginTop="1.5rem" marginBottom="1.5rem">
                            <Button
                                component={Link}
                                to="/admin/user-profile"
                                color="primary"
                                variant="contained">
                                Verify your OTP
                            </Button>
                        </Box>

                    </CardContent>
                </Card>

            </Grid>
        </>
    );
}

export default Otp;
