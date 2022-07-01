import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const ProductoItem = ({item, onSelected}) => {

  return (
    <View style={styles.Item}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View>
        <Text style={styles.details}>Precio: $ {item.price}</Text>
        <Text style={styles.details}>Stock: {item.stock}</Text>
      </View>
      <TouchableOpacity style={[styles.button, styles.flex]} onPress={() => onSelected(item)}><Text style={styles.textButton}>Ver Detalle</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  Item: {
    padding: '20px',
    margin: '10px',
    borderRadius: '3px',
    backgroundColor: '#ccc',
    width: '50%',
    alignSelf: 'center',
  },
  title:{
    fontSize: '20px',
    fontFamily: 'sans-serif',
    fontWeight: '600',
    color: 'black',
  },
  details: {
    fontSize: '18px',
  },
   button: {
    paddingHorizontal: '0.75rem',
    paddingVertical: '0.375rem',
    borderRadius: '0.25rem',
    textAlign: 'center',
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    width: '40%',
    marginTop: '20px',
  },
  textButton: {
    color: '#fff',
    fontSize: '1rem',
    lineHeight: '1.5',
    fontWeight: '400',
  },
  flex: {
    alignSelf: 'center',
  }
});

export default ProductoItem;