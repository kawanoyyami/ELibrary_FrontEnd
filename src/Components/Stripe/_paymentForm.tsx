import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container/Container';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PaymentIcon from '@material-ui/icons/Payment';
import { Stripe } from '@stripe/stripe-js';
import { useElements } from '@stripe/react-stripe-js';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import StarIcon from '@material-ui/icons/StarBorder';
import useStyles from './_style';
import {
  IPortalRespons,
  IProductResponse,
  ISesionResponse,
} from '../../Models/paymentModels';
import { getProducs, getSesionId } from '../../Services/Products';
import { getUserId, isPaidUser } from '../../Services/Auth/SessionParser';
import getUserMembership from '../../Services/Users/getUserMembership';

export default function ProductDisplay(props: {
  stripe: Promise<Stripe>;
}): JSX.Element {
  const classes = useStyles();

  const [sesion, setSession] = useState<ISesionResponse>({ sessionId: '' });
  const [producs, setProducs] = useState<IProductResponse[]>([
    {
      id: '',
      name: '',
      description: '',
      images: '',
      defaultPriceId: '',
      defaultPrice: { unitAmount: 0 },
    },
  ]);

  useEffect(() => {
    getProducs(3).then((v) => setProducs(v as IProductResponse[]));
  }, []);

  async function stripeHandler(data: string) {
    const dataprice = {
      priceId: data,
      UserId: getUserId(),
    };

    getSesionId(dataprice).then((v) => setSession(v as ISesionResponse));
  }

  return (
    <>
      {isPaidUser() ? (
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
          className={classes.heroContent}
        >
          You already have a subscription
        </Typography>
      ) : (
        <Container>
          <div className={classes.heroContent}>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Choose one Subscription
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              component="p"
            >
              A Premium Membership for our users to use our functional without
              restrictions
            </Typography>
          </div>
          <Grid container spacing={3} className={classes.maincard}>
            {producs.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={product.images}
                    title={product.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    {product.description}
                  </CardContent>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Price: {product.defaultPrice.unitAmount / 100}$
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton
                      color="inherit"
                      type="submit"
                      onClick={async () => {
                        try {
                          stripeHandler(product.defaultPriceId);
                          (await props.stripe).redirectToCheckout(sesion);
                        } catch (e) {
                          console.log(e);
                        }
                      }}
                    >
                      <PaymentIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
}
