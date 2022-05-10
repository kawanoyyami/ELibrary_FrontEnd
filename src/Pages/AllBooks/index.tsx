/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-curly-brace-presence */
import { Container, Grid, TextField, Typography } from '@material-ui/core';
import { Pagination ,PaginationItem} from '@material-ui/lab';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavigationBar from '../../Components/AppBar';
import Copyright from '../../Components/Footer';
import api from '../../Services/axios-config';

type Pagin = {
  total: number;
  pageSize: number;
  pageIndex: number;
  items: {
    id: number;
    title: string;
    imagePath: string;
    isFree: boolean;
    pageCount: number;
  };
};
export default function AllBooks() {
  const [index, setIndex] = useState(0);
  const [size, setSize] = useState(10);
  const [search, setSearch] = useState('');
  const [pageQty, setPageQty] = useState(10);
  useEffect(() => {
    api()
      .post(`/Book/paginated-search`, {
        pageIndex: 0,
        pageSize: 10,
      })
      .then(({ data }) => console.log(data));
  }, []);

  return (
    <>
      <NavigationBar />
      <Typography variant='h5'>Pagination</Typography>
      <Container>
        <TextField
          fullWidth
          label="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
            {!!pageQty &&(
                <Pagination count={pageQty} page = {0} showFirstButton showLastButton
                renderItem={(item) => (
                    <PaginationItem 
                     {...item}/>
                )}
              />
            )}
      </Container>
      <Copyright/>
    </>
  );
}
