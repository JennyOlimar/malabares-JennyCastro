import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../../styles';

const Details = ({route}) => {
    const item = route.params;
  return (
    <View style={styles.container3}>
        <Text style={styles.titleDetail}>{item.name}</Text>
        <Text>{item.description}</Text>
        <Text>{item.price}</Text>
        <Image style={styles.imgDetail} source={{uri: item.picture}} />
    </View>
  )
}

export default Details