import React from 'react';
import './modal.css';
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../backdrop/backdrop';


const modal = (props) => (
    <Auxiliary>
        <Backdrop showModal={props.showBackdrop} closeModal={props.closeModal} />
        <div className="Modal">
            <p>Edit Note</p>
            <input type="text" value={props.value} onChange={props.editValue} />
            <div className="buttonContainer">
                <button>Save</button>
                <button onClick={props.closeModal}>Close</button>
            </div>
        </div>
    </Auxiliary>
);

export default modal;