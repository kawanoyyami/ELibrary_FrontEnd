import React from 'react';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import Grid from '@material-ui/core/Grid';

export default function newProject(): JSX.Element {
  return (
    <>
      <Grid item xs sm={4}>
        <Field
          component={TextField}
          autoComplete="Project Name"
          name="projectName"
          variant="outlined"
          required
          fullWidth
          id="projectName"
          label="Project Name"
          autoFocus
        />
      </Grid>
    </>
  );
}
