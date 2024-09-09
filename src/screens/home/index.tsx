import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'; 
import { styles } from './styles';
import { Participant } from '../../components/Participant';


export function Home(){
  function handleParticipantAdd(){
    console.log('clicasse no botão adicionar!');
  }

  function handleParticipantRemove(){
    console.log('clicasse no botão');
  }


  return(
    <View style = {styles.container}>

    <Text style = {styles.eventName}>
      dragon ball daima
      </Text>

    <Text style = {styles.eventDate}>
      sabado 11 de outubro de 2024
      </Text>

    <View style={styles.form}>
      <TextInput style={styles.input}
      placeholder='digita esse krl'
      placeholderTextColor={'#6b6b6b'}
      />
      <TouchableOpacity style = {styles.button} onPress={handleParticipantAdd}>
       <Text style = {styles.buttonText} >+</Text> 
      </TouchableOpacity>
    </View>

    <Participant name="Metal" onRemove={handleParticipantRemove}/>
    <Participant name="Rondon" onRemove={handleParticipantRemove}/>
    <Participant name="Guipy" onRemove={handleParticipantRemove}/>


    

    </View>
  )
};