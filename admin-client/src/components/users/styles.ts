import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
	createStyles({
		root: { width: '100vw', marginTop: '80px' },
		fab: {
			margin: theme.spacing(1),
			float: 'right'
		}
	})
);
