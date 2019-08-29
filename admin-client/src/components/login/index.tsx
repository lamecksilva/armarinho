import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, LinkProps } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import useStyles from './styles';

export interface LoginState {
	email: string;
	password: string;
}

const CollisionLink = React.forwardRef<
	HTMLAnchorElement,
	Omit<LinkProps, 'innerRef' | 'to'>
>((props, ref) => (
	<Link
		innerRef={ref as any}
		to="/dashboard"
		{...props}
		style={{ textDecoration: 'none' }}
	/>
));

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
		<React.Fragment>
			<CssBaseline />

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

					<Typography
						variant="subtitle1"
						className={classes.esqueceuSenhaStyle}
						component={CollisionLink}
					>
						Esqueceu a senha?
					</Typography>
				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default Login;
