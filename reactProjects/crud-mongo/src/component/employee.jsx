import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Employee = () => {
    const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', salary: '',email:'' });
  const [editItem, setEditItem] = useState(null); // State for the item being edited
  
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get('http://localhost:8080/employee');
    setItems(response.data);
  };

  const handleChange = (e) => {
  
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editItem) {
      await axios.put(`http://localhost:8080/employee/${editItem._id}`, newItem);
      setEditItem(null); // Reset edit item
    } else {
      await axios.post('http://localhost:8080/employee', newItem);
    }
    setNewItem({ name: '', salary: '',email :'' });
    fetchItems();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/employee/${id}`);
    fetchItems();
  };

  const handleEdit = (item) => {
    setEditItem(item); // Set the item to edit
    setNewItem({ name: item.name, salary: item.salary,email:item.email }); // Populate form with current values
  };

  return (
  
  
   <div>
   <h1>Employee</h1>
   <form onSubmit={handleSubmit}>
     <input
       type="text"
       name="name"
       value={newItem.name}
       onChange={handleChange}
       placeholder="Name"
       required
     />
     <input
       type="text"
       name="salary"
       value={newItem.salary}
       onChange={handleChange}
       placeholder="salary"
       required
     />
      <input
       type="text"
       name="email"
       value={newItem.email}
       onChange={handleChange}
       placeholder="email"
       required
     />
     <button type="submit">{editItem ? 'Update Item' : 'Add Item'}</button>
   </form>
   <ul>
     {items.map(item => (
       <li key={item._id}>
         {item.name} - {item.salary}-{item.email}
         <button onClick={() => handleEdit(item)}>Edit</button>
         <button onClick={() => handleDelete(item._id)}>Delete</button>
       </li>
     ))}
   </ul>
   </div>

  )
}

export default Employee












