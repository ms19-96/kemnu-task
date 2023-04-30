import React, {useState} from 'react';
import {Box, Button, Divider, FormControl, InputBase, MenuItem, Select, TextField, Typography} from "@mui/material";
import {withStyles} from "@mui/styles";

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 5,
        position: 'relative',
        backgroundColor: '#F2F2F2',
        fontSize: 12,
        color: '#000',
        padding: '4px 10px 4px 10px',
        transition: theme.transitions.create(['box-shadow']),
    },
}))(InputBase);

const BootstrapInput2 = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 5,
        position: 'relative',
        backgroundColor: '#FFFFFF',
        fontSize: 12,
        color: '#BCBCBC',
        padding: '6px 10px 6px 10px',
        transition: theme.transitions.create(['box-shadow']),
        border:'1px solid #C4C4C4'
    },
}))(InputBase);

const CreateHangoutDialog = () =>{

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [noOfAttendees,setNoOfAttendees] = useState('');
    const [videoLink,setVideoLink] = useState('');

    const [value,setValue] = useState(1);
    const Data = [
        {
            name:'Virtual',
            type:1
        },{
            name:'Physical',
            type:2
        },
    ];
    const [value1,setValue1] = useState(1);
    const Data1 = [
        {
            name:'Free',
            type:1
        },{
            name:'Pay',
            type:2
        },
    ];
    const [value2,setValue2] = useState(1);
    const Data2 = [
        {
            name:'Public',
            type:1
        },{
            name:'Private',
            type:2
        },
    ];
    const [value3,setValue3] = useState(0);
    const Data3 = [
        {
            name:'dance',
            type:1
        },{
            name:'drink',
            type:2
        },
    ];

    return(
        <>
            <Box display={'flex'} flexDirection={'column'} style={{position:'relative'}}>
                <Box p={2} display={'flex'} justifyContent={'center'} flexDirection={'column'} mb={2}>
                    <Typography variant={'body1'}>
                        {'Create Hangout'}
                    </Typography>
                    <Typography variant={'caption'}>
                        {'Specify the details to create a hangout'}
                    </Typography>
                    <Box mt={2}/>
                    <Typography style={{color:'#BBBBBB'}} variant={'caption'}>
                        {'Hangout Type'}
                    </Typography>
                    <Box display={'flex'} justifyContent={'space-between'} mt={1}>
                        <FormControl fullWidth>
                            <Select
                                input={<BootstrapInput />}
                                onChange={(e) => {
                                    setValue(e.target.value);
                                }}
                                value={value}
                            >
                                {Data &&
                                Data.map((each) => (
                                    <MenuItem key={each.type} value={each.type}>
                                        {each.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Box ml={3}/>
                        <FormControl fullWidth>
                            <Select
                                input={<BootstrapInput />}
                                onChange={(e) => {
                                    setValue1(e.target.value);
                                }}
                                value={value1}
                            >
                                {Data1 &&
                                Data1.map((each) => (
                                    <MenuItem key={each.type} value={each.type}>
                                        {each.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box mt={2}/>
                    <FormControl fullWidth>
                        <Select
                            input={<BootstrapInput />}
                            onChange={(e) => {
                                setValue2(e.target.value);
                            }}
                            value={value2}
                        >
                            {Data2 &&
                            Data2.map((each) => (
                                <MenuItem key={each.type} value={each.type}>
                                    {each.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Divider/>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} p={2} flexDirection={'column'}>
                    <TextField
                        fullWidth
                        label="Hangout title"
                        margin="normal"
                        onChange={event => setTitle(event.target.value)}
                        type="text"
                        variant="outlined"
                        value={title}
                        size={'small'}
                    />
                    <Box mt={1}/>
                    <TextField
                        fullWidth
                        id="outlined-multiline-static"
                        placeholder="Description"
                        multiline
                        rows={4}
                        onChange={event => setDescription(event.target.value)}
                        value={description}
                    />
                    <Box mt={1}/>
                    <FormControl fullWidth>
                        <Select
                            input={<BootstrapInput2 />}
                            onChange={(e) => {
                                setValue3(e.target.value);
                            }}
                            value={value3}
                        >
                            <MenuItem value={0}>{'Tags'}</MenuItem>
                            {Data3 &&
                            Data3.map((each) => (
                                <MenuItem key={each.type} value={each.type}>
                                    {each.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        fullWidth
                        label="No. of attendees"
                        margin="normal"
                        onChange={event => setNoOfAttendees(event.target.value)}
                        type="text"
                        variant="outlined"
                        value={noOfAttendees}
                        size={'small'}
                    />
                    <TextField
                        fullWidth
                        label="Video link"
                        margin="normal"
                        onChange={event => setVideoLink(event.target.value)}
                        type="text"
                        variant="outlined"
                        value={videoLink}
                        size={'small'}
                    />
                </Box>
            </Box>
            <Button color={'primary'} variant={'contained'} style={{position:'absolute',bottom:0,width:'93%'}}>
                {'Create Hangout'}
            </Button>
        </>
    );
};

export default CreateHangoutDialog;
