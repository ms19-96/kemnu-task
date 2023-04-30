import React from 'react'
import {Box, Grid, Slide} from "@mui/material";
import HangoutDetails from "../Hangouts/HangoutDetails";

const ViewRightDrawer = (props) => {
    const {anchorRightState, handleAnchorRightClose, currentUser, hangoutsArray, setHangoutsArray, handleEditClick, selectedHangoutKey, handleDeleteClick, handleUserClick} = props;

    return (
        <Slide
              direction="left"
              in={anchorRightState === 'view'}
              mountOnEnter
              unmountOnExit
            >
              <Grid item xs={12} sm={12} md={12} lg={3} className="view-hangout-details-slide">
                <Box mb={1} />
                <HangoutDetails
                  handleAnchorRightClose={handleAnchorRightClose}
                  handleEditClick={handleEditClick}
                  currentUser={currentUser}
                  hangoutsObject={hangoutsArray}
                  setHangoutsObject = {setHangoutsArray}
                  selectedHangoutKey={selectedHangoutKey}
                  handleDeleteClick={handleDeleteClick}
                  handleUserClick={handleUserClick}
                />
              </Grid>
        </Slide>
    )
}

export default ViewRightDrawer
