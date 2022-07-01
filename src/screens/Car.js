import React, {useContext} from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppContext } from '../app/provider';
import { styles } from '../../styles';

const Car = ({ navigation }) => {

  const [state, , , removeItem, , ,] = useContext(AppContext);
  const producto = state ? state.map(item => ({ ...item, id: item.id, title: item.title, price: item.price})) : [];

  const generateOrder = async () => {
    const user = await getCurrentUser();
    const order = {
      buyer: user.email,
      items: state,
      total: getTotal(),
      date: new Date().toLocaleString()
    }
  }

  return (
    <View>
      {
        producto.length === 0 ?
        <View style={styles.addItems}>
            <Text style={styles.alertDanger}>El carrito está vacío. Haga click en "Tienda" y agregue productos</Text>
        </View> :
        <View style={styles.container2}>
          <Text style={styles.cardText}>Carrito de compra:</Text>
          {
            state.map( (item, i) =>
               <View key={i} style={[styles.margin10, styles.item]}>
                <Text style={styles.textTitle}>Nombre: {item.title}</Text>
                <Text>Precio: {item.price}</Text>
                <TouchableOpacity style={styles.buttonDelete} onPress={() => removeItem(item.id)}><Text style={styles.textButtonDelete}>Borrar item</Text></TouchableOpacity>
              </View>              
            )
          }
          <Text style={[styles.textTitle, styles.marginLeft]}>Total de la compra: ${state.reduce((acc, obj) => acc + obj.price, 0)}</Text>
          <TouchableOpacity style={styles.buttonOrders} onPress={() => navigation.navigate('Ordenes')}>
            <Text style={styles.textButton}>Generar orden de compra</Text>
          </TouchableOpacity>
        </View>
      }
    </View>
  )
}

export default Car