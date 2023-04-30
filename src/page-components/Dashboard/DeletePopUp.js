import React from 'react'
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import Button from "@mui/material/Button";
// const redTheme = createMuiTheme({ palette: { primary: colors.red } });

const DeletePopUp = props => {
    const {deletePopup, setDeletePopup, selectedHangoutKey, ogHangoutsArray, hangoutsArray, setOgHangoutsArray, setHangoutsArray} = props

    return (
        <Dialog
          open={deletePopup}
          onClose={() => setDeletePopup(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            id="alert-dialog-title"
          >
            <span style={{fontSize: "20px"}}>Delete this Hangout?</span>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You will not be able to recover this hangout
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/*<MuiThemeProvider theme={redTheme}>*/}
              <Button
                color="primary"
              >
                Delete
              </Button>
            {/*</MuiThemeProvider>*/}
            <Button
              onClick={() => {
                setDeletePopup(false);
              }}
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
    )
}

export default DeletePopUp
