import React from 'react'
import favoriteIconClick from '../../../public/icons/ic_favoriteSelected.svg';
import verify from '../../../public/icons/verifyIcon.png';
import getAge from "../../components/getAge";
import {Avatar, Grid, Typography} from "@mui/material";
import Image from 'next/image';

const FriendBox = (props) => {
    const {friend} = props;

    /*
        Properly removes a friend from the friends list that is displayed in
        the default view. Also changes the friendsList state object so the
        front-end is re-rendered to the updated firebase friends List.
    */
    const removeFriend = () => {
        // firebase.database()
        //     .ref(`/friends/${firebase.auth().currentUser.uid}/${friend.key}`)
        //     .remove()
        //     .then(() => {
        //         const newFriendsList = friendsList.filter((value) => {
        //             return (value.key !== friend.key);
        //         })
        //         setFriendsList(newFriendsList);
        //     })
    }

    return (
        <Grid key={friend.key} container item style={{borderRadius: 15, border: '2px solid #F7F8FA', padding: '15px', marginTop: '5px', marginBottom: '5px'}}>
            <Grid item xs={2}>
                <Avatar
                    src={friend.pictureURL}
                />
            </Grid>
            <Grid container item xs={8} direction="column">
                <Grid item>
                    <Typography variant="h5" style={{color: '#3F2165'}}>
                    {friend.name}{friend.isOrg ? "" : ", " + getAge(friend.dateOfBirth)} {friend.isVerified || (friend.isOrg && friend.isPro) ? <Image src={verify} /> : ''}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h6" style={{color: '#B7B7B7'}}>
                    {friend.city ? friend.city : 'Location Unavailable'}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={2} style={{marginLeft: '0px'}}>
                <Image src={favoriteIconClick} style={{cursor: 'pointer'}} onClick={removeFriend}/>
            </Grid>
        </Grid>
    )
}

export default FriendBox
