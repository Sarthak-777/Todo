import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import {addTodo, fetchTodo} from '../redux/todoSlice'
const AddTodoForm = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch()

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(addTodo({
			title: value
		}))
	};

	const fetchApi = ()=>{
		dispatch(fetchTodo())
	}

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>
			<button type='button' className='btn btn-secondary mb-2' onClick ={fetchApi}>
				FetchApi
			</button>
		</form>
	);
};

export default AddTodoForm;
