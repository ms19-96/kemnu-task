import React from 'react';
import {Avatar, Box, Divider, Typography} from "@mui/material";

import FavoritesCardComponent from "./FavoritesCardComponent";


const ProfileComponent = ({each}) =>{
    return(
        <>
            <Box display={'flex'} flexDirection={'column'} p={2} mt={2} alignItems={'center'} justifyContent={'center'}>
                <Avatar style={{height:75,width:75}}>
                    {each?.postedBy?.charAt(0)}
                </Avatar>
                <Box mt={1}/>
                <Typography>{each?.postedBy}</Typography>
                <Box mt={1}/>
                <Typography variant={'caption'}>{'Lorem ipsum dolor sit amet,'}</Typography>
                <Typography variant={'caption'}>{' consectetur adipiscing elit. Interdum'}</Typography>
                <Typography variant={'caption'}>{' est mattis...'}</Typography>
                <Box display={'flex'} alignItems={'center'} mt={1.5} p={'5px 23px 5px 23px'} justifyContent={'center'} bgcolor={'#EAF9DE'} borderRadius={5}>
                    <Typography variant={'caption'} sx={{color:'green',fontWeight: 600}}>
                        {'view profile'}
                    </Typography>
                </Box>
            </Box>
            <Divider/>
            <Box p={2} display={'flex'} flexDirection={'column'}>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Typography variant={'caption'}>
                        {'Favourites'}
                    </Typography>
                </Box>
                <Box mt={2}/>
                <FavoritesCardComponent/><Box mt={2}/>
                <FavoritesCardComponent/><Box mt={2}/>
                <FavoritesCardComponent/><Box mt={2}/>
                <FavoritesCardComponent/>
            </Box>
        </>
    );
};

export default ProfileComponent;
