/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Formik, Field, Form } from 'formik';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { TextField } from 'formik-material-ui';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import useStyles from './_style';
import { bookAddSchema } from '../../../Models/bookModels';
import api from '../../../Services/axios-config';
import { addBook, updateBook } from '../../../Services/Books';

export default function EditBookModal(propss: { curentbookid: number }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState({
    title: '',
    pageCount: '',
    description: '',
    amazonLink: '',
    imagePath: '',
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setBiij = async (values) => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('title', values.title);
    formData.append('id', propss.curentbookid.toString());
    formData.append('pageCount', values.pageCount);
    formData.append('description', values.description);
    formData.append('amazonLink', values.amazonLink);
    formData.append('imagePath', values.amazonLink);
    try {
      await updateBook(formData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={handleOpen}
      >
        <EditIcon />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5" align="left" gutterBottom>
              <Box sx={{ fontWeight: 'bold' }}>Edit Book Form</Box>
            </Typography>
            <Container>
              <Formik
                validationSchema={bookAddSchema}
                initialValues={{
                  title: '',
                  pageCount: '',
                  description: '',
                  amazonLink: '',
                  imagePath: '',
                }}
                onSubmit={(values) => {
                  // empty
                  setData(values);
                  try {
                    setBiij(values);
                  } catch (e) {
                    enqueueSnackbar(e.toString(), {
                      variant: 'error',
                    });
                  }
                }}
              >
                {(props) => (
                  <Form onSubmit={props.handleSubmit}>
                    <Field
                      component={TextField}
                      autoComplete="title"
                      name="title"
                      variant="outlined"
                      required
                      fullWidth
                      id="title"
                      label="Book Title"
                    />
                    <Field
                      component={TextField}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="description"
                      label="Book Description"
                      name="description"
                      autoComplete="description"
                    />
                    <Field
                      component={TextField}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="pageCount"
                      label="Number of pages"
                      name="pageCount"
                      autoComplete="pageCount"
                    />
                    <Field
                      component={TextField}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="amazonLink"
                      label="Link to Amazon"
                      name="amazonLink"
                      autoComplete="amazonLink"
                    />
                    <Field
                      component={Input}
                      type="file"
                      accept="image/*"
                      placeholder="file"
                      onChange={handleFileSelect}
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Save Cahnges
                    </Button>
                  </Form>
                )}
              </Formik>
            </Container>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
