import React, { useState} from 'react';
import { View,TextInput, TouchableOpacity, Text, } from 'react-native';
import { styles } from '../../styles';
import { signUp } from '../app/api';

const Register = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <Text style={styles.text}>Email</Text>
      <TextInput style={styles.input} keyboardType={"email-address"} onChangeText={(text) => setEmail(text)}></TextInput>
      <Text style={styles.text}>Clave</Text>
      <TextInput style={styles.input} onChangeText={(text) => setPassword(text)}></TextInput>
      <TouchableOpacity style={styles.button} onPress={ async () => await signUp(email, password)}>
        <Text style={styles.textButton}>Registrarme</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.pad10]} onPress={ async () => navigation.navigate('Login')}>
        <Text style={styles.textButton}>Ir a Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Register