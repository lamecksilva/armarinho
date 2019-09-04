import * as React from 'react';
import {
	Paper,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody
} from '@material-ui/core';

import useStyles from './styles';
import { UserType } from '../index';

interface UsersTableProps {
	users: Array<UserType>;
}

const UsersTable: React.FC<UsersTableProps> = props => {
	const classes = useStyles({});

	return (
		<Paper className={classes.root}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell align="left">Nome</TableCell>
						<TableCell align="left">Email</TableCell>
						<TableCell align="left">Criado Em</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{props.users.map(item => (
						<TableRow key={item._id}>
							<TableCell component="th" scope="row" align="left">
								{item.name}
							</TableCell>
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

export default UsersTable;
