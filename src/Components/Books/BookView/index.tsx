/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-shadow */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import PageviewIcon from '@material-ui/icons/Pageview';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './_style';

export default function BookView(props: { pageUrl: string }): JSX.Element {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }

  function changePageBack() {
    changePage(-1);
  }

  function changePageNext() {
    changePage(+1);
  }
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
       <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={handleOpen}
        className={classes.submit}
      >
        <PageviewIcon />
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
            <div className="App">
              <header className="App-header">
                <Document
                  file={props.pageUrl}
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <Page height="800" pageNumber={pageNumber} />
                </Document>
                <p>
                  {' '}
                  Page {pageNumber} of {numPages}
                </p>
                {pageNumber > 1 && (
                  <button onClick={changePageBack}>Previous Page</button>
                )}
                {pageNumber < numPages && (
                  <button onClick={changePageNext}>Next Page</button>
                )}
              </header>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
