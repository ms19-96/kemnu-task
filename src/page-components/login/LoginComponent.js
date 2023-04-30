import {useState} from "react";
import LoginFirstComponent from "./LoginFirstComponent";
import {useSnackbar} from "notistack";
import {makeStyles} from "@mui/styles";
import {useRouter} from "next/router";

const useStyles = makeStyles(theme => ({
    paper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // flex: '598',
        backgroundColor:'#fff',
        height:'100vh',
        padding:55,
        width:'100%',
        [theme.breakpoints.down('sm')]:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // flex: '598',
            backgroundColor:'#fff',
            height:'100vh',
            padding:20,
            width:'100%',
        }
    },
}));


const LoginComponent = () => {

    const { enqueueSnackbar } = useSnackbar();
    const classes = useStyles();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [emailError,setEmailError] = useState('');
    const [passwordError,setPasswordError] = useState('');
    const Router = useRouter();

    const validate = () =>{
        if (email.trim() === ''){
            setEmailError('Email mustn\'t be empty');
            return false;
        } else if (password.trim() === ''){
            setPasswordError('Password mustn\'t be empty');
            return false;
        } else if (email.trim() !== 'admin@gmail.com'){
            enqueueSnackbar('Invalid emailId', {
                variant: "error",
            });
            return false;
        } else if (password.trim() !== 'Password@1'){
            enqueueSnackbar('Invalid password', {
                variant: "error",
            });
            return false;
        } else {
            setEmailError('');
            setPasswordError('');
            return true
        }
    };

    const login = async () =>{
        if (validate()){
            await localStorage.setItem('email', JSON.stringify(email));
            await localStorage.setItem('password', JSON.stringify(password));
            enqueueSnackbar('Login Successfully', {
                variant: "success",
            });
            await Router.push('/');
        }
    };

    return <div className={classes.paper}>
        <LoginFirstComponent
            email={email}
            emailError={emailError}
            setEmailError={setEmailError}
            setEmail={setEmail}
            password={password}
            setPasswordError={setPasswordError}
            passwordError={passwordError}
            setPassword={setPassword}
            login={login}
        />
    </div>
};

export default LoginComponent;
