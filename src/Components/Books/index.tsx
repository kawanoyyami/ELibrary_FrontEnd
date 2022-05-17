/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container/Container';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import ShowMoreText from 'react-show-more-text';
import Pagination from '@material-ui/lab/Pagination';
import IconButton from '@material-ui/core/IconButton';
import PageviewIcon from '@material-ui/icons/Pageview';
import { IBookResponsePaginated } from '../../Models/bookModels';
import { getBooksPaginated } from '../../Services/Books';
import useStyles from './_style';
import EditBookModal from './EditBookModal';
import { isAdmin } from '../../Services/Auth/SessionParser';
import DeleteBook from '../DeleteBook';

export default function BooksLayout(): JSX.Element {
  const classes = useStyles();
  const [expand, setExpand] = useState(false);
  const onClick = () => {
    setExpand(!expand);
  };

  const [page, setPage] = useState(0);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value - 1);
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
      },
    ],
  });

  const count = Math.ceil(books.total / 9);

  useEffect(() => {
    getBooksPaginated({
      pageIndex: page,
      pageSize: 9,
    }).then((v) => setBooks(v as IBookResponsePaginated));
  }, [page + 1]);

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
        All our Books
      </Typography>
      <div className={classes.pagination}>
        <Pagination
          count={count}
          showFirstButton
          showLastButton
          onChange={handleChange}
          page={page + 1}
        />
      </div>
      <Grid container spacing={3}>
        {books.items.map((book) => (
          <Grid item key={book.id} xs={12} sm={6} md={4}>
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
                <IconButton
                  color="inherit"
                >
                  <PageviewIcon />
                </IconButton>
                {isAdmin() ? <EditBookModal curentbookid={book.id} /> : '' }
                {isAdmin() ? <DeleteBook curentIdBook={book.id} /> : '' }
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
