import React, { Component } from 'react';
import './addItem.css';

class AddItem extends Component {
   
    render() {
        return (
            <div className="inputContainer">
                <input
                    type="text"
                    placeholder="Add items..."
                    onChange={this.props.inputChange}
                    value={this.props.inputValue}
                />
                <button onClick={this.props.addItem}>Add</button>
            </div>
        );
    }
}

export default AddItem;