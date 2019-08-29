import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';

interface DashboardProps extends RouteComponentProps {}

const Dashboard: React.FunctionComponent<DashboardProps> = props => {
	return (
		<Container>
			<Container>
				<AppBar position="fixed">
					<Toolbar>
						<IconButton edge="start" color="inherit">
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
			</Container>

			<Container>
				<Typography variant="h3">Dashboard</Typography>

				<Button
					variant="contained"
					color="primary"
					onClick={() => props.history.push('/login')}
				>
					Back to Login
				</Button>
			</Container>
		</Container>
	);
};

export default Dashboard;
