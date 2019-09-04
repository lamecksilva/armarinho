import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Container, Typography, Fab } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import useStyles from './styles';

import Axios from '../../utils/api';
import UsersTable from './table';

interface UserProps extends RouteComponentProps {}

export interface UserType {
	_id: string;
	userType: string;
	name: string;
	email: string;
	createdAt: string;
	updatedAt: string;
}

export const Users: React.FC<UserProps> = props => {
	const [users, setUsers] = React.useState<Array<UserType>>([]);

	const classes = useStyles({});

	React.useEffect(() => {
		async function fetchUsuarios() {
			try {
				const response = await Axios.get('/auth/all');

				if (response) {
					setUsers(response.data);
				}
			} catch (e) {
				console.error(e.response);
			}
		}

		fetchUsuarios();
	}, [users.length]);

	return (
		<Container className={classes.root}>
			<Typography variant="h5" style={{ textAlign: 'center' }}>
				Usuários
			</Typography>

			<UsersTable users={users} />

			<Fab color="secondary" className={classes.fab}>
				<AddIcon />
			</Fab>
		</Container>
	);
};
