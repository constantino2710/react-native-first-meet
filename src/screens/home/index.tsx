import { Text, View, StyleSheet, TextInput } from 'react-native'; 
import { styles } from './styles';
export function Home(){
  return(
    <View style = {styles.container}>

    <Text style = {styles.eventName}>
      dragon ball daima
      </Text>

    <Text style = {styles.eventDate}>
      sabado 11 de outubro de 2024
      </Text>
      <TextInput style={styles.input}/>


    </View>
  )
};