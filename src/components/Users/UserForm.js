import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import UndoIcon from '@mui/icons-material/Undo';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

import { emptyUser } from '../../constatnts';
import {
	createUserAction,
	updateUserAction,
} from '../../store/actions/usersActions';
import './UsersForm.css';
import AppTextField from './AppTextField';

function UserForm({ users }) {
	const dispatch = useDispatch();
	const { id } = useParams();
	const currentUser = users.find((user) => user.id === parseInt(id));

	const history = useHistory();

	const goHome = () => {
		history.push('/users');
	};

	// const validateForm = (values) => {
	// 	console.log('Validate me')
	// 	const errors = {};
	// 	if(!values.name){
	// 		errors.name = 'Field Name is required'
	// 	}
	// 	if(!values.email){
	// 		errors.email = 'Field Email is required'
	// 	}
	// 	return errors;
	//  }

	const onFormikSubmit = (values, actions) => {
		setTimeout(() => {
			actions.setSubmitting(false);
		}, 2000);
		!values.id
			? dispatch(createUserAction({ ...values, id: Date.now() }))
			: dispatch(updateUserAction(values));
		actions.resetForm(emptyUser);
		goHome();
	};

	const schemaForm = Yup.object().shape({
		name: Yup.string()
			.required('Field Name is required')
			.min(2, 'Too less letter')
			.max(10, 'Too many letter'),
		email: Yup.string()
			.email('No valid email')
			// .matches(/^[0-9]/, 'No match')
			.required('Field Email is required'),
		address: Yup.object().shape({
			city: Yup.string().required('Field City is required'),
		}),
	});

	const renderForm = (props) => {
		console.log(props.errors);
		return (
			<Form id='users-form'>
				<div className='field-container'>
					<label htmlFor='name'>Name</label>
					<Field type='text' name='name' placeholder='Name'>
						{AppTextField}
					</Field>
				</div>
				{/* <ErrorMessage name='name' /> */}
				<fieldset
					id='contact'
					form='users-form'
					className='group-container'>
					<legend>Contact</legend>
					<div className='field-container'>
						<label htmlFor='email'>Email</label>
						<Field name='email' placeholder='Name' />
					</div>
					<ErrorMessage name='email' />
					<div className='field-container'>
						<label htmlFor='phone'>Phone</label>
						<Field name='phone' placeholder='Phone' />
					</div>
				</fieldset>
				<fieldset
					id='address'
					form='users-form'
					className='group-container'>
					<legend>Address</legend>
					<div className='field-container'>
						<label htmlFor='address.city'>City</label>
						<Field name='address.city' placeholder='City' />
					</div>
					<ErrorMessage name='address.city' />
					<div className='field-container'>
						<label htmlFor='address.street'>Street</label>
						<Field name='address.city' placeholder='Street' />
					</div>
					<div className='field-container'>
						<label htmlFor='address.zipcode'>Zipcode</label>
						<Field name='address.zipcode' placeholder='Zipcode' />
					</div>
				</fieldset>
				{/* <div className='btn-group'> */}
					<Stack direction='row' spacing={12}>
						<Button
							variant='contained'
							size='large'
							color='success'
							style={{ backgroundColor: 'teal' }}
							type='submit'
							disabled={props.isSubmitting}
							startIcon={<SaveIcon />}>
							Save
						</Button>
						<Button
							variant='contained'
							size='large'
							color='success'
							style={{ backgroundColor: 'teal' }}
							type='submit'
							disabled={props.isSubmitting}
							startIcon={<UndoIcon />}>
							Reset
						</Button>
						<Button
							variant='contained'
							size='large'
							color='success'
							style={{ backgroundColor: 'teal' }}
							type='submit'
							disabled={props.isSubmitting}
							startIcon={<KeyboardReturnIcon />}>
							Return
						</Button>
					</Stack>
					
				{/* </div> */}
			</Form>
		);
	};

	return (
		<Formik
			initialValues={currentUser ? currentUser : emptyUser}
			onSubmit={onFormikSubmit}
			validationSchema={schemaForm}
			// validate={validateForm}
			// validateOnBlur={false}
		>
			{renderForm}
		</Formik>
	);
}

export default UserForm;
