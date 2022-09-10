import UserShow from './UserShow';

const UserList = ({ users, updateUser, deleteUser }) => (
  <>
    { users.map( u => 
      <UserShow
        key={u.id} 
        {...u}
        deleteUser={deleteUser}
        updateUser={updateUser}
      />
    )}
  </>
)

export default UserList;