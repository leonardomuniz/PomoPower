import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		backgroundColor: '#f2f2f2',
		borderRadius: 25,
		justifyContent: 'center',
		margin: 5,
		paddingVertical: 20,
		paddingHorizontal: 35
	},

	buttonText: {
		fontSize: 20,
		textTransform: 'uppercase',
		fontWeight: 'bold',
		color: '#212121'
	},

	cycle: {
		color: '#fff',
		fontSize: 55,
		fontWeight: 'bold'
	},

	timer: {
		color: '#fff',
		fontSize: 125,
		fontWeight: 'bold'
	},

	working: {
		flex: 1,
		backgroundColor: '#ff4f1f',
		alignItems: 'center',
		justifyContent: 'center'
	},

	relax: {
		flex: 1,
		backgroundColor: '#7febd0',
		alignItems: 'center',
		justifyContent: 'center'
	},

	longRest: {
		flex: 1,
		backgroundColor: '#3694ff',
		alignItems: 'center',
		justifyContent: 'center'
	},

  settings:{
    margin: 0,
    padding: 0,
    backgroundColor: "#424242",
    flex: 1,
  }, 

  formBox: {
    marginBottom: '5%',
    padding: 0,
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,   
  },
  textInfo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  staticBody: {
    width: '90%',
    marginTop: '5%',
    marginLeft: '5%',
  },

  input: {
    fontSize: 20,
    color: '#fff',
    borderBottomColor: '#ff4f1f'
  },

  footer:{
    flex: 1, 
    marginTop:'95%',
    alignContent: "flex-end",
  }
});
