import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface UserProps extends RouteComponentProps {}

const Users: React.FC<UserProps> = props => {
	return (
		<>
			<h1>Hello world</h1>
		</>
	);
};

export default Users;
