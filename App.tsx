import { Text, View, StyleSheet } from 'react-native'; 
export default function App(){
  return(
    <View style = {styles.container}>

    <Text style = {styles.eventName}>
      Nome do evento
      </Text>

    <Text style = {styles.eventDate}>
      sabado 8 de outubro de 2024
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: 'black',
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
  }
});