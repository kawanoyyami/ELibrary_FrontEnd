import React from 'react';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { Button } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import useToolbarStyles from './_style';
import { deleteBook } from '../../../Services/Books';

interface EnhancedTableToolbarProps {
  numSelected: number;
}

const EnhancedTableToolbar = (
  props: EnhancedTableToolbarProps
): JSX.Element => {
  const classes = useToolbarStyles();
  const { numSelected } = props;
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Table With All Books
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <Button
            onClick={async () => {
              try {
                await deleteBook(parseInt(numSelected.toString(), 10));

                enqueueSnackbar('Removed with success', {
                  variant: 'success',
                });
              } catch (error) {
                enqueueSnackbar(error.toString(), { variant: 'error' });
              }
            }}
          >
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Button>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

export default EnhancedTableToolbar;
