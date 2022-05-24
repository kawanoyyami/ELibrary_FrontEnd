/* eslint-disable react/jsx-curly-brace-presence */
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container/Container';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShowMoreText from 'react-show-more-text';
import Pagination from '@material-ui/lab/Pagination';
import InputBase from '@material-ui/core/InputBase';
import { useDebounce } from 'use-debounce';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import PageviewIcon from '@material-ui/icons/Pageview';
import IconButton from '@material-ui/core/IconButton';
import { IBookResponsePaginated } from '../../Models/bookModels';
import { getBooksPaginated } from '../../Services/Books';
import useStyles from './_style';
import EditBookModal from './EditBookModal';
import {
  isAdmin,
  isFreeUser,
  isPaidUser,
} from '../../Services/Auth/SessionParser';
import DeleteBook from '../DeleteBook';
import BookView from './BookView';

export default function BooksLayout(): JSX.Element {
  const classes = useStyles();
  const [expand, setExpand] = useState(false);
  const [searchTitile, setSearchTitile] = useState(' ');
  const [debounceSearchItem] = useDebounce(searchTitile, 500);
  const onClick = () => {
    setExpand(!expand);
  };
  const [page, setPage] = useState(0);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value - 1);
  };

  const handleSearch = (e) => {
    setSearchTitile(e.target.value);
  };

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

  const [books, setBooks] = useState<IBookResponsePaginated>({
    pageIndex: 0,
    pageSize: 0,
    total: 0,
    items: [
      {
        id: 0,
        title: '',
        isFree: false,
        imagePath: 'default.png',
        description: '',
        amazonLink: '',
        bookName: '',
      },
    ],
  });

  const count = Math.ceil(books.total / 9);

  useEffect(() => {
    if (debounceSearchItem) {
      getBooksPaginated({
        pageIndex: page,
        pageSize: 9,
        columnNameForSorting: 'id',
        sortDirection: 'asc',
        requestFilters: {
          filters: [{ path: 'title', value: searchTitile }],
          logicalOperator: 0,
        },
      }).then((v) => setBooks(v as IBookResponsePaginated));
    } else {
      getBooksPaginated({
        pageIndex: page,
        pageSize: 9,
        columnNameForSorting: 'id',
        sortDirection: 'asc',
      }).then((v) => setBooks(v as IBookResponsePaginated));
    }
  }, [page + 1, debounceSearchItem]);

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
        All our Books
      </Typography>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          fullWidth
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleSearch}
        />
      </div>
      <div className={classes.pagination}>
        <Pagination
          count={count}
          showFirstButton
          showLastButton
          onChange={handleChange}
          page={page + 1}
        />
      </div>
      <Grid container spacing={2}>
        {books.items.map((book) => (
          <Grid item key={book.id} xs={12} sm={3} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={`https://localhost:7001/Resources/bookimages/${book.imagePath}`}
                title={book.title}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {book.title}
                </Typography>
                <ShowMoreText
                  lines={2}
                  more="Show"
                  less="Less"
                  onClick={onClick}
                  expanded={expand}
                  width={250}
                >
                  {book.description}
                  <a href={book.amazonLink}>
                    <Button size="small" color="primary">
                      Buy on Amazon
                    </Button>
                  </a>
                </ShowMoreText>
              </CardContent>
              <CardActions>
                {isPaidUser() ? (
                  <BookView
                    pageUrl={`https://localhost:7001/Resources/bookspdf/${book.bookName}`}
                  />
                ) : (
                  <div>
                    <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="open drawer"
                      onClick={handleClick}
                      className={classes.submit}
                    >
                      <PageviewIcon />
                    </IconButton>
                    <Snackbar
                      open={open}
                      autoHideDuration={6000}
                      onClose={handleClose}
                      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    >
                      <Alert onClose={handleClose} severity="error">
                        You need to be subscribed!!
                      </Alert>
                    </Snackbar>
                  </div>
                )}

                {isAdmin() ? (
                  <EditBookModal
                    curentbookid={book.id}
                    title={book.title}
                    description={book.description}
                    amazonLink={book.amazonLink}
                  />
                ) : (
                  ''
                )}
                {isAdmin() ? <DeleteBook curentIdBook={book.id} /> : ''}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div className={classes.pagination}>
        <Pagination
          count={count}
          showFirstButton
          showLastButton
          onChange={handleChange}
          page={page + 1}
        />
      </div>
    </Container>
  );
}
