import {View, Text, FlatList, Button, Alert } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';


import styles from '../styles';

export default function Userlistpage({navigation}) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.30.216:8000/registration/api/users/')
        .then(res => {
            setUsers(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    }, []
    );

    const handleEdit = (user) => {
        navigation.navigate('EditUser', {user});
    }

    const handleDelete = (id) => {
        Alert.alert(
            "Confirm Delete",
            "Are you sure you want to delete this user?",
            [
                {text: "Cancel", style: "cancel"},
                {   
                    text: "Delete",
                    style: "destructive",
                    onPress: () => {
                        axios.delete(`http://192.168.30.216:8000/registration/api/users/${id}/`)
                        .then(() => {
                            console.error(err);
                            Alert.alert("Success", "User deleted successfully");
                        });
                    },
                }
            ]
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Registered User</Text>
            <FlatList 
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View style={styles.card}>
                        <Text style={styles.textListUSer}>Firstname: {item.first_name}</Text>
                        <Text style={styles.textListUSer}>Lastname: {item.last_name}</Text>
                        <Text style={styles.textListUSer}>Email: {item.email}</Text>

                        <View style={{ marginBottom: 5, marginTop: 5 }}> 
                            <Button 
                                title="Edit" 
                                color="#c4c9c3"
                                onPress={() => handleEdit(item)}/>
                        </View>

                        <View>
                        <Button 
                            title="Delete"
                            color="#db1218"
                            onPress={() => handleDelete(item.id)}/>
                        </View>
                    </View>
                )}/>
        </View>

    )
}

