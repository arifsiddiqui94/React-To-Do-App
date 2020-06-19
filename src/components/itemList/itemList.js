import React, { Component } from 'react';
import './itemList.css';
import Delete from '../../assets/images/delete.png';
import Edit from '../../assets/images/edit.webp';
import Modal from '../UI/modal/modal';

class ItemList extends Component {

    render() {
        return (
            <div>
                <div className="ListContainer">My To Do List</div>
                {
                    this.props.items.map((ele, index) => {
                        return <div key={index} className="List">
                            <input type="checkbox" onChange={() => this.props.checkboxHandler(index)} checked={ele.checked} value="" />
                            <span className={ele.checked ? "ListDone" : ""}>{ele.value}</span>
                            <img src={Delete} width="28" onClick={() => this.props.deleteItem(index)} />
                            <img src={Edit} width="25" onClick={() => this.props.edit(index)} />
                            {
                                ele.showModal ?
                                    <Modal
                                        closeModal={() => this.props.closeModal(index)}
                                        showBackdrop={ele.showBackdrop}
                                        value={ele.value}
                                        editValue={this.props.editValue}
                                    />
                                    : null
                            }
                        </div>
                    })
                }
            </div>
        );
    }
}

export default ItemList;