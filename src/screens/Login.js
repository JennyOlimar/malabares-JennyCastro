import React, { useState} from 'react';
import { View,TextInput, TouchableOpacity, Text, } from 'react-native';
import { styles } from '../../styles';
import { signIn } from '../app/api';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
     <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.text}>Email</Text>
      <TextInput style={styles.input} keyboardType={"email-address"} onChangeText={(text) => setEmail(text)}></TextInput>
      <Text style={styles.text}>Clave</Text>
      <TextInput style={styles.input} onChangeText={(text) => setPassword(text)}></TextInput>
      <TouchableOpacity style={styles.button} onPress={ async () => {
        await signIn(email, password);
      }}>
        <Text style={styles.textButton}>Acceder</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login