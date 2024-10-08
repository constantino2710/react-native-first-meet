import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
        backgroundColor: '#131016',
        padding: 24,
    },
    eventName: {
        color: 'white',
        fontWeight: 'bold',
        marginTop: 48,
        fontSize: 24,
    },
    eventDate: {
      color: 'gray',
      fontSize: 16,
    },
    input:{
      flex:1,
      height: 56,
      backgroundColor: '#1f1e25',
      borderRadius: 5,
      color: 'white',
      padding: 16,
      fontSize: 18,
      marginRight: 12,

  },

  buttonText:{
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  button:{
    width:56,
    height: 56,
    backgroundColor: '#31cf67',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  form:{
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  }
});