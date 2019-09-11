import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import {
	Container,
	Typography,
	Fab,
	Modal,
	Paper,
	Button,
	TextField,
	Grid
} from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import useStyles from './styles';

import Axios from '../../utils/api';
import UsersTable from './table';

interface UserProps extends RouteComponentProps {}

const Users: React.FC<UserProps> = props => {
	const [users, setUsers] = React.useState<Array<User>>([]);
	const [fields, setFields] = React.useState<NewUserInput>({
		name: '',
		email: '',
		password: '',
		password2: ''
	});
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

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();

		setFields({ ...fields, [event.target.name]: event.target.value });
	};

	const handleAddClick = (event: React.MouseEvent) => {
		event.preventDefault();

		handleModalOpen();
	};

	const handleModalAddClick = async (event: React.MouseEvent) => {
		event.preventDefault();

		try {
			const response = await Axios.post('/auth/register', fields);

			console.dir(response);

			if (response) {
				window.alert(
					`Usuário ${response.data.savedUser.name} criado com sucesso`
				);
				setIsModalOpen(!isModalOpen);
			}
		} catch (err) {
			console.log(err.response.data);
			window.alert(err);
		}
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
			{/*     Modal     */}
			<Modal open={isModalOpen} onClose={handleModalOpen}>
				<Paper className={classes.paper}>
					<Typography variant="h4" className={classes.modalTitle}>
						Adicionar Usuário
					</Typography>

					<Container>
						<form autoComplete="off">
							<Grid container spacing={2}>
								<Grid item xs={6}>
									<TextField
										name="name"
										placeholder="Digite o nome"
										label="Nome"
										fullWidth
										onChange={handleChange}
										// variant="outlined"
									/>
								</Grid>

								<Grid item xs={6}>
									<TextField
										name="email"
										placeholder="Digite o email"
										fullWidth
										type="email"
										onChange={handleChange}
										label="Email"
										// variant="outlined"
									/>
								</Grid>

								<Grid item xs={6}>
									<TextField
										name="password"
										placeholder="Digite a senha"
										type="password"
										onChange={handleChange}
										fullWidth
										label="Senha"
										// variant="outlined"
									/>
								</Grid>

								<Grid item xs={6}>
									<TextField
										name="password2"
										placeholder="Confirme a senha"
										fullWidth
										type="password"
										label="Confirmar Senha"
										onChange={handleChange}
										// variant="outlined"
									/>
								</Grid>
							</Grid>

							<Button
								variant="contained"
								onClick={handleModalAddClick}
								className={classes.confirmButton}
							>
								Confirmar
							</Button>
						</form>
					</Container>
				</Paper>
			</Modal>
		</Container>
	);
};

export default Users;
