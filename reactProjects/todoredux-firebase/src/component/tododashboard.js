import React from 'react'
import UserList from './usercomponent/userList'
import AddUser from './usercomponent/addUser'
import AddTodo from '../component/addTodo'
import TodoList from '../component/todoList'

const Tododashboard = () => {
  return (
    <div>
         <AddTodo />
      <TodoList />

      <AddUser />
      <UserList />
      
    </div>
  )
}

export default Tododashboard
