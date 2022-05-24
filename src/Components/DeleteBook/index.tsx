/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/no-unused-prop-types */
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useSnackbar } from 'notistack';
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { deleteBook } from '../../Services/Books';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    submit: {
      margin: theme.spacing(1, 0, 0),
    },
  })
);
export default function DeleteBook(props: {
  curentIdBook: number;
}): JSX.Element {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={handleClickOpen}
        className={classes.submit}
      >
        <DeleteForeverIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Are u sure want to delete this book?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Action will delete book permanently and can&apos;t be revoke
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Back</Button>
          <Button
            onClick={async () => {
              try {
                await deleteBook(parseInt(props.curentIdBook.toString(), 10));

                enqueueSnackbar('Removed with success', {
                  variant: 'success',
                });
              } catch (error) {
                enqueueSnackbar(error.toString(), { variant: 'error' });
              }
            }}
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
