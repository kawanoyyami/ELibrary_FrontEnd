/* eslint-disable react/no-unused-prop-types */
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useSnackbar } from 'notistack';
import React from 'react';
import { deleteBook } from '../../Services/Books';

export default function DeleteBook(props: {
  curentIdBook: number;
}): JSX.Element {
  const { enqueueSnackbar } = useSnackbar();
  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
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
      >
        <DeleteForeverIcon />
      </IconButton>
    </>
  );
}
