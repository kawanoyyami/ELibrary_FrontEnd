/* eslint-disable no-shadow */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

export default function BookView() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

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

  return (
    <div className="App">
      <header className="App-header">
        <Document file="/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page height="940" pageNumber={pageNumber} />
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
  );
}
