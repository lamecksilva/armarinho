import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { hot } from 'react-hot-loader/root';

import theme from './theme';

import Hello from './components/Hello';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Home from './components/home';
import Navbar from './components/navbar';
import {Users} from './components/users';

class App extends React.Component {
	render(): JSX.Element {
		return (
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router>
					<Navbar />

					<Route exact path="/" component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/hello" component={Hello} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/users" component={Users} />
				</Router>
			</ThemeProvider>
		);
	}
}

export default hot(App);
