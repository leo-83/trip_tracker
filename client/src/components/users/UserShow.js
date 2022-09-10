import { useState } from 'react';
import UserForm from './UserForm';
import { Link } from 'react-router-dom';

const UserShow = ({ id, email, deleteUser, updateUser }) => {
  // this will keep track of if we are editing
  const [editing, setEdit] = useState(false)

  // conditional rendering - display base off of a condition
  return (
    <>
      <h3>{email}</h3>
      {/* conditional rendering of if I am editing show the form or if not then show the button */}
      {
        editing ?
        <>
          <UserForm 
            updateUser={updateUser}
            id={id}
            email={email}
            setEdit={setEdit}
          />
          <button
            onClick={() => setEdit(false)}
          >
            Cancel
          </button>
        </>
        :
        <button
          onClick={() => setEdit(true)}
        >
            Edit
        </button>
      }
      <button
        onClick={() => deleteUser(id)}
      >
        Delete
      </button>
      <Link to={`/${id}/trips`}>
        <button>Trips</button>
      </Link>
    </>
  )
}

export default UserShow;