import React, {useState, useEffect} from 'react'
import {Avatar, Box, Grid, Hidden, InputBase, Slide} from "@mui/material";
import Typography from "@mui/material/Typography";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FriendBox from "./FriendBox";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    },
    search: {
        border: '1px solid #E6E6E6',
        position: 'relative',
        borderRadius: '20px',
        backgroundColor: 'rgb(247,248,250)',
        transition: '.4s ease-in-out',
        '&:hover': {
            backgroundColor: 'rgb(247,248,250)',
            border: '1px solid rgb(63, 32, 101, 0.55)'
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(0),
            width: 'auto'
        }
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch'
        }
    },
    avatar: {
        cursor: 'pointer',
        width: 105,
        height: 105,
        marginLeft: 0
    },
    bioLink: {
        position: 'relative',
        borderRadius: '20px',
        backgroundColor: 'rgb(247,248,250)',
        '&:hover': {
            backgroundColor: 'rgb(247,248,250)'
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(0),
            width: 'auto'
        }
    },
    bioText: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(0)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('lg')]: {
            width: '20ch'
        }
    },
    filterNoneIcon: {
        padding: theme.spacing(0, 22),
        height: '100%',
        position: 'absolute',
        // pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'rotate(-180deg)',
        opacity: '0.35'
    },
    desktopDrawer: {
        width: 100,
        height: '100%'
    },
}));

const DefaultRightDrawer = props => {
    const {anchorRightState, currentUser} = props;
    const classes = useStyles();
    const [friendsList, setFriendsList] = useState([]);

    useEffect(() => {
      // setFriendsList([]);
      //
      // firebase.database()
      //     .ref(`/friends/${currentUser.key}`)
      //     .once('value')
      //     .then((snapshot) => {
      //       for (const item in snapshot.val()) {
      //         setFriendsList(oldList => [...oldList, snapshot.val()[item]])
      //       }
      //     })
    }, [])

    return (
        <Hidden mdDown>
              <Slide
                direction="left"
                in={anchorRightState === 'default' || anchorRightState === 'view'}
                mountOnEnter
                unmountOnExit
              >
                <Grid
                  item
                  xs={3}
                  style={{
                    backgroundColor: 'white', position: 'sticky', top: 0, height: '100vh'
                  }}
                >
                  {/* <Grid container>
              <Grid item xs={10}>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search.."
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </div>
              </Grid>
              <Grid item xs={2}>
                <div style={{ marginTop: '-5px', marginLeft: 7 }}>
                  <IconButton>
                    <StyledBadge badgeContent=" " variant="dot">
                      <NotificationsNoneIcon />
                    </StyledBadge>
                  </IconButton>
                </div>
              </Grid>
            </Grid> */}

                  {/* <Box mb={7} /> */}

                  <Grid container>
                    <Grid item xs={8}>
                      <Typography
                        variant="h2"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                      >
                        Hello,
                      </Typography>
                      <Typography
                        variant="h1"
                        style={{
                          fontFamily: 'Raleway, sans-serif',
                          fontWeight: '700'
                        }}
                      >
                        {currentUser.name}
                        !
                      </Typography>
                      <p
                        style={{
                          fontFamily: 'Lato, sans-serif',
                          color: 'rgb(127, 143, 164)',
                          fontSize: 12,
                          marginTop: 8
                        }}
                      >
                        {currentUser.bio}
                      </p>
                    </Grid>
                    <Grid item xs={4}>
                      <Avatar
                        className={classes.avatar}
                        // component={RouterLink}
                        src={currentUser.pictureURL}
                        to="/app/account"
                      />
                    </Grid>
                  </Grid>

                  <Box mb={4} />

                  <Grid container>
                    <Grid item xs={8}>
                      <div className={classes.bioLink}>
                        {/* <div className={classes.filterNoneIcon}>
                    <FilterNoneIcon />
                  </div> */}
                        <InputBase
                          disabled
                          value={currentUser.city ? currentUser.city : 'Location Unavailable'}
                          classes={{
                            root: classes.inputRoot,
                            input: classes.bioText
                          }}
                          inputProps={{ 'aria-label': 'search' }}
                        />
                      </div>
                    </Grid>
                    {/* TODO: On page collapse, button should not collapse
                    <Grid item xs={4}>
                      <div style={{ marginLeft: 0 }}>
                        <Button
                          color="primary"
                          variant="contained"
                          style={{
                            textTransform: 'none',
                            backgroundColor: 'rgb(50,42,125, 0.45)',
                            color: 'rgb(50,42,125, 1)',
                            borderRadius: '30px'
                          }}
                        >
                          Edit Link
                        </Button>
                      </div>
                    </Grid>
                        */}
                  </Grid>

                  <Box mb={8} />

                  {
                    /*
                  <Grid container style={{ backgroundColor: 'rgb(63, 33, 101)', padding: '35px 20px 35px 20px', borderRadius: 10 }}>
                    <Grid item xs={9}>
                      <Typography variant="h4" style={{ color: 'white', fontFamily: 'raleway', fontWeight: 600 }}>
                        Upgrade to PRO
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        style={{ color: 'white', fontFamily: 'lato' }}
                      >
                        For more profile control
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: 'rgb(69,196,143)',
                          color: 'white',
                          padding: 10
                        }}
                      >
                        <HowToRegIcon />
                      </Button>
                    </Grid>
                  </Grid>
                  */
                  }

                  <Box mb={5} />

                  <Grid container style={{marginBotton: '200px'}}>
                    <Grid item xs={9}>
                      <Typography variant="h4" style={{ fontFamily: 'raleway', fontWeight: 600 }}>
                        Favorites
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography
                        variant="body2"
                        style={{
                          fontFamily: 'lato', display: 'flex', alignItems: 'center', color: 'rgb(63, 33, 101)', whiteSpace: 'nowrap'
                        }}
                      >
                        View All
                        <ChevronRightIcon />
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container direction="column" style={{marginTop: '15px'}}>
                        {
                          friendsList.length !== 0 ? (
                            friendsList.map((friend, index) => (
                              <FriendBox
                                key={index}
                                friend={friend}
                                friendsList={friendsList}
                                setFriendsList={setFriendsList}
                              />
                            ))
                          ) : (
                            ''
                          )
                        }
                  </Grid>
                </Grid>
              </Slide>
            </Hidden>
    )
}

export default DefaultRightDrawer
