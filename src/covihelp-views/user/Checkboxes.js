import React from 'react'
import FormGroup from "@material-ui/core/FormGroup";
import {Box, Divider, FormControlLabel, FormLabel, Grid} from '@material-ui/core';
import FilledInput from "@material-ui/core/FilledInput";
import Checkbox from "@material-ui/core/Checkbox";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import componentStyles from "assets/theme/views/admin/profile.js";
import {Link} from "react-router-dom";
import UserHeader from "../../components/Headers/UserHeader";
import {DropzoneArea} from "material-ui-dropzone";

const useStyles = makeStyles(componentStyles);

const Checkboxes = (props) => {
    const theme = useTheme();
    const classes = useStyles();
    console.log(props.location);
    const mode = props.location.state;
    const formClasses = {
        root: classes.formControlCheckboxLabelRoot,
        label: classes.formControlCheckboxLabelLabel,
    }

    return (
        <>
            <UserHeader />
            <Container
                maxWidth={false}
                component={Box}
                marginTop="-6rem"
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
                                                {mode ? "Parag Ghropade - 20 Semptember 2021" : "Create Help"}
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
                                    Select your requirements
                                </Box>
                                <div className={classes.plLg4}>
                                    <Grid>
                                        <FormGroup >
                                            <FormGroup>
                                                <FormLabel>Requirement of Oxygen</FormLabel>
                                                <Grid direction="row" container md={12} lg={12} xl={12} sm={12}>
                                                    <Grid item xl={2} lg={4} md={5} sm={11} xs={11}>
                                                        <FormControlLabel
                                                            disabled={mode}
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Oxygen"
                                                            labelPlacement="end"
                                                            classes={formClasses}
                                                        />
                                                    </Grid>
                                                    <Grid item xl={10} lg={8} md={7} sm={11} xs={11}>
                                                        <Box
                                                            disabled={mode}
                                                            paddingLeft="0.75rem"
                                                            paddingRight="0.75rem"
                                                            component={FilledInput}
                                                            autoComplete="off"
                                                            type="text"
                                                            placeholder="Quantity in litres"
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </FormGroup>
                                            <Divider style={{ marginBottom: "1em" }} />
                                            <FormGroup>
                                                <FormLabel>Requirement of Plasma</FormLabel>
                                                <Grid direction="row" container md={12} lg={12} xl={12} sm={12}>
                                                    <Grid item xl={2} lg={4} md={5} sm={11} xs={11}>
                                                        <FormControlLabel
                                                            disabled={mode}
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Plasma"
                                                            labelPlacement="end"
                                                            classes={formClasses}
                                                        />
                                                    </Grid>
                                                    <Grid direction="row" container xl={10} lg={8} md={7} sm={11}>
                                                        <Grid item>
                                                            <FormControl className={classes.formControl}>
                                                                <Select
                                                                    disabled={mode}
                                                                >
                                                                    <MenuItem value="">
                                                                        <em>Select blood group</em>
                                                                    </MenuItem>
                                                                    <MenuItem value={0}>O</MenuItem>
                                                                    <MenuItem value={1}>A</MenuItem>
                                                                    <MenuItem value={2}>B</MenuItem>
                                                                    <MenuItem value={3}>AB</MenuItem>
                                                                </Select>
                                                                <FormHelperText>Select blood group</FormHelperText>
                                                            </FormControl>
                                                        </Grid>
                                                        <Grid item>
                                                            <FormControl className={classes.formControl}>
                                                                <Select
                                                                    disabled={mode}
                                                                >
                                                                    <MenuItem value="">
                                                                        <em>Select blood type</em>
                                                                    </MenuItem>
                                                                    <MenuItem value={1}>+</MenuItem>
                                                                    <MenuItem value={2}>-</MenuItem>
                                                                </Select>
                                                                <FormHelperText>Select blood type</FormHelperText>
                                                            </FormControl>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </FormGroup>
                                            <Box
                                                component={Divider}
                                                marginBottom="1.5rem!important"
                                                marginTop="1.5rem!important"
                                            />
                                            <FormGroup>
                                                <FormLabel>Requirement of Beds</FormLabel>
                                                <Grid direction="row" container md={12} lg={12} xl={12} sm={12}>
                                                    <Grid item xl={2} lg={4} md={5} sm={11} xs={11}>
                                                        <FormControlLabel
                                                            disabled={mode}
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Beds"
                                                            labelPlacement="end"
                                                            classes={formClasses}
                                                        />
                                                    </Grid>
                                                    <Grid item xl={10} lg={8} md={7} sm={11} xs={11}>
                                                        <Box
                                                            disabled={mode}
                                                            paddingLeft="0.75rem"
                                                            paddingRight="0.75rem"
                                                            component={FilledInput}
                                                            autoComplete="off"
                                                            type="text"
                                                            placeholder="Normal/ICU bed"
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </FormGroup>
                                            <Box
                                                component={Divider}
                                                marginBottom="1.5rem!important"
                                                marginTop="1.5rem!important"
                                            />
                                            <FormGroup>
                                                <FormLabel>Description</FormLabel>
                                                <Grid item md={12} lg={12} xl={12} sm={12}>
                                                    <Box
                                                        disabled={mode}
                                                        paddingLeft="0.75rem"
                                                        paddingRight="0.75rem"
                                                        component={FilledInput}
                                                        autoComplete="off"
                                                        type="text"
                                                        placeholder="........."
                                                    />
                                                </Grid>
                                            </FormGroup>
                                            <Box
                                                component={Divider}
                                                marginBottom="1.5rem!important"
                                                marginTop="1.5rem!important"
                                            />
                                            {!mode &&
                                                <FormGroup>
                                                    <FormLabel>Proof in Pictures</FormLabel>
                                                    <Grid direction="row" container md={12} lg={12} xl={12} sm={12}>
                                                        <Box
                                                            paddingLeft="0.75rem"
                                                            paddingRight="0.75rem"
                                                            component={DropzoneArea}
                                                            maxFileSize={300000000}
                                                            acceptedFiles={['image/jpeg, image/png']}
                                                            filesLimit={3}
                                                            dropzoneText={"Enter any three picture as proof like receipt and prescription in png or jpeg format"}
                                                        />
                                                    </Grid>
                                                </FormGroup>
                                            }
                                        </FormGroup>
                                    </Grid>
                                </div>
                                <div className={classes.plLg4}>
                                    <Grid item>
                                        {mode ?
                                            <Box textAlign="right" marginTop="1.5rem" marginBottom="1.5rem">
                                                <Button
                                                    to="/admin/dashboard"
                                                    size="medium"
                                                    component={Link}
                                                    color="primary"
                                                    variant="contained"
                                                >
                                                    Want to Help
                                                </Button>
                                            </Box>
                                            :
                                            <Box textAlign="right" marginTop="1.5rem" marginBottom="1.5rem">
                                                <Button
                                                    to="/admin/dashboard"
                                                    size="medium"
                                                    component={Link}
                                                    color="default"
                                                    variant="contained"
                                                >
                                                    Submit
                                                </Button>
                                            </Box>
                                        }
                                    </Grid>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Checkboxes;
