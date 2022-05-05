/* eslint-disable react/prop-types */
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { TextField } from 'formik-material-ui';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Formik, Field, Form } from 'formik';
import {  useSnackbar } from 'notistack';
import {Redirect, useHistory } from "react-router-dom";
import { registerSchema } from '../../Models/authModels';
import isLogged from '../../Services/Auth/Login/_isLogged';
import Copyright from '../../Components/Footer';
import useStyles from './_style';
import register from '../../Services/Auth/Register/register';



export default function SignUp() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik
          validationSchema={registerSchema}
          initialValues={{
            userName: '',
            password: '',
            confirmPassword: '',
            email: '',
            firstName: '',
            lastName: ''
          }}
          onSubmit={async (values) => {
            // empty
            try {
              await register(values);
              history.push('/SignIn');

            } catch (e) {
              enqueueSnackbar(e.toString(), {
                variant: 'error'
              });
            }
          }}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    component={TextField}
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    component={TextField}
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={TextField}
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={TextField}
                    variant="outlined"
                    required
                    fullWidth
                    id="userName"
                    label="userName"
                    name="userName"
                    autoComplete="userName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={TextField}
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={TextField}
                    variant="outlined"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="confirmPassword"
                    type="password"
                    id="confirmPassword"
                    autoComplete="confirmPassword"
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
        <Grid container justify="flex-end">
          <Grid item>
            <Link href="/SignIn" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
