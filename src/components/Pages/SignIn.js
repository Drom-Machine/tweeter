import React from 'react';
import { useDispatch } from 'react-redux';
import { signInAction } from '../../ReduxStore/userState';
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom';
import { spacing } from '@mui/system';
import { Box, Typography, Card, CardContent, CardActions,Button, Stack, TextField } from '@mui/material';


function SignIn() {

    const dispatch = useDispatch();

    const handleUserLogIn = () =>  {
            dispatch(signInAction())
        };
    
    return (
        <Layout>
            <Box sx={{
                mx: 'auto',
                minWidth: 300,
                p: 2,
                m: 'auto',
                textAlign: 'center',
                fontSize: '0.875rem',
                fontWeight: '700',
            }}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent >
                        <Stack
                            component="form"
                            sx={{
                                width: '30ch',
                                m: 'auto'
                            }}
                            spacing={2}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                hiddenLabel
                                id="filled-hidden-label-small"
                                defaultValue="your.email@goeshere.com"
                                variant="filled"
                                size="small"
                            />
                            <TextField
                                hiddenLabel
                                id="filled-hidden-label-normal"
                                defaultValue="Password"
                                variant="filled"
                                size="small"
                            />
                        </Stack>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Link to="/secured-homepage">
                            <Button onClick={handleUserLogIn} variant='contained'>Log In User</Button>
                        </Link>
                    </CardActions>
                </Card>
            </Box>
    </Layout>
    )
}

export default SignIn