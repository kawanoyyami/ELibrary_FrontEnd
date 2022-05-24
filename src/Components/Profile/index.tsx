/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import { Field, Form, Formik, useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import { IUserResponse, UserUpdate } from '../../Models/userModels';
import {
  getUserId,
  isAdmin,
  isPaidUser,
} from '../../Services/Auth/SessionParser';
import { getUserProps, updateUser } from '../../Services/Users';
import { IPortalRespons } from '../../Models/paymentModels';
import getUserMembership from '../../Services/Users/getUserMembership';
import MembershipButton from './MembershipButton/MembershipButton';

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
  item: {
    flex: '50%',
    maxWidth: '50%',
  },
  row: {
    display: 'flex',
  },
}));

export default function Profile(): JSX.Element {
  const classes = useStyles();
  const [user, setUser] = useState<IUserResponse>({
    fullName: '',
    userName: '',
    email: '',
    phone: '',
  });
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    getUserProps(getUserId()).then((v) => setUser(v as IUserResponse));
  }, []);

  return (
    <div>
      <Container>
        <Container>
          <Typography
            variant="h5"
            align="left"
            color="textPrimary"
            gutterBottom
          >
            <Box sx={{ fontWeight: 'bold' }}>User Profile</Box>
          </Typography>
        </Container>
        <Container>
          <Formik
            validationSchema={UserUpdate}
            initialValues={{
              userName: `${user.userName}`,
              fullname: `${user.fullName}`,
              email: `${user.email}`,
            }}
            onSubmit={async (values) => {
              try {
                await updateUser({
                  id: getUserId(),
                  userName: values.userName,
                  fullName: values.fullname,
                  email: values.email,
                });
              } catch (e) {
                enqueueSnackbar(e.toString(), {
                  variant: 'error',
                });
              }
            }}
          >
            {(props) => (
              <Form onSubmit={props.handleSubmit}>
                <Grid container spacing={3} className={classes.row}>
                  <Grid item xs sm={4}>
                    <Field
                      component={TextField}
                      name="userName"
                      variant="outlined"
                      value={props.values.userName}
                      required
                      fullWidth
                      id="userName"
                      label="Username"
                    />
                  </Grid>
                  <Grid item xs sm={4}>
                    <Field
                      component={TextField}
                      name="fullname"
                      variant="outlined"
                      fullWidth
                      id="fullname"
                      label="Full Name"
                    />
                  </Grid>
                  <Grid item xs sm={4}>
                    <Field
                      component={TextField}
                      variant="outlined"
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                </Grid>
                <Box textAlign="left">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                    className={classes.submit}
                  >
                    Save
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
          {isPaidUser() ? <MembershipButton /> : ''}
        </Container>
      </Container>
    </div>
  );
}
