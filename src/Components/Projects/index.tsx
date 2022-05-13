import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import { Link, useHistory } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import {
  GridColDef,
  GridValueGetterParams,
  DataGrid,
  GridRowId,
} from '@material-ui/data-grid';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import { useSnackbar } from 'notistack';
import CustomPaginationActionsTable from '../Table/BooksTable';
import { getUserId } from '../../Services/Auth/SessionParser';
import { deleteProject, getAllProjects } from '../../Services/Projects';
import {
  IProjectResponse,
  IProjectResponseWithUserData,
} from '../../Models/projectModels';

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
}));

export default function Projects() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const [projects, setProjects] = useState<IProjectResponseWithUserData>({
    userName: '',
    fullName: '',
    projects: [{ id: 0, name: '' }],
  });

  const history = useHistory();

  console.log();

  useEffect(() => {
    getAllProjects(getUserId()).then((v) =>
      setProjects(v as IProjectResponseWithUserData)
    );
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 91 },
    { field: 'name', headerName: 'Project Name', width: 170 },
    { field: 'reports', headerName: 'Reports', width: 180 },
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
    <Container>
      <Container>
        <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
          <Box sx={{ fontWeight: 'bold' }}>User Projects</Box>
        </Typography>
      </Container>
      <Container>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={projects.projects}
            columns={columns}
            pageSize={5}
            onCellClick={async (e) => {
              if (e.field === 'Remove') {
                try {
                  await deleteProject(parseInt(e.id.toString(), 10));

                  projects.projects.filter(
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
      </Container>
      <Box textAlign="center">
        <Button
          component={Link}
          to="/Projects/add"
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          className={classes.submit}
        >
          Add Project
        </Button>
      </Box>
    </Container>
  );
}
