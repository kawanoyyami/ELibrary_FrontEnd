import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  title: {
    flexGrow: 1,
    padding: theme.spacing(2, 1, 0),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    // padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 0, 2),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  maincard: {
    marginTop: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '88%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  pagination: {
    marginTop: theme.spacing(2),
    justifyContent: 'center',
    display: 'flex',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

export default useStyles;
