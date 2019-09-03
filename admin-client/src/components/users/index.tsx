import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import {
	Paper,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody
} from '@material-ui/core';

import Axios from '../../utils/api';

interface UserProps extends RouteComponentProps {}

interface User {
	_id: string;
	userType: string;
	name: string;
	email: string;
	createdAt: string;
	updatedAt: string;
}

const Users: React.FC<UserProps> = props => {
	const [users, setUsers] = React.useState<Array<User>>([]);

	React.useEffect(() => {
		async function fetchUsuarios() {
			await Axios.get('/auth/all')
				.then(response => {
					setUsers(response.data);
				})
				.catch(err => console.error(err.response));
		}

		fetchUsuarios();
	});

	return (
		<Paper style={{ marginTop: '10%', overflowX: 'auto' }}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell align="left">id</TableCell>
						<TableCell align="left">Nome</TableCell>
						<TableCell align="left">Email</TableCell>
						<TableCell align="left">Criado Em</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{users.map(item => (
						<TableRow key={item._id}>
							<TableCell component="th" scope="row">
								{item._id}
							</TableCell>
							<TableCell align="left">{item.name}</TableCell>
							<TableCell align="left">{item.email}</TableCell>
							<TableCell align="left">
								{new Date(item.createdAt).toLocaleDateString('pt-BR')}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Paper>
	);
};

export default Users;
