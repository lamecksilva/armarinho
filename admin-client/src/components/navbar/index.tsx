import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import useStyles from './styles';

import drawerOptions from './drawerOptions';

interface NavbarProps extends RouteComponentProps {}

const Navbar: React.FC<NavbarProps> = props => {
	const [drawerOpen, setDrawerOpen] = React.useState(false);

	const classes = useStyles(props);

	const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
		event.preventDefault();

		setDrawerOpen(!drawerOpen);
	};

	const redirectTo = (to: string) => (
		event: React.KeyboardEvent | React.MouseEvent
	) => {
		event.preventDefault();

		setDrawerOpen(!drawerOpen);
		props.history.push(to);
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
						<Typography variant="subtitle1">Sair</Typography>
					</Button>
				</Toolbar>
			</AppBar>

			<Drawer
				className={classes.drawer}
				open={drawerOpen}
				onClose={toggleDrawer}
				anchor="left"
			>
				<div className={classes.toolbar}>
					<Typography
						variant="h5"
						style={{ marginRight: 'auto', marginLeft: '10px' }}
					>
						Armarinho
					</Typography>
					<IconButton onClick={toggleDrawer}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<List>
					{drawerOptions.map(item => (
						<ListItem button onClick={redirectTo(item.url)} key={item.url}>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.name} />
						</ListItem>
					))}
				</List>
			</Drawer>
		</Container>
	);
};

export default withRouter(Navbar);
