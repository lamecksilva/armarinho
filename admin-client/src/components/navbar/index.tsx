import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles';
import {
	Drawer,
	List,
	ListItemIcon,
	ListItem,
	ListItemText
} from '@material-ui/core';

interface NavbarProps extends RouteComponentProps {}

const Navbar: React.FC<NavbarProps> = props => {
	const classes = useStyles(props);

	const [drawerOpen, setDrawerOpen] = React.useState(false);

	const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
		event.preventDefault();

		setDrawerOpen(!drawerOpen);
	};

	return (
		<Container>
			<AppBar position="fixed">
				<Toolbar>
					<IconButton edge="start" color="inherit" onClick={toggleDrawer}>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.appBarBrandName}>
						Armarinho Admin
					</Typography>
					<Button
						color="inherit"
						onClick={() => props.history.push('/login')}
						className={classes.logoutButton}
					>
						Sair
					</Button>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				open={drawerOpen}
				onClose={toggleDrawer}
				anchor="left"
			>
				<List>
					<ListItem button>
						<ListItemIcon>
							<MenuIcon />
						</ListItemIcon>
						<ListItemText primary="Home" />
					</ListItem>
				</List>
			</Drawer>
		</Container>
	);
};

export default withRouter(Navbar);
