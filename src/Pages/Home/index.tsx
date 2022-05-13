import { Grid, Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import BooksLayout from '../../Components/Books';
import FileUpload from '../../Components/CsvUpload';
import LibraryLayout from '../../Components/Layout';

export default function Home(): JSX.Element {
  return (
    <LibraryLayout>  
          <BooksLayout />
    </LibraryLayout>
  );
}
