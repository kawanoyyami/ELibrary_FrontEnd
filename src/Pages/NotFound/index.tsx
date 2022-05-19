import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import LibraryLayout from '../../Components/Layout';

const useStyles = makeStyles((theme) => ({
    root:{
        display:'flex',
        flexDirection:'column',
        alignItems:"center"
    },
  text:{
      fontSize:'1.5rem',
      lineHeight:'2rem',
      fontWeight:600,
  },
  image:{
      width:'400px'
  }
}));

export default function NotFound():JSX.Element {
  const classes = useStyles();
  return (
    <LibraryLayout>
      <div className={classes.root}>
        <img
          className={classes.image}
          data-v-182e9157=""
          src="https://mangadex.org/_nuxt/a276b11ddbc28a0a01a1220429598365.svg"
          alt="Cat napping on a pile of books"
        />
        <p data-v-182e9157="" className={classes.text}>
          Page Not Found
        </p>
      </div>
    </LibraryLayout>
  );
}
