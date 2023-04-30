import React from 'react';
import {Avatar, Box, Divider, Typography} from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const CommentsCard = () =>{
    return(
        <>
            <Box display={'flex'} flexDirection={'column'} mb={2}>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mt={2} mb={2}>
                    <Box display={'flex'}>
                        <Avatar>{'P'}</Avatar>
                        <Box display={'flex'} flexDirection={'column'} ml={2}>
                            <Box display={'flex'}>
                                <Typography variant={'body1'}>
                                    {'Bijay Ranjan'}
                                </Typography>
                            </Box>
                            <Typography variant={'caption'}>
                                {'23 Hrs ago - 0.0 Miles'}
                            </Typography>
                        </Box>
                    </Box>
                    <MoreHorizIcon/>
                </Box>
                <Typography style={{color:'#6B6B6B',wordBreak:'break-all'}} variant={'caption'}>
                    {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum est mattis integer neque vel ipsum. '}
                </Typography>
            </Box>
            <Divider/>
        </>
    );
};

export default CommentsCard;
