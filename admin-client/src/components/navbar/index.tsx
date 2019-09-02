import * as React from 'React';

import { RouteComponentProps, withRouter } from 'react-router';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles';

interface NavbarProps extends RouteComponentProps {}

const Navbar: React.FC<NavbarProps> = props => {
	const classes = useStyles(props);

	return (
		<Container>
			<AppBar>
				<Toolbar>
					<IconButton>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.appBarBrandName}>
						Armarinho Admin
					</Typography>
					<Button color="inherit">Logout</Button>
				</Toolbar>
			</AppBar>
		</Container>
	);
};

export default withRouter(Navbar);
