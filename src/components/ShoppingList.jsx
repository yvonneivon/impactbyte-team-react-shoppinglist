import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: '',
            description: '',
            image: '',
            allList: [],
            index: 0
        };
    }

    handleChange = (event) => {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleClose = (event) => {
        this.setState({
           show: false,
        });
     }

    handleSubmit = (event) => {
        event.preventDefault();
        const items = localStorage.getItem('shoppingList');

        const list = {
            list: this.state.list,
            description: this.state.description,
            image: this.state.image,
        };

        const getLocalStorage = items === null ? [] : JSON.parse(items);
        getLocalStorage.push(list);
        localStorage.setItem('shoppingList', JSON.stringify(getLocalStorage));
        window.location.reload();
    };

    //delete
    // handleDelete = id => {
    //     const filteredItems = this.state.allList.filter(list => list.description !== description);
    //     this.setState({
    //         items: filteredItems
    //     });
    // };

    //edit 
    // handleEdit = id => {
    //     const filteredItems = this.state.allList.filter(list => list.description !== description);
    //     const selectedItem = this.state.allList.find(list => list.description === description);
    //     this.setState({
    //       items: filteredItems,
    //       item: selectedItem.title,
    //       id: id,
    //       editItem: true
    //     });
    //   };

    render() {

        return (
            <div>
                <div className="card card-body my-3">
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-white">
                                    <i className="fas fa-shopping-cart" />
                                </div>
                            </div>
                            <input
                                type='text'
                                name='list'
                                id='list'
                                className="form-control text-capitalize"
                                placeholder="add item to shopping cart"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-white">
                                    <i className="fas fa-balance-scale" />
                                </div>
                            </div>
                            <input
                                type='text'
                                name='description'
                                id='description'
                                className="form-control text-capitalize"
                                placeholder='Quantity'
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-white">
                                    <i className="fas fa-images" />
                                </div>
                            </div>
                            <input
                                type='text'
                                name='image'
                                id='image'
                                className="form-control text-capitalize"
                                placeholder='url gambar'
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="input-group">
                            <button
                                type="submit"
                                value="Tambah List"
                                className="btn btn-primary btn-block text-uppercase mt-5" >
                                Add Item </button>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default TodoList;