import React from "react";
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import Layout from '../src/components/DefaultLayout';
import {useEffect, useState} from 'react';
import {SnackbarProvider} from "notistack";
import {useRouter} from "next/router";

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    const Router = useRouter();

    const [loading, setLoading] = useState(false);
    let email;
    let password;
    useEffect(() => {
        if (typeof window !== undefined) {
            email = JSON.parse(localStorage.getItem('email'));
            password = JSON.parse(localStorage.getItem('password'));
        }
    }, []);

    useEffect(() => {
        setLoading(true);
        if (email !== null || password !== null) {
            Router.push('/');
            setLoading(false);
        }
        else {
            Router.push('/login');
            setLoading(false);
        }
    }, [])


    return (
        <SnackbarProvider>
            <CacheProvider value={emotionCache}>
                <Head>
                    <title>Kemnu Task</title>
                    <meta content="initial-scale=1, width=device-width" name="viewport" />
                </Head>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {
                        loading ? <Loader /> :
                            <Layout>
                                <Component{...pageProps} />
                            </Layout>
                    }

                </ThemeProvider>
            </CacheProvider>
        </SnackbarProvider>

    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
};
