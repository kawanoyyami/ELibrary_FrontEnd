import { Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import LibraryLayout from '../../Components/Layout'
import AuthorTable from '../../Components/Table/AuthorTable'

export default function Authors() {
  return (
    <LibraryLayout>
      <Grid xs={12} md={8} lg={12}>
        <Paper>
          <AuthorTable />
        </Paper>
      </Grid>
    </LibraryLayout>
  )
}
