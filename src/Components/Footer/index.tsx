import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import useStyles from './_style';

export default function Copyright() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/kawanoyyami">
          ELibrary
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
      </footer>
  );
}
