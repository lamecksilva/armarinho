import {
	GET_USERS_REQUEST,
	GET_USERS_SUCCESS,
	GET_USERS_FAILURE
} from './action-types';

const initialState: { users: any[]; loading: boolean; error: string } = {
	users: [],
	loading: false,
	error: ''
};

export default (state = initialState, action: any) => {
	switch (action.type) {
		case GET_USERS_REQUEST:
			return {
				...state,
				loading: true
			};

		case GET_USERS_SUCCESS:
			return {
				...state,
				loading: false,
				users: action.payload
			};

		case GET_USERS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error
			};

		default:
			return {
				...state
			};
	}
};
