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

	pomodoro: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},

	settings: {
		margin: 0,
		marginTop: '20%',
		padding: 0,
	},

	toDoList: {
		flex: 1,
		flexDirection: 'column',
		margin: 0, 
		padding: 0
	},

	toDos: {
		marginTop: '15%',

	},

	formBox: {
		marginBottom: 20,
		padding: 0,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		flex: 1
	},

	staticBody: {
		width: '90%',
		marginTop: '5%',
		marginLeft: '5%'
	},

	showCase: {
        display: "flex",
        flexDirection: 'row',
        flexWrap: "wrap",
		marginVertical: 15,
    },

	footer: {
		marginTop: '75%',
		flexDirection: 'column',
		justifyContent: 'flex-end',
	}
});
