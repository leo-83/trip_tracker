import { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './UserList';
import UserForm from './UserForm';
import UserShow from './UserShow';

const Users = () => {
    const [users, setUsers] = useState([])
  
    useEffect( () => {
      axios.get('/api/users')
        .then( res => setUsers(res.data) ) // storing all the subs from the db to the component state
        .catch( err => console.log(err) )
    }, [])
  
    const addUser = (user) => {
      axios.post('/api/users', { user })
        .then( res => setUsers([...users, res.data])) // adding to the front end
        .catch( err => console.log(err) )
    }
  
    const updateUser = (id, user) => {
      axios.put(`/api/users/${id}`, { user })
        .then( res => {
          const newUpdatedUsers = users.map( u => {
            if (u.id === id) {
              return res.data
            }
            return u
          })
          setUsers(newUpdatedUsers)
        })
        .catch( err => console.log(err) )
    }
  
    const deleteUser = (id) => {
      axios.delete(`/api/users/${id}`)
        .then( res => {
          setUsers(users.filter( u => u.id !== id ))
        })
        .catch( err => console.log(err) )
    }
  
    return (
      <>
        <h3>Login</h3>
        <UserForm addUser={addUser} />
        <UserList 
          users={users}
          updateUser={updateUser}
          deleteUser={deleteUser}
        />
      </>
    )
  }
  
  export default Users;