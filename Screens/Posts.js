import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ListItem from '../Components/ListItems';


export default ({navigation}) => {
      const userId = navigation.getParam('user_id')
      //utilizando hooks
      const [loading, setLoading] = useState(true);
      const [posts, setPosts] = useState([]);
  
      const fetchPosts = async () => {
          alert('aqui tarda')
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          const json = await response.json();
          setPosts(json);
          setLoading(false);
      }
  
      useEffect(()=>{
          fetchPosts();
      }, [])
      
      //utilizando hooks
  return (
    <View style={styles.container}>
      {loading == true ? <Text>Cargando...</Text> :
        <FlatList
          style={styles.list}
          data={posts.filter(x => x.userId === userId)}
          keyExtractor={x => String(x.id)}
          // renderItem={({item})=> <Text>{item.id, item.title}</Text>}
          renderItem={({item})=> <ListItem 
                                  title={item.title}
                                  onPress={() => {navigation.navigate('DetalleOfPost', {PublicaionId: item.id, PublicaionTitle: item.title, PublicacionBody: item.body})}}/>}
        />
      }
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
