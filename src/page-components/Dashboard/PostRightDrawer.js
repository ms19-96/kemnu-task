import React from 'react'
import {withStyles} from "@mui/styles";
import {
    Box,
    Chip,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    MenuItem, Select,
    Slide,
    TextField, ToggleButton, ToggleButtonGroup
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import dayjs from "dayjs";

/* =================================================
      Styling for the Toggle Buttons in top half od right drawer
*/
const StyledToggleButtonGroup = withStyles({
    root: {
      padding: '10px 10px',
      width: '100%',
    },
  })(ToggleButtonGroup);

  const StyledToggleButton = withStyles({
    root: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '10px',
      color: 'rgb(0, 0, 0)',
      padding: '10px 0px',
      textTransform: 'none',
      width: '100%',
      '&$selected': {
        backgroundColor: 'rgb(63, 33, 101)',
        color: 'rgb(255, 255, 255)',
        '&:hover': {
          backgroundColor: 'rgb(63, 33, 101)',
          color: 'rgb(255, 255, 255)',
        },
      },
    },
    selected: {},
  })(ToggleButton);

const PostRightDrawer = props => {
    const {anchorRightState, hangoutObject, setHangoutObject, handleAnchorRightClose} = props;

    return (
        <Slide
              direction="left"
              in={anchorRightState === 'post'}
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
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  Post Hangout
                </Typography>
                <Box mb={5} />
                <Grid container>
                  <Grid item xs={6}>
                    <StyledToggleButtonGroup
                      exclusive
                      value={hangoutObject.activityType}
                      onChange={(e, newAlignment) => (
                        newAlignment !== null ? (
                          setHangoutObject({
                            ...hangoutObject,
                            activityType: newAlignment,
                          })
                        ) : null
                      )}
                    >
                      <StyledToggleButton value="Virtual">
                        Virtual
                      </StyledToggleButton>
                      <StyledToggleButton value="In-Person">
                        In-Person
                      </StyledToggleButton>
                    </StyledToggleButtonGroup>
                  </Grid>
                  <Grid item xs={6}>
                    <StyledToggleButtonGroup
                      exclusive
                      value={hangoutObject.isPaid ? "Paid" : "Free"}
                      onChange={(e, newAlignment) => (
                        newAlignment !== null ? (
                          setHangoutObject({
                            ...hangoutObject,
                            isPaid: (newAlignment === "Paid"),
                          })) : null)}
                    >
                      <StyledToggleButton value="Free">
                        Free
                      </StyledToggleButton>
                      <StyledToggleButton value="Paid">
                        Paid
                      </StyledToggleButton>
                    </StyledToggleButtonGroup>
                  </Grid>
                  <Grid item xs={6}>
                    <StyledToggleButtonGroup
                      exclusive
                      value={hangoutObject.isPublic ? "Public" : "Private"}
                      onChange={(e, newAlignment) => (
                        newAlignment !== null ? (
                          setHangoutObject({
                            ...hangoutObject,
                            isPublic: (newAlignment === "Public"),
                          })
                        ) : null
                      )}
                    >
                      <StyledToggleButton value="Public">
                        Public
                      </StyledToggleButton>
                      <StyledToggleButton value="Private">
                        Private
                      </StyledToggleButton>
                    </StyledToggleButtonGroup>
                  </Grid>
                  <Grid item xs={6}>
                    {
                      hangoutObject.isPaid ? (
                        <TextField
                          fullWidth
                          select
                          variant="outlined"
                          size="small"
                          style={{ padding: 9 }}
                          value={hangoutObject.price}
                          InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                          onChange={(e) => {
                            setHangoutObject({
                              ...hangoutObject,
                              price: e.target.value
                            })
                          }}
                        >
                          {[5, 10, 15, 20].map((amt) => (
                            <MenuItem
                              key={amt}
                              value={amt}
                            >
                              {amt}
                            </MenuItem>
                          ))}
                        </TextField>
                        ) : ''
                    }
                  </Grid>
                </Grid>
                <Box mb={3} />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Hangout Title"
                  value={hangoutObject.title}
                  onChange={(e) => setHangoutObject({
                    ...hangoutObject,
                    title: e.target.value,
                  })}
                />
                <Box mb={1} />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Description"
                  multiline rows={4}
                  value={hangoutObject.description}
                  onChange={(e) => setHangoutObject({
                    ...hangoutObject,
                    description: e.target.value,
                  })}
                />
                <Box mb={1} />
                <TextField
                  fullWidth
                  variant="outlined"
                  id="datetime-local"
                  label="Date & Time"
                  type="datetime-local"
                  value={dayjs.unix(hangoutObject.endTime).format("YYYY-MM-DDTHH:mm")}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => {
                    setHangoutObject({
                      ...hangoutObject,
                      endTime: dayjs(e.target.value, "YYYY-MM-DDTHH:mm").unix()
                    });
                  }}
                />
                <Box mb={1} />
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="hangout-tags-label">Tags</InputLabel>
                  <Select
                    multiple
                    labelId="hangout-tags-label"
                    id="hangout-tags"
                    label="Tags"
                    value={hangoutObject.tags}
                    onChange={(e) => setHangoutObject({
                      ...hangoutObject,
                      tags: e.target.value
                    })}
                    MenuProps={{
                      PaperProps: {
                        style: {
                          maxHeight: 48 * 4.5 + 8,
                          width: 250,
                        },
                      },
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left"
                      },
                      getContentAnchorEl: null
                    }}
                    renderValue={(selected) => (
                      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {
                          selected.map((value) => (
                          <Chip key={value} label={value} style={{ margin: 2 }} />
                          ))
                        }
                      </div>
                    )}
                  >
                    {['Outdoor', 'Sports', 'Videogame', 'Music', 'Festival'].map((tag, index) => (
                      <MenuItem key={index} value={tag}>{tag}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Box mb={1} />
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="hangout-num-people-label"># of Attendees</InputLabel>
                  <Select
                    labelId="hangout-num-people-label"
                    id="hangout-num-people"
                    label="# of Attendees"
                    value={hangoutObject.membersLimit}
                    onChange={(e) => setHangoutObject({
                      ...hangoutObject,
                      membersLimit: e.target.value
                    })}
                    MenuProps={{
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left"
                      },
                      getContentAnchorEl: null
                    }}
                  >
                    {[5, 8, 10].map((num) => (
                      <MenuItem key={num} value={num}>{num}</MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <Box mb={1} />
                {
                  hangoutObject.activityType === 'Virtual' ? (
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Video Link (Zoom, Webex, etc.)"
                      value={hangoutObject.zoomLink}
                      onChange={(e) => setHangoutObject({
                        ...hangoutObject,
                        zoomLink: e.target.value
                      })}
                    />
                  ) : ''
                }
                <Box mb={5} />
                <Grid container>
                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      padding: 10,
                      textTransform: 'none'
                    }}
                  >
                    Post
                  </Button>
                </Grid>
              </Grid>
            </Slide>
    )
}

export default PostRightDrawer
