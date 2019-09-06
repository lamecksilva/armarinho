import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Container, Typography, Fab, Modal } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import useStyles from './styles';

import Axios from '../../utils/api';
import UsersTable from './table';

interface UserProps extends RouteComponentProps {}

const Users: React.FC<UserProps> = props => {
	const [users, setUsers] = React.useState<Array<User>>([]);
	const [isModalOpen, setIsModalOpen] = React.useState(false);

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

	const fetchData = async () => {
		try {
			const response = await Axios.get('/auth/all');

			if (response) {
				setUsers(response.data);
			}
		} catch (e) {
			console.error(e.response);
		}
	};

	const handleFabClick = (event: React.MouseEvent | React.KeyboardEvent) => {
		event.preventDefault();

		fetchData();
	};

	const handleModalOpen = () => {
		setIsModalOpen(!isModalOpen);
	};

	const handleAddClick = (event: React.MouseEvent) => {
		event.preventDefault();

		handleModalOpen();
	};

	return (
		<Container className={classes.root}>
			<Typography variant="h5" style={{ textAlign: 'center' }}>
				Usuários
			</Typography>

			<UsersTable users={users} onRefreshClick={handleFabClick} />

			<Fab color="secondary" className={classes.fab} onClick={handleAddClick}>
				<AddIcon />
			</Fab>
			<Modal open={isModalOpen} onClose={handleModalOpen}>
				<div>
					<h1>Hello Clovis Filho</h1>
				</div>
			</Modal>
		</Container>
	);
};

export default Users;
