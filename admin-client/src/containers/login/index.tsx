import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import CollisionLink from '../../components/adapterlink';
import useStyles from './styles';

export interface LoginState {
	email: string;
	password: string;
}

const Login: React.FunctionComponent<RouteComponentProps> = props => {
	const [values, setValues] = React.useState<LoginState>({
		email: '',
		password: ''
	});

	const classes = useStyles(props);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();

		setValues({ ...values, [event.target.name]: event.target.value });
	};

	const handleLoginSubmit = (event: React.MouseEvent) => {
		event.preventDefault();

		props.history.push('/dashboard');
	};

	return (
		<Container maxWidth="sm" className={classes.rootContainer}>
			<div className={classes.loginHeader}>
				<Typography variant="h5" className={classes.loginHeaderTitle}>
					Armarinho Admin Login
				</Typography>
			</div>
			<Grid container>
				<Grid item xs={12} sm={12} md={12}>
					<TextField
						className={classes.textFieldStyle}
						name="email"
						type="email"
						variant="outlined"
						placeholder="Digite seu email"
						onChange={handleChange}
					/>
				</Grid>

				<Grid item xs={12} sm={12} md={12}>
					<TextField
						className={classes.textFieldStyle}
						name="password"
						type="password"
						variant="outlined"
						placeholder="Digite sua senha"
						onChange={handleChange}
					/>
				</Grid>

				<Button
					variant="contained"
					type="submit"
					className={classes.buttonStyle}
					onClick={handleLoginSubmit}
				>
					Login
				</Button>

				<Button
					to="/dashboard"
					component={CollisionLink}
					className={classes.esqueceuSenhaStyle}
				>
					<Typography variant="subtitle1">Esqueceu a senha?</Typography>
				</Button>
			</Grid>
		</Container>
	);
};

export default Login;
