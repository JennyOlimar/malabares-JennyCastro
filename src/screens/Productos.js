import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import ProductoItem from '../components/ProductoItem';

const Productos = ({navigation, route}) => {

  const producto = route.params;
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(producto.prod);
  }, [])

  const handleSelected = (item) => {
    navigation.navigate('Details', {
      productID: item.id,
      name: item.title,
      description: item.description,
      price: item.price,
      picture: item.pictureUrl
    });
  };

  return (
    <View>
      <ProductoItem item={items} onSelected={handleSelected}/>
    </View>
  )
}

export default Productos;