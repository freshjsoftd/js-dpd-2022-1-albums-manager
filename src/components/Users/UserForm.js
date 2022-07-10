import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { emptyUser } from '../../constatnts';
import './UsersForm.css';

function UserForm({users}) {

  const {id} = useParams()
  const currentUser = users.find((user) => user.id === parseInt(id));
  
  const history = useHistory()
  

	const [editUser, setEditUser] = useState(currentUser ? currentUser : emptyUser);

  // console.log(params)

  const onInputChange = (e) => { 
    setEditUser({...editUser, [e.target.name]: e.target.value});
   }

   const onReset = () => { 
    setEditUser(emptyUser)
    }

    const goHome = () => { 
      history.push('/users')
     }

	return (
		<form id='users-form'>
			<div className='field-container'>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					name='name'
					value={editUser.name}
					placeholder='Name'
          onChange={onInputChange}
				/>
			</div>
			<fieldset
				id='contact'
				form='users-form'
				className='group-container'>
				<legend>Contact</legend>
				<div className='field-container'>
					<label htmlFor='email'>Email</label>
					<input
						type='text'
						name='email'
						value={editUser.email}
						placeholder='Email'
            onChange={onInputChange}
					/>
				</div>
				<div className='field-container'>
					<label htmlFor='phone'>Phone</label>
					<input
						type='text'
						name='phone'
						value={editUser.phone}
						placeholder='Phone'
            onChange={onInputChange}
					/>
				</div>
			</fieldset>
			<fieldset
				id='address'
				form='users-form'
				className='group-container'>
				<legend>Address</legend>
				<div className='field-container'>
					<label htmlFor='city'>City</label>
					<input
						type='text'
						name='city'
						value={editUser.address.city}
						placeholder='City'
            onChange={onInputChange}
					/>
				</div>
				<div className='field-container'>
					<label htmlFor='street'>Street</label>
					<input
						type='text'
						name='street'
						value={editUser.address.street}
						placeholder='Street'
            onChange={onInputChange}
					/>
				</div>
				<div className='field-container'>
					<label htmlFor='zipcode'>Zipcode</label>
					<input
						type='text'
						name='zipcode'
						value={editUser.address.zipcode}
						placeholder='Zipcode'
            onChange={onInputChange}
					/>
				</div>
			</fieldset>
      <div className='btn-group'>
        <button
          type='submit'
          className='save-btn'>Save</button>
        <button
          type='button'
          className='cansel-btn' onClick={onReset}>Reset</button>
        <button
          type='button'
          className='return-btn'
          onClick={goHome}
          >Return</button>
      </div>
		</form>
	);
}

export default UserForm;
