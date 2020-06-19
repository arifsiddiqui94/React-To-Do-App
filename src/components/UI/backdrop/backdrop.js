import React from 'react';
import './backdrop.css';

const backdrop = (props) => (
    props.showModal ? <div className="Backdrop" onClick={props.closeModal}></div> : null
);

export default backdrop;