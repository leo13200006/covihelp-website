import React from 'react';

// core components
import componentStyles from "assets/theme/views/admin/dashboard.js";
import {Avatar, CardActions, CardMedia, IconButton} from "@material-ui/core";
import {BookmarksOutlined} from "@material-ui/icons";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(componentStyles);
function TicketCard({name, date, img, imgAlt, des}) {
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
    return (
        <>
            <Card className={classes.root} style={styles.mar}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {name[0]}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <BookmarksOutlined />
                        </IconButton>
                    }
                    title={name}
                    subheader={date}
                />
                <CardMedia
                    className={classes.media}
                    image={img}
                    title={imgAlt}
                    style={styles.media}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <b>Description: </b>
                        {des}
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
        </>
    );
}

export default TicketCard;
