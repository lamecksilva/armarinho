import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
	rootContainer: {
		minHeight: '350px',
		border: '1px solid #f5b5e5',
		maxWidth: '400px',
		marginTop: '10vh',
		borderTopLeftRadius: '25px',
		borderTopRightRadius: '25px',
		borderBottomLeftRadius: '25px',
		borderBottomRightRadius: '25px',
		paddingLeft: 0,
		paddingRight: 0
	}
});

// import useStyles from './styles';

export interface LoginState {
	email: string;
	password: string;
}

const login: React.FunctionComponent<RouteComponentProps> = () => {
	const [values, setValues] = React.useState<LoginState>({
		email: '',
		password: ''
	});

	const classes = styles({});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();

		setValues({ ...values, [event.target.name]: event.target.value });
	};

	return (
		<React.Fragment>
			<CssBaseline />

			<Container maxWidth="sm" style={classes.rootContainer}>
				<div
					style={{
						width: '100%',
						backgroundColor: '#ed3975',
						borderTopRightRadius: '25px',
						borderTopLeftRadius: '25px',
						height: '75px',
						textAlign: 'center'
					}}
				>
					<Typography
						variant="h4"
						style={{ paddingTop: '3vh', color: '#f5bccf' }}
					>
						Login
					</Typography>
				</div>
				<Grid container>
					<Grid item xs={12} sm={12} md={12}>
						<TextField
							style={{
								width: '80%',
								marginLeft: '10%',
								marginRight: '10%',
								marginTop: '30px'
							}}
							name="email"
							type="email"
							variant="outlined"
							placeholder="Digite seu email"
							onChange={handleChange}
						/>
					</Grid>

					<Grid item xs={12} sm={12} md={12}>
						<TextField
							style={{
								width: '80%',
								marginLeft: '10%',
								marginRight: '10%',
								marginTop: '15px'
							}}
							name="password"
							type="password"
							variant="outlined"
							placeholder="Digite sua senha"
							onChange={handleChange}
						/>
					</Grid>

					<Button
						variant="contained"
						style={{
							width: '80%',
							marginLeft: 'auto',
							marginRight: 'auto',
							marginTop: '30px',
							backgroundColor: '#ed3975',
							color: '#f5bccf'
						}}
					>
						Login
					</Button>
				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default login;
