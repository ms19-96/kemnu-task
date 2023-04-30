import React from 'react';
import {Box, Drawer, Hidden, SwipeableDrawer} from "@mui/material";
import {drawerWidth} from "./RightDrawerProvider";
import {makeStyles} from "@mui/styles";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CancelIcon from '@mui/icons-material/Cancel';

const useStyles = makeStyles({
    paper: {
        background: "transparent",
        border: 'none'
    }
});

function RightDrawer({
                         dialogOpen,
                        setDialogOpen,
                        direction = 'right',
                        Component
}) {
    const classes = useStyles();
    return (
        // <ThemeProvider theme={theme}>
        <div>
            <Hidden smDown >
            <Drawer
                open={dialogOpen}
                variant={'persistent'}
                onClose={()=> setDialogOpen(false)}
                anchor={direction}
                elevation={24}
                classes={{ paper: classes.paper }}
            >
                <Box
                     width={drawerWidth}
                     display={'flex'}
                     height={'100%'}
                     alignItems={'start'}
                >
                    <Box flexGrow={1} bgcolor={'white'} height={'100vh'}>
                        <CancelIcon sx={{
                            cursor : 'pointer',
                            position: 'absolute',
                            right: 1,
                            zIndex: 5
                        }}
                                    onClick={()=> setDialogOpen(false)}
                        />
                        {Component && <Component/>}
                    </Box>

                </Box>
            </Drawer>
            </Hidden>
            <Hidden smUp>
                <SwipeableDrawer
                    anchor="bottom"
                    open={dialogOpen}
                    onClose={()=> setDialogOpen(false)}
                    onOpen={()=> setDialogOpen(true)}
                    disableSwipeToOpen={false}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    <Box flexGrow={1} bgcolor={'white'} height={'100vh'} sx={{
                        position:'relative'
                    }}>
                        <CancelIcon sx={{
                            cursor : 'pointer',
                            position: 'absolute',
                            right: 1,
                            zIndex: 5
                        }}
                        onClick={()=> setDialogOpen(false)}
                        />
                            {Component && <Component/>}


                    </Box>
                </SwipeableDrawer>
            </Hidden>
        </div>

        // </ThemeProvider>
    );
}

export default RightDrawer;
