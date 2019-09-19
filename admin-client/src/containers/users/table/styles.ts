import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
	createStyles({
		root: {
			marginTop: '30px',
			overflowX: 'auto',
			overflowY: 'auto',
			width: '90vw',
			marginLeft: 'auto',
			marginRight: 'auto',
			maxHeight: '350px'
		}
	})
);
