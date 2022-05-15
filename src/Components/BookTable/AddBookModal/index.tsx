/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Formik, Field, Form } from 'formik';
import { useHistory } from "react-router-dom";
import { useSnackbar } from 'notistack';
import { TextField } from 'formik-material-ui';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import useStyles from './_style';
import { registerSchema } from '../../../Models/authModels';
import register from '../../../Services/Auth/Register/register';
import { bookAddSchema } from '../../../Models/bookModels';




export default function TransitionsModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const history = useHistory();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <ButtonGroup disableElevation variant="contained" color="primary">
                <Button onClick={handleOpen}>
                    <AddIcon />Add Book
                </Button>
            </ButtonGroup>
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
                        <Typography component="h1" variant="h5" align='center'>
                            Add Book Form
                        </Typography>
                        <Formik
                            validationSchema={bookAddSchema}
                            initialValues={{
                                title: '',
                                description: '',
                                imageName: '',
                                imageSrc: '',
                                imageFile: null

                            }}
                            onSubmit={async (values) => {
                                // empty
                                // try {
                                //     await addbook(values);

                                // } catch (e) {
                                //     enqueueSnackbar(e.toString(), {
                                //         variant: 'error'
                                //     });
                                // }
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
                                    component={Input}
                                    type='file'
                                    accept='image/*'
                                    placeholder="huinea"
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
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}