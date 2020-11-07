import React, { useState, useEffect } from 'react';
import Loading from 'react-loading-spinkit';

const Spinner = () => {
  return (
    <>
      <div style={{ height: '50vh', width: '100vw' }}>
        <Loading show={true} />
      </div>
    </>
  );
};

export default Spinner;
