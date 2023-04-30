import React, { useEffect, useState } from 'react'
import verify from '../../../public/icons/verifyIcon.png';
import noProfile from '../../../public/icons/NoProfilePic.jpeg';
import favoriteIconNoClick from '../../../public/icons/ic_favorite.svg';
import favoriteIconClick from '../../../public/icons/ic_favoriteSelected.svg';
import {Grid, IconButton, Slide, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import HangoutCardRightPanel from "./HangoutCardRightPanel";

const UserRightDrawer = (props) => {
    const {selectedUserKey, anchorRightState, handleAnchorRightClose, ogHangoutsArray, handleCardClick, currentUserKey} = props;

    const defaultUserObject = {
        key: '',
        pictureURL: '',
        points: 0,
        isVerified: false,
        checkIn: 0,
        name: '',
        bio: '',
        gender: '',
        dateOfBirth: '',
        career: '',
        city: '',
        education: '',
        token: '',
        proAccount: false,
        isStudentVerified: false,
        isOrg: false,
        universityId: '',
      }

    const [userObject, setUserObject] = useState(defaultUserObject);
    const [userHangoutHost, setUserHangoutHost] = useState([]);

    const [friend, setFriend] = useState(false);

    useEffect(() => {
        firebase.database()
            .ref(`/users/${selectedUserKey}`)
            .once('value')
            .then((snapshot) => {
            //snapshot.val() is the current user object
            if (snapshot.val() != null) {
                setUserObject({...snapshot.val()});
            }
            });

        //clears the hangout list for the previous user, since the selected User has changed
        setUserHangoutHost([]);
        //gets all of the hangouts the clicked user is the host for
        for (const item in ogHangoutsArray) {
            if (ogHangoutsArray[item].hostKey === selectedUserKey) {
                setUserHangoutHost(hangoutsArr => [...hangoutsArr, ogHangoutsArray[item]]);
            }
        }

        //Determines if the new User clicked is already a friend of the current User
        firebase.database()
            .ref(`/friends/${currentUserKey}`)
            .once('value')
            .then((snapshot) => {
                const friendsList = snapshot.val();
                if (friendsList != null) {
                    for (const item in friendsList) {
                        if (friendsList[item].key === selectedUserKey) {
                            setFriend(true);
                        }
                    }
                }
            })
    }, [selectedUserKey]);

    const addFriend = () => {
        firebase.database()
            .ref(`/friends/${currentUserKey}/${selectedUserKey}`)
            .set(userObject)
            .then(() => {
                setFriend(true);
            })
    }

    const removeFriend = () => {
        firebase.database()
            .ref(`/friends/${currentUserKey}/${selectedUserKey}`)
            .remove()
            .then(() => {
                setFriend(false);
            })
    }

    return (

        <Slide
            direction="left"
            in={anchorRightState === 'user'}
            mountOnEnter
            unmountOnExit
        >

            <Grid item xs={12} sm={12} md={12} lg={3} className="view-hangout-details-slide">
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

                <Box mb={2} />
                <Image imageStyle={{borderRadius: 25}} src={userObject.pictureURL ? userObject.pictureURL : noProfile} />

                <Box mb={2} />

                    <Grid container justify="space-between" style={{borderRadius: 25, border: '2px solid #F7F8FA'}}>
                        <Grid container item xs={8} direction="column">
                            <Grid item>
                                <Typography variant="h3" style={{marginLeft: '30px', marginTop: '20px', color: '#3F2165'}}>
                                    {userObject.name}{userObject.isOrg ? "" : ", " + getAge(userObject.dateOfBirth)} {userObject.isVerified || (userObject.isOrg && userObject.isPro) ? <img src={verify} /> : ''}
                                </Typography>

                            </Grid>
                            <Grid item>
                                <Typography variant="h6" style={{marginLeft: '30px', marginBottom: '20px', color: '#B7B7B7'}}>
                                    {userObject.city ? userObject.city : 'Location Unavailable'}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid item xs={2} style={{marginTop: '25px'}}>
                            {friend === true ?
                                <Image src={favoriteIconClick} style={{cursor: "pointer"}} onClick={removeFriend}/> :
                                <Image src={favoriteIconNoClick} style={{cursor: "pointer"}} onClick={addFriend}/>}
                        </Grid>

                    </Grid>

                <Box mb={2} />

                <Grid container direction="column" style={{borderRadius: 25, border: '2px solid #F7F8FA'}}>
                        <Grid item>
                            <Typography variant="h5" style={{marginLeft: '30px', marginTop: '20px', fontWeight: 900}}>
                                About
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" style={{marginLeft: '30px', marginBottom: '20px', fontWeight: 400}}>
                                {userObject.bio}
                            </Typography>
                        </Grid>
                </Grid>

                <Box mb={2} />

                <Grid container justify="space-between">
                    <Grid container item direction="column" xs={5} style={{borderRadius: 25, border: '2px solid #F7F8FA'}}>
                            <Grid item>
                                <Typography variant="h5" style={{marginLeft: '30px', marginTop: '20px', fontWeight: 900}}>
                                    Education
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" style={{marginLeft: '30px', marginBottom: '20px', fontWeight: 400}}>
                                    {userObject.Education ? userObject.Education : 'Education Unavailable'}
                                </Typography>
                            </Grid>
                    </Grid>
                    <Grid container item direction="column" xs={6} style={{borderRadius: 25, border: '2px solid #F7F8FA'}}>
                        <Grid item>
                            <Typography variant="h5" style={{marginLeft: '30px', marginTop: '20px', fontWeight: 900}}>
                                Career
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" style={{marginLeft: '30px', marginBottom: '20px', fontWeight: 400}}>
                                {userObject.Carrer ? userObject.Carrer : 'Career Unavailable'}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Box mb={5} />

                <Grid container>
                    <Typography variant="h4">
                        {userObject.name}'s Hangouts
                    </Typography>
                    <Box mb={5} />
                    <Grid container>
                        { userHangoutHost.length !== 0 ? (
                            userHangoutHost.map((hangout) => (
                            <Grid key={hangout.hangoutID} item xs={12} style={{borderRadius: 25, border: '2px solid #F7F8FA'}}>
                                    <HangoutCardRightPanel
                                    id={hangout.hangoutID}
                                    hangout={hangout}
                                    handleCardClick={handleCardClick}
                                    />
                            </Grid>
                            ))
                            ) : (
                            <Grid item xs={12} style={{ textAlign: 'center' }}>
                                <Typography variant="h5" style={{fontWeight: 400}}>
                                    {userObject.name} does not host any hangouts 😕
                                </Typography>
                            </Grid>
                            )
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Slide>

    )
}

export default UserRightDrawer
