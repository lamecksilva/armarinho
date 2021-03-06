import * as React from 'react';
import {
	Paper,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	IconButton,
	Grid
} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './styles';

interface UsersTableProps {
	users: Array<User>;
	onRefreshClick: any;
	handleDelete: any;
}

const UsersTable: React.FC<UsersTableProps> = props => {
	const classes = useStyles({});

	return (
		<Paper className={classes.root}>
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell align="left">Nome</TableCell>
						<TableCell align="left">Email</TableCell>
						<TableCell align="left">Criado Em</TableCell>
						<TableCell align="center">
							<IconButton onClick={props.onRefreshClick}>
								<RefreshIcon />
							</IconButton>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{props.users
						.sort(
							(a, b) =>
								new Date(b.createdAt).getTime() -
								new Date(a.createdAt).getTime()
						)
						.map(item => (
							<TableRow key={item._id}>
								<TableCell align="left" component="th" scope="row">
									{item.name}
								</TableCell>
								<TableCell align="left">{item.email}</TableCell>
								<TableCell align="left">
									{new Date(item.createdAt).toLocaleDateString('pt-BR')}-
									{new Date(item.createdAt).toLocaleTimeString('pt-BR')}
								</TableCell>
								<TableCell>
									<Grid container spacing={2}>
										<Grid item xs={6}>
											<IconButton>
												<EditIcon />
											</IconButton>
										</Grid>
										<Grid item xs={6}>
											<IconButton
												onClick={props.handleDelete(item._id, item.name)}
											>
												<DeleteIcon />
											</IconButton>
										</Grid>
									</Grid>
								</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
		</Paper>
	);
};

export default UsersTable;
