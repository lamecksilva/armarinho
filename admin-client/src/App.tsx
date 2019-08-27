import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { hot } from 'react-hot-loader/root';

import theme from './theme';

import Hello from './components/Hello';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Home from './components/home';

class App extends React.Component<{}> {
	render(): JSX.Element {
		return (
			<ThemeProvider theme={theme}>
				<Router>
					<React.Fragment>
						<Route exact path="/" component={Home} />
						<Route path="/login" component={Login} />
						<Route path="/hello" component={Hello} />
						<Route path="/dashboard" component={Dashboard} />
					</React.Fragment>
				</Router>
			</ThemeProvider>
		);
	}
}

export default hot(App);
