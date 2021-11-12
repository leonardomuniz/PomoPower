import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		borderRadius: 25,
		justifyContent: 'center',
		margin: 5,
		paddingVertical: 15,
		paddingHorizontal: 25,
	},

	buttonText: {
		fontSize: 30,
		textTransform: 'uppercase',
		fontWeight: 'bold',
	},

	cycle: {
		fontSize: 55,
		fontWeight: 'bold'
	},

	timer: {
		fontSize: 125,
		fontWeight: 'bold'
	},

	pomodoro: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},


	settings: {
		margin: 0,
		padding: 0,
		flex: 1
	},

	formBox: {
		marginBottom: '5%',
		padding: 0,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		flex: 1
	},
	textInfo: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold'
	},
	staticBody: {
		width: '90%',
		marginTop: '5%',
		marginLeft: '5%'
	},
	showCase: {
        display: "flex",
        flexDirection: 'row',
        flexWrap: "wrap"
    },

	input: {
		fontSize: 20,
		color: '#fff',
		borderBottomColor: '#ff4f1f'
	},

	footer: {
		flex: 1,
		marginTop: '95%',
		alignContent: 'flex-end'
	}
});
