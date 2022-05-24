import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import LibraryLayout from '../../Components/Layout';
import refreshToken from '../../Services/Guard/refreshToken';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontSize: '1.5rem',
    lineHeight: '2rem',
    fontWeight: 600,
  },
  textsorry: {
    fontSize: '1.25rem',
    lineHeight: 'rem',
    fontWeight: 500,
  },
  image: {
    width: '175px',
  },
}));

export default function SuccessPayment(): JSX.Element {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <body onLoad={handleClick}>
      <SnackbarProvider maxSnack={1}>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert onClose={handleClose} severity="success">
            Membership succesful created!
          </Alert>
        </Snackbar>
        <LibraryLayout>
          {refreshToken()}
          <Grid xs={12} md={8} lg={12}>
            <Paper>
              <div className={classes.root}>
                <img
                  className={classes.image}
                  data-v-182e9157=""
                  src="https://cdn0.iconfinder.com/data/icons/black-friday-filled-line-2/64/commerce_market_discount_card_credit_payment_success-512.png"
                  alt="Payment Fail"
                />
                <p data-v-182e9157="" className={classes.text}>
                  Payment success!
                </p>

                <p data-v-182e9157="" className={classes.textsorry}>
                  Thank you for support, now you have a premium subscription,
                  please enjoy and have a great experience with our website
                </p>
              </div>
            </Paper>
          </Grid>
        </LibraryLayout>
      </SnackbarProvider>
    </body>
  );
}
