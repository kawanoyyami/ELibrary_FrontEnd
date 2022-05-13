/* eslint-disable react/prop-types */
import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import Profiled from '../../Components/Profile';
import LibraryLayout from '../../Components/Layout';
import { UserUpdate } from '../../Models/userModels';
import { getUserId } from '../../Services/Auth/SessionParser';
import { updateUser } from '../../Services/Users';

export default function Profile(): JSX.Element {
  return (
    <LibraryLayout>
      <Grid item xs={12} md={8} lg={12}>
        <Paper>
          <Formik
            validationSchema={UserUpdate}
            initialValues={{ userName: '',fullname:'',email:'' }}
            onSubmit={async (values) => {
              await updateUser({
                id: getUserId(),
                userName: values.userName,
                fullName: values.fullname,
                email: values.email,
              });
            }}
          >
            {(props) => (
              <Form onSubmit={props.handleSubmit}>
                <Profiled />
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </LibraryLayout>
  );
}
