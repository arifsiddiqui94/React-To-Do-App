import React, { Component } from 'react';
import './itemList.css';
import Delete from '../../assets/images/delete.png';

class ItemList extends Component {
    
    render() {
        return (
            <div>
                <div className="ListContainer">My To Do List</div>
                {
                    this.props.items.map((ele, index) => {
                        return <div key={index} className="List">
                            <input type="checkbox" onChange={() => this.props.checkboxHandler(index)} checked={ele.checked} />
                            <span className={ele.checked ? "ListDone" : ""}>{ele.value}</span>
                            <img src={Delete} width="28" onClick={() => this.props.deleteItem(index)} />
                        </div>
                    })
                }
            </div>
        );
    }
}

export default ItemList;