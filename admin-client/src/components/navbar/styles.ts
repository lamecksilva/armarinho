import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
	createStyles({
		appBarBrandName: {
			fontFamily: "'Varela Round', sans-serif",
			marginLeft: theme.spacing(1)
		},
		menuButton: {
			marginRight: theme.spacing(2)
		},
		logoutButton: {
			fontFamily: "'Varela Round', sans-serif",
			marginLeft: 'auto'
		}
	})
);
