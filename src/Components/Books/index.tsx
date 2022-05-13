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
import {
  IBookResponsePaginated,
  IPaginatedRequest,
} from '../../Models/bookModels';
import IErrorResponse from '../../Models/errorModels';
import { getAllBooks, getBooksPaginated } from '../../Services/Books';
import useStyles from './_style';

export default function BooksLayout() {
  const classes = useStyles();
  const [expand, setExpand] = useState(false);
  const onClick = () => {
    setExpand(!expand);
  };
  const [page,setPage] =useState(0);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value-1);
  }; 
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
      pageIndex: page,
      pageSize: 9,
    }).then((v) => setBooks(v as IBookResponsePaginated));
  }, [page]);

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
        All our Books
      </Typography>
      <Grid container spacing={3}>
        {books.items.map((book) => (
          <Grid item key={book.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={book.imagePath}
                title={book.title}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {book.title}
                </Typography>
                <ShowMoreText
                  lines={3}
                  more="Show"
                  less="Less"
                  onClick={onClick}
                  expanded={expand}
                  width={250}
                >
                  {book.description}
                </ShowMoreText>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div className={classes.pagination}>
        <Pagination count={10} showFirstButton showLastButton onChange={handleChange}/>
      </div>
    </Container>
  );
}
