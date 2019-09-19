import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { hot } from 'react-hot-loader/root';

import theme from './theme';

import Hello from './components/Hello';
import Login from './containers/login';
import Dashboard from './containers/dashboard';
import Home from './containers/home';
import Navbar from './components/navbar';
import Users from './containers/users';
import Products from "./containers/products"

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
					<Route path="/products" component={Products} />
				</Router>
			</ThemeProvider>
		);
	}
}

export default hot(App);
