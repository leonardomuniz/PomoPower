import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#f2f2f2",
        borderRadius: 25,
        justifyContent: 'center',
        margin: 5,
        paddingVertical: 20,
        paddingHorizontal: 35,
    },
    buttonText: {
        fontSize: 20,
        textTransform: "uppercase",
        fontWeight: "bold",
        color: "#212121",
    },
    cycle: {
        color: '#fff',
        fontSize: 55,
        fontWeight: 'bold',
      },
      timer: {
        color: '#fff',
        fontSize: 125,
        fontWeight: 'bold',
      },
      working: {
        flex: 1,
        backgroundColor: '#ff4f1f',
        alignItems: 'center',
        justifyContent: 'center',
      },
      relax: {
        flex: 1,
        backgroundColor: '#7febd0',
        alignItems: 'center',
        justifyContent: 'center',
      },

      longRest:{
        flex: 1,
        backgroundColor: '#3694ff',
        alignItems: 'center',
        justifyContent: 'center',        
      }
});