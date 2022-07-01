import React, {useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppContext } from '../app/provider';

const GridItem = ({item, onSelected, navigation}) => {

  const [state,setState, addItem, removeItem, clear, isInCart, addToCart] = useContext(AppContext);

  return (
    <View style={style.gridItem}>
      <View style={{...style.container, backgroundColor: item.color, borderRadius: '6px'}}>
        <Text style={style.title}>{item.title}</Text>
        <View style={style.flex}>
          <TouchableOpacity style={style.button} onPress={() => onSelected(item) }><Text style={style.textButton}>Ver Producto</Text></TouchableOpacity>
          <TouchableOpacity style={[style.button, style.marginLeft]} 
            onPress={() => {
                // setState([...state, {...state, item}]);
                addToCart({item});
                navigation.navigate('Carrito');
            }}>
            <Text style={style.textButton}>Agregar al Carrito</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  gridItem: {
    flex: 1,
    borderRadius: '6px',
    margin: '15px',
    height: '150px',
    marginBottom: '50px',
  },
  container: {
    flex: 1,
    borderRadius: '6px',
    shadowColor: 'black',
    shadowOpacity: '0.26',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: '6px',
    elevation: 3,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: '8px',
    height: '100%',
  },
  title: {
    fontFamily: 'sans-serif',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    display: 'flex',
    padding: '20px',
    fontWeight: '600',
    height: '150px',
    fontSize: 18,
  },
  button: {
    paddingHorizontal: '0.75rem',
    paddingVertical: '0.375rem',
    borderRadius: '0.25rem',
    textAlign: 'center',
    backgroundColor: 'white',
    borderColor: 'white',
  },
  textButton: {
    color: 'black',
    fontSize: '1rem',
    lineHeight: '1.5',
    fontWeight: '400',
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: '10px',
    marginRight: '10px',
  },
  marginLeft: {
    marginLeft: '15px',
  }
});

export default GridItem