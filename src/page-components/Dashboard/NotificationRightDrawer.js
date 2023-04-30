import React from 'react'
import {Box, Grid, IconButton, Slide, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const NotificationRightDrawer = props => {
    const {anchorRightState, handleAnchorRightClose} = props;

    return (
        <Slide
              direction="left"
              in={anchorRightState === 'notifications'}
              mountOnEnter
              unmountOnExit
            >
              <Grid item xs={12} sm={12} md={12} lg={3} className="post-hangouts-slide">
                <Box mb={1} />
                <Grid container>
                  <Grid item xs={10}>
                    <IconButton
                      onClick={handleAnchorRightClose}
                      style={{
                        position: 'absolute', top: 5, left: 5, padding: 3
                      }}
                    >
                      <CloseIcon style={{ width: 15, height: 15 }} />
                    </IconButton>
                  </Grid>
                </Grid>
                <Box mb={1} />
                <Typography
                  variant="h1"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '60px' }}
                >
                  Notifications
                </Typography>
              </Grid>
        </Slide>
    )
}

export default NotificationRightDrawer
