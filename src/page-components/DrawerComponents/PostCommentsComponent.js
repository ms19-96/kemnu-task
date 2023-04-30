import React from 'react';
import {Avatar, Box, Divider, Typography} from "@mui/material";
import CommentsCard from "./CommentsCard";

const PostsCommentComponent = () =>{

    return(
        <>
            <Box display={'flex'} p={2} alignItems={'center'} bgcolor={'#FAECFF'} position={'relative'}>
                <Box display={'flex'}>
                    <Avatar>{'P'}</Avatar>
                    <Box display={'flex'} flexDirection={'column'} ml={2}>
                        <Box display={'flex'}>
                            <Typography variant={'body1'}>
                                {'Bijay Ranjan'}
                            </Typography>
                            <Box ml={1}/>
                            <Typography variant={'body1'} style={{color:'#6D2CB0'}}>
                                {'Gossip'}
                            </Typography>
                        </Box>
                        <Typography variant={'caption'}>
                            {'23 Hrs ago - 0.0 Miles'}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box p={3} display={'flex'} flexDirection={'column'}>
                <Typography>
                    {'Comments'}
                </Typography>
                <Box mt={2}/>
                <Divider/>
                <CommentsCard/>
            </Box>
        </>
    );
};

export default PostsCommentComponent;