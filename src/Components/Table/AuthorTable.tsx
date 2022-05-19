/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container/Container';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import {
  GridColDef,
  GridValueGetterParams,
  DataGrid,
} from '@material-ui/data-grid';
import { useSnackbar } from 'notistack';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { IBookResponseWithAuthor } from '../../Models/bookModels';
import { deleteBook, getAllBooks } from '../../Services/Books';
import useStyles from './_style';
import getBookWithAuthors from '../../Services/Books/_getBookWithAuthors';
import { IBookResponse } from '../../Models/authorModels';

export default function AuthorTable(): JSX.Element {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [searchId, setSerachId] = useState<{ id: number; title: string }>({
    id: 10,
    title: '',
  });
  const [authors, setAuthors] = useState<IBookResponseWithAuthor>({
    id: 0,
    title: '',
    authors: [
      {
        id: 0,
        fullName: '',
        dob: new Date(),
        areaOfInteresnt: '',
      },
    ],
  });

  const [books, setBooks] = useState<IBookResponse[]>([
    { id: 0, title: '', isFree: false, imagePath: '', description: '',amazonLink:'',bookName:'' },
  ]);

  useEffect(() => {
    getAllBooks().then((v) => setBooks(v as IBookResponse[]));
  }, []);

  useEffect(() => {
    getBookWithAuthors(searchId.id).then((v) =>
      setAuthors(v as IBookResponseWithAuthor)
    );
  }, [searchId]);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 91 },
    { field: 'fullName', headerName: 'Full name', width: 200 },
    { field: 'dob', headerName: 'Date of Birth', width: 160 },
    { field: 'areaOfInteresnt', headerName: 'Area Of Interesnt', width: 256 },
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
        Serach Authors of one Book by Titile
      </Typography>
      <Autocomplete
        disableClearable
        id="search-auhor"
        options={books.map((options) => ({
          id: options.id,
          title: options.title,
        }))}
        getOptionLabel={(option) => option.title}
        onChange={(event, value) =>
          setSerachId(value as { id: number; title: string })
        }
        renderInput={(params) => (
          <TextField
            {...params}
            label="Book Title"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={authors.authors}
          columns={columns}
          pageSize={5}
          onCellClick={async (e) => {
            if (e.field === 'Remove') {
              try {
                await deleteBook(parseInt(e.id.toString(), 10));

                authors.authors.filter(
                  (x) => x.id.toString() !== e.id.toString()
                );

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
          to="/Author/update"
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<EditIcon />}
          className={classes.submit}
        >
          Update Author
        </Button>
      </Box>
    </Container>
  );
}
