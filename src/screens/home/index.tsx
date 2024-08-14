import { Text, View, StyleSheet } from 'react-native'; 
import { styles } from './styles';
export function Home(){
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