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
		flex: 1
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
        flexWrap: "wrap"
    },

	footer: {
		flex: 1,
		marginTop: '75%',
		alignContent: 'flex-end'
	}
});
