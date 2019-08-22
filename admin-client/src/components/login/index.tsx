import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export interface LoginState {
	email: string;
	password: string;
}

export interface LoginProps extends RouteComponentProps {}

class Login extends React.Component<LoginProps, LoginState> {
	constructor(props: LoginProps) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		event.preventDefault();

		// this.setState({ event.target.name: event.target.value });
	}

	render() {
		return (
			<div>
				<h2>Login Component</h2>

				<input
					name="email"
					type="email"
					placeholder="Digite seu email"
					onChange={this.handleChange}
				/>
				<input
					name="password"
					type="password"
					placeholder="Digite sua senha"
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}

export default Login;
