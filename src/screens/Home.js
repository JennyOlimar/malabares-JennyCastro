import React, {useState, useEffect } from 'react';
import { View} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { getItems } from '../app/api-consultas';
import GridItem from '../components/GridItem';

const Home = ({ navigation }) => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then( obj => {
      setItems(obj);
    });
  }, [])

  const handleSelectedCategory = (item) => {
    navigation.navigate('Productos', {
      prod: item
    });
  }
  
  return (
    <View>
      <FlatList
        data = { items }
        renderItem = { ({item}) => <GridItem onSelected={handleSelectedCategory} item={item} navigation = {navigation} />}
        keyExtractor = {item => item.id}
        numColumns = {2} 
      />
    </View>
  )
}

export default Home