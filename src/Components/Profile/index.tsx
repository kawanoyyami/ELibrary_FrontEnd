import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import SaveIcon from '@material-ui/icons/Save';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { TextField as MaterialTextField, Divider } from '@material-ui/core';
import { IUserResponse } from '../../Models/userModels';
import { getUserId } from '../../Services/Auth/SessionParser';
import { getUserProps } from '../../Services/Users';

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
  item:{
    flex:"50%",
    maxWidth:"50%"
  },
  row:{
    display:"flex",
  }
}));

export default function Profile() {
  const classes = useStyles();
  const [user, setUser] = useState<IUserResponse>({
    fullName: '',
    userName: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    console.log(getUserId(), 'd');
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
        </Container >
        <Container >
          <Grid container spacing={3} className={classes.row}>
            <Grid item xs sm={4}>
            <Field 
                component={TextField}
                variant="standard"
                fullWidth
                values={user.fullName}
                id="fullname"
                label={user.fullName}
                name='fullname'
                autoComplete={user.fullName}
              />
            </Grid>
            <Grid item xs sm={4}>
            <Field
                component={TextField}
                variant="standard"
                fullWidth
                id="email"
                values={user.email}
                label={user.email}
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs sm={4}>
              <Field
                component={TextField}
                variant="standard"
                fullWidth
                id="userName"
                label={user.userName}
                name="userName"
                autoComplete={user.userName}
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
        </Container>
      </Container>
    </div>
  );
}
