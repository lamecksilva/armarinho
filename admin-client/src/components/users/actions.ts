import { useDispatch } from 'react-redux';

import Axios from '../../utils/api';
import {
	GET_USERS_REQUEST,
	GET_USERS_SUCCESS,
	GET_USERS_FAILURE
} from './action-types';

const dispatch = useDispatch();

export const getUsers = async () => {
	dispatch({ type: GET_USERS_REQUEST });

	try {
		const response = await Axios.get('/auth/all');

		if (response) {
			dispatch({ type: GET_USERS_SUCCESS, payload: response.data.users });
		}
	} catch (err) {
		console.error(err);
		dispatch({ type: GET_USERS_FAILURE, error: 'Error in get users' });
	}
};
