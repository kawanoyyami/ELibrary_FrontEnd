import { Button, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import { IPortalRespons } from '../../../Models/paymentModels';
import getUserMembership from '../../../Services/Users/getUserMembership';

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function MembershipButton(): JSX.Element {
  const classes = useStyles();
  const [portalUrl, setPortalUrl] = useState<IPortalRespons>({ url: '' });

  useEffect(() => {
    getUserMembership({
      returnUrl: 'http://localhost:3000/',
    }).then((v) => setPortalUrl(v as IPortalRespons));
  }, []);
  return (
    <Button
      variant="contained"
      color="primary"
      href={portalUrl.url}
      startIcon={<CreditCardIcon />}
      className={classes.submit}
    >
      View Membershimp Option
    </Button>
  );
}
