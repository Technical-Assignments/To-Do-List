import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function
  const [items, setItems] = useState([]);
  const [id, setId] = useState(0);
  const [item, setItem] = useState('');
  const [edtItem, setEdtItem] = useState(false);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edtItem) {
      const newItems = items.map((singleItem) => {
        if (singleItem.id === id) {
          return { ...singleItem, title: item };
        }
        return singleItem;
      });
      setItems(newItems);
    } else {
      const newItem = { id: uuidv4(), title: item };
      setItems((items) => [...items, newItem]);
    }
    setItem('');
    setId(0);
    setEdtItem(false);
  };

  const handleEdit = (id) => {
    const specificItem = items.find((item) => item.id === id);
    const { title } = specificItem;
    setItem(title);
    setEdtItem(true);
    setId(id);
  };

  const handleDelete = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  const clearList = () => {
    setItems([]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5">
          <h3 className="text-capitalize text-center">todo input</h3>
          <TodoInput
            item={item}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            editItem={edtItem}
          />
          <TodoList
            items={items}
            clearList={clearList}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );


export default App;
