import React, {useState, useContext} from 'react';
import { View, Text,TextInput, TouchableOpacity } from 'react-native';
import { createItem } from "../app/orders-firebase";
import { AppContext } from '../app/provider';
import { styles } from '../../styles';
import { getCurrentUser } from '../app/api';

const Orders = ({ navigation }) => {
  
  const [state,setState, addItem, removeItem, clear, isInCart, addToCart] = useContext(AppContext);
  const arr = state ? state.map(item => ({ ...item, id: item.id, title: item.title, price: item.price})) : [];
  const producto = state.map(item => ({ ...item, id: item.id, title: item.title, price: item.price}));
  const user = getCurrentUser();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState(0);

  const emailUser = user.then(obj => setEmail(obj.email))

    const ordenCompra = {
    buyer: {
      name: name,
      phone: phone,
      email: email
    },
    items: producto,
    date: new Date(),
  }
  return (
    <View style={styles.container2}>
      <Text style={styles.cardText}>Datos del comprador</Text>
      <View style={[styles.margin10, styles.item]}>
        <TextInput style={styles.input} placeholder="Nombre" onChangeText={(text) => setName(text)}/>
        <TextInput style={styles.input} placeholder="Teléfono" onChangeText={(text) => setPhone(text)}/>
        <Text style={styles.textEmail}>Email del comprador: { email }</Text>
      </View>
      {
        arr.length === 0 ?
          <View style={styles.addItems}>
            <Text style={styles.alertDanger}>No hay órdenes cargadas</Text>
          </View> :
          <View>
            <Text style={styles.cardText}>Productos para la compra:</Text>
            {
              state.map((item,i) => 
                <View key={i} style={[styles.margin10, styles.item]}>
                  <Text style={styles.textTitle}>Nombre: {item.title}</Text>
                  <Text>Precio: {item.price}</Text>
                </View>
              )
            }
            <TouchableOpacity style={styles.buttonOrders} onPress={ () => createItem(ordenCompra)}>
              <Text style={styles.textButton}>Comprar</Text>
            </TouchableOpacity>
          </View> 
      }
    </View>
  )
}

export default Orders