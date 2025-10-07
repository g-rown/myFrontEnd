import {View, Text, FlatList, Button } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';


import styles from '../styles';

export default function Userlistpage({navigation}) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/registration/api/users/')
        .then(res => {
            setUsers(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    }, []
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Registered User</Text>
            <FlatList 
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View style={styles.card}>
                        <Text>Firstname: {item.first_name}</Text>
                        <Text>Lastname: {item.last_name}</Text>
                        <Text>Email: {item.email}</Text>
                    </View>
                )}/>
        </View>

    )
}

