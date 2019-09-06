import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
	createStyles({
		root: { width: '100vw', marginTop: '80px' },
		fab: {
			margin: 0,
			top: 'auto',
			right: theme.spacing(2),
			bottom: theme.spacing(2),
			left: 'auto',
			position: 'fixed'
		}
	})
);
