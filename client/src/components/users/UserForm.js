import { useState, useEffect } from 'react';

const UserForm = ({ addUser, id, email, setEdit, updateUser }) => {
                              //  fields the obj has
  const [user, setUser] = useState({ email: '' })

  useEffect( () => {
    // pre fill the form
    if (id) {
      // setSub({ title: title })
      setUser({ email })
    }
  }, [])

  const handleSubmit = (e) => {
    // not do a full page reload, and lose data and post in the url
    e.preventDefault()
    // see if we are doing a edit
    if (id) {
      updateUser(id, user)
      setEdit(false)
    } else {
      addUser(user)
    }
    // clear out the form 
    setUser({ email: '' })
  }

  return (
    <>
      <h2>{ id ? 'Edit' : 'Create' } User</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        {/* 1 input for each attr */}
        <input 
          // main 3 things is name value and on change
          name='email'
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}

          required
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default UserForm;