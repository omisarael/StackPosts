import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default ({navigation}) => {
  const id = navigation.getParam('PublicaionId');
  const title = navigation.getParam('PublicaionTitle');
  const body = navigation.getParam('PublicacionBody');
  return (
    <View style={styles.container}>
      <Text>{id}</Text>
      <Text>{title}</Text>
      <Text>{body}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  