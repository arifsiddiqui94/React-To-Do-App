import React, { Component } from 'react';
import ItemList from '../../components/itemList/itemList';
import AddItem from '../../components/addItem/addItem';
import Auxiliary from '../../hoc/Auxiliary';
import Header from '../../components/header/header';

class To_do extends Component {
    state = {
        items: [],
        newItem: ""

    }

    inputChangeHandler = (event) => {
        this.setState({
            newItem: event.target.value
        });
    }

    addItemHandler = () => {
        let checkItem = {
            value: this.state.newItem,
            checked: false
        }
        const newItems = [...this.state.items, checkItem];
        this.setState({
            items: newItems,
            newItem: ""
        });
    }

    deleteItemHandler = (index) => {
        const updatedItems = this.state.items;
        updatedItems.splice(index, 1);
        this.setState({
            items: updatedItems
        });
    }

    checkboxHandler = (index) => {
        let items = [...this.state.items];
        // 2. Make a shallow copy of the item you want to mutate
        let item = { ...items[index] };
        // 3. Replace the property you're intested in
        item.checked = !item.checked;
        // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
        items[index] = item;
        // 5. Set the state to our new copy
        this.setState({ items });
    }
    render() {
        return (
            <Auxiliary>
                <Header />
                <AddItem
                    inputChange={this.inputChangeHandler}
                    addItem={this.addItemHandler}
                    inputValue={this.state.newItem}
                />
                <ItemList items={this.state.items}
                    deleteItem={this.deleteItemHandler}
                    checkboxHandler={this.checkboxHandler}
                    checked={this.state.checked}
                />
            </Auxiliary>
        );
    };
}

export default To_do;