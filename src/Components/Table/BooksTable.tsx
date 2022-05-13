/* eslint-disable no-param-reassign */
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container/Container';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import ShowMoreText from 'react-show-more-text';
import Pagination from '@material-ui/lab/Pagination';
import IconButton from '@material-ui/core/IconButton';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import {
  GridColDef,
  GridValueGetterParams,
  DataGrid,
  GridRowId,
} from '@material-ui/data-grid';
import { useSnackbar } from 'notistack';
import { Link, useHistory } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import {
  IBookResponsePaginated,
  IPaginatedRequest,
} from '../../Models/bookModels';
import IErrorResponse from '../../Models/errorModels';
import { deleteBook, getAllBooks, getBooksPaginated } from '../../Services/Books';
import useStyles from './_style';

export default function BooksTable() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [pageIndexTable, setPageIndexTable] = useState(0);
  const [pageSizeTable, setPageSizeTable] = useState(0);


  const [books, setBooks] = useState<IBookResponsePaginated>({
    pageIndex: 0,
    pageSize: 0,
    total: 0,
    items: [
      { id: 0, title: '', isFree: false, imagePath: '', description: '' },
    ],
  });

  useEffect(() => {
    getBooksPaginated({
      pageIndex: 0,
      pageSize: 10,
    }).then((v) => setBooks(v as IBookResponsePaginated));
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 91 },
    { field: 'title', headerName: 'Book Title', width: 380 },
    { field: 'isFree', headerName: 'Status', width: 259 },
    {
      field: 'Remove',
      headerName: '',
      width: 180,
      // eslint-disable-next-line react/display-name
      renderCell: (params: GridValueGetterParams) => (
        <IconButton color="primary" aria-label="add an alarm">
          <RemoveCircleOutlineOutlinedIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
        Books Table
      </Typography>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={books.items}
          columns={columns}
          pageSize={5}
          onCellClick={async (e) => {
            if (books.items.filter((x) => x.isFree !== false)) {
              books.items.map((x) => x.isFree.valueOf());
            }
            if (e.field === 'Remove') {
              try {
                await deleteBook(parseInt(e.id.toString(), 10));

                books.items.filter((x) => x.id.toString() !== e.id.toString());

                enqueueSnackbar('Removed with success', {
                  variant: 'success',
                });
              } catch (error) {
                console.log(error);
                enqueueSnackbar(error.toString(), { variant: 'error' });
              }
            }
          }}
        />
      </div>
      <Box textAlign="left">
        <Button
          component={Link}
          to="/Book/update"
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<EditIcon />}
          className={classes.submit}
        >
          Update Book
        </Button>
      </Box>
    </Container>
  );
}
