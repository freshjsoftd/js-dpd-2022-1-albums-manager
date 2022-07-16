import React from 'react';
import { useDispatch } from 'react-redux';
// import { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { deleteUserAction } from '../../store/actions/usersActions';
import './UsersList.css'

// import dataService from '../../data-service'

function UsersList({users}) {

  const dispatch = useDispatch();
  // const {usersList: {users}} = useSelector(state => state)

  // const [users, setUsers] = useState([]);

  const {url} = useRouteMatch()

  // useEffect(() => {
  //   dataService.get('/users')
  //   .then(({data}) => setUsers(data))
  //   .catch((error) => console.log(error))
  // }, [])

  const onDelete = (id) => { 
    dispatch(deleteUserAction(id))
   }

  return (
    <ul className="users-container">
      {users.map((user) => {
        return (
          <li key={user.id} className='item-container'>
            <Link 
              to={`${url}/${user.id}`}
              className='nav-user'
            >
              <p className='user'>{user.name} {user.phone}</p>
            </Link>
            <Link to={`${url}/add/${user.id}`}>
              <p id='edit' className='fa fa-pencil'></p>
            </Link>
            <p id='del' className='fa fa-trash-o' onClick={() => onDelete(user.id)}></p>
          </li>
        )
      })}
    </ul>
  )
}

export default UsersList