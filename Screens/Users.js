import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableNativeFeedback } from 'react-native';
import ListItem from '../Components/ListItems'
//import { FlatList } from 'react-native-gesture-handler';

// const users = [
//     { id: '1', name: "omar" },
//     { id: '2', name: 'Xhareni' }
// ]

export default ({navigation}) => {
    //utilizando hooks
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        alert('aqui tarda')
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json();
        setUsers(json);
        setLoading(false);
    }

    useEffect(()=>{
        fetchUsers();
    }, [])
    
    //utilizando hooks
    return (
        <View style={styles.container}>
            {/* <Button title="sdfghjk" onPress={fetchUsers}/> */}
            {/* si loading se cumple en primera instancia devuelve text cargando
            caso contrario muestra el flatList */}
            {loading == true ? <Text>Cargando...</Text> :
                <FlatList
                    style={styles.list}
                    data={users}
                    keyExtractor={x => String(x.id)}
                    renderItem={({ item }) => <ListItem 
                                                title={item.name}
                                                onPress={()=>navigation.navigate('PostsScreen', {user_id: item.id})}
                                                />}
                />
            }
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    list: {
        alignSelf: 'stretch'
    }
});
