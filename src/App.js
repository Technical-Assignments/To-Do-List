import React, { Component } from 'react';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';
// import uuid from 'uuid'
import {v1 as uuid} from "uuid";

class App extends Component {
    state = {
      itmes: [],
      id: uuid(),
      item: '',
      editItem: false
       
    }

    handleChange = (e) => {
      this.setState({
        item: e.target.value
      });
    };
  
  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    console.log(newItem, "aaaaaaaaaaaaaaaaaaaaaaaaaaaa");

    const updatedItems = [...this.state.itmes, newItem];

    this.setState({
      itmes: updatedItems,
      item: '',
      id: uuid(),
      editItem: false
    });

  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-4'>
            <h3 className='text-capitalize text-center'>todo input</h3>
          <TodoInput item= {this.state.item} handleChange= {this.handleChange} handleSubmit= {this.handleSubmit} />
          <TodoList items= {this.state.items} />

          </div>

        </div>

      </div>
     
    )
  }
}

export default App



