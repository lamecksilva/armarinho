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
		},
		paper: {
			width: '500px',
			maxHeight: '375px',
			margin: '50px auto auto auto'
		},
		modalTitle: {
			textAlign: 'center',
			paddingTop: '30px',
			marginBottom: '30px'
		},
		confirmButton: {
			width: '80%',
			marginLeft: '10%',
			marginRight: '10%',
			marginTop: '50px',
			marginBottom: '30px',
			height: '2.5em',
			backgroundColor: theme.palette.secondary.main,
			color: '#e0f7fa',
			fontFamily: "'Varela Round', sans-serif",
			fontSize: '1.2rem',
			borderRadius: '1em'
		}
	})
);
