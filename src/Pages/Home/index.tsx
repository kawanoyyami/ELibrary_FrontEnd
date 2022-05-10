import Typography from '@material-ui/core/Typography';
import React from 'react';
import NavigationBar from '../../Components/AppBar';

export default function Home() {
  return (
    <>
      <NavigationBar />
      <Typography variant='h5'>Home page</Typography>
    </>
  );
}
