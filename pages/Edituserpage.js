import {View, Text, Alert, TextInput, Button} from 'react-native';
import { useState } from 'react';
import axios from 'axios';

import styles from '../styles';

export default function EditUserPage({route, navigation}) {
    const {user} = route.params;

    const [first_name, setFirstName] = useState(user.first_name);
    const [last_name, setLastName] = useState(user.last_name);
    const [email, setUserEmail] = useState(user.email);
    const [gender, setUserGender] = useState(user.gender);
    const [password, setUserPassword] = useState(user.password);

    const handleUpdate = () => {
       if(!first_name || !last_name || !email || !gender || !password) {
        window.alert("Error", "Please fill all required fields");
        return;
    }

    axios
        .put(`http://192.168.30.216:8000/registration/api/users/${user.id}/`, {
            first_name : first_name,
            last_name: last_name,
            email: email,
            gender: gender,
            password: password,
        })
        .then(() => {
            Alert.alert("Success", "User updated successfully");
            navigation.goBack();
        })
        .catch((error) => {
            console.error(error);
            Alert.alert("Error", "Failed to update");
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Edit User Page</Text>

            <TextInput style={styles.input}
            value={first_name}
            onChangeText={setFirstName}/>

            <TextInput style={styles.input}
            value={last_name}
            onChangeText={setLastName}/>

            <TextInput style={styles.input}
            value={email}
            onChangeText={setUserEmail}/>

            <TextInput style={styles.input}
            value={gender} 
            onChangeText={setUserGender}/>

            <TextInput style={styles.input}
            value={password}
            onChangeText={setUserPassword}/>

            <View> 
                <Button 
                    title="Update Record"
                    onPress={handleUpdate}
                />
            </View>

        </View>
    )
}