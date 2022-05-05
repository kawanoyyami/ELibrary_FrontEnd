/* eslint-disable import/extensions */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { TextField } from 'formik-material-ui';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Formik, Field, Form } from 'formik';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';
import { authSchema } from '../../Models/authModels';
import { login } from '../../Services/Auth/Login';
import Copyright from '../../Components/Footer';
import useStyles from './_style';

const SignIn = function (): JSX.Element {
  const classes = useStyles();
  const history = useHistory();

  const { enqueueSnackbar } = useSnackbar();
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          validationSchema={authSchema}
          initialValues={{
            userName: '',
            password: ''
          }}
          onSubmit={async (values) => {
            // empty
            try {
              await login(values);
              history.push('/');
            } catch (e) {
              console.log(e);
              enqueueSnackbar(e.toString(), {
                variant: 'error'
              });
            }
          }}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit}>
              <Field
                component={TextField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="userName"
                label="userName"
                name="userName"
                autoComplete="userName"
                autoFocus
              />
              <Field
                component={TextField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
            </Form>
          )}
        </Formik>
        <Grid container>
          <Grid item xs>
            <Link href="/forgot-password" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/SignUp" variant="body2">
              {"Don't have an account? Sign up!"}
            </Link>
          </Grid>
        </Grid>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default SignIn;
