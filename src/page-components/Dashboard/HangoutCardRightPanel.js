import React from 'react';
import {makeStyles} from "@mui/styles";
import {Box, Card, CardContent, colors, Grid, Typography} from "@mui/material";
import RoomIcon from '@mui/icons-material/Room';
import PersonIcon from '@mui/icons-material/Person';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

const useStyles = makeStyles(theme => ({
    root: {
      height: '70%',
      borderRadius: '20px',
      maxHeight: '156.39px',
      border: 'none',
      boxShadow: 'none',
      position: 'relative',
      cursor: 'pointer'
    },
    avatar: {
      backgroundColor: colors.red[600],
      height: 56,
      width: 56
    },
    differenceIcon: {
      color: '#828282'
    },
    differenceValue: {
      color: '#828282',
      marginRight: theme.spacing(1),
      fontWeight: 500,
      // fontSize: '0.65rem'
    }
  }));

function HangoutCardRightPanel(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} id={props.id} onClick={props.handleCardClick} style={{height: '100%'}}>
        <CardContent>
          <Grid container justify="space-between" spacing={0}>
            <Grid item xs={10}>
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h5"
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: 'vertical'
                }}
              >
                {props.hangout.title}
              </Typography>
              <Typography
                color="textSecondary"
                variant="body2"
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  paddingRight: 10,
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  height: '40px'
                }}
              >
                {props.hangout.description}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Box
                align="center"
                style={{
                  backgroundColor: 'rgb(63 33 101)',
                  borderRadius: '7px 7px 0px 0px',
                  width: 40
                }}
              >
                <h5
                  style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 600,
                    color: 'white'
                  }}
                >
                  {props.hangout.date.split("/")[0]}
                </h5>
              </Box>
              <Box
                marginBottom={0.2}
                align="center"
                style={{
                  // backgroundColor: '#FFC3C3',
                  border: '1px solid #f7f7f7',
                  borderRadius: '0px 0px 7px 7px',
                  paddingLeft: 1,
                  paddingRight: 1,
                  width: 40
                }}
              >
                <h3 style={{ fontFamily: 'Roboto, sans-serif' }}>{props.hangout.date.split("/")[1]}</h3>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={0} justify="space-between">

            <Grid item xs={3}>
              <Box mt={2} display="flex" style={{justifyContent: 'center'}}>
                <RoomIcon className={classes.differenceIcon} />
                <Typography className={classes.differenceValue} variant="body2" style={{whiteSpace: 'nowrap'}}>
                  {props.hangout.type}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box mt={2} display="flex" style={{justifyContent: 'center'}}>
                <PersonIcon className={classes.differenceIcon} />
                <Typography className={classes.differenceValue} variant="body2">
                  {props.hangout.attendees}/{props.hangout.membersLimit}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box mt={2} display="flex" style={{justifyContent: 'center'}}>
                <WatchLaterIcon className={classes.differenceIcon} />
                <Typography className={classes.differenceValue} variant="body2" style={{marginLeft: 3, whiteSpace: 'nowrap'}}>
                  {props.hangout.date.split("/")[2]}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </CardContent>
      </Card>
    )
}

export default HangoutCardRightPanel
