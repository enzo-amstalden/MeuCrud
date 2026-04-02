import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";

import styles from "../styles/styles";

import { createPerson, updatePerson } from "../servers/peopleCrud";

export default function AddEditScreen({ route, navigation }) {

    const person = route.params?.person;

    const [firstname, setFirstName] = useState(person?.firstName || "");
    const [lastname, setLastName] = useState(person?.lastName || "");
    const [email, setEmail] = useState(person?.email || "");

    async function save() {
        const data = { firstname, lastname, email };

        if (person) {
            await updatePerson(person.id, data);
        } else {
            await createPerson(data);
        }
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
    
            <TextInput
                placeholder="First Name"
                value={firstname}
                onChangeText={setFirstName}
            />
            <TextInput
                placeholder="Last Name"
                value={lastname}
                onChangeText={setLastName}
            />
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            
            <Button
                title="Save"
                onPress={save}
            />
    
            <Button
                title="Cancelar"
                onPress={() => navigation.goBack()}
            />
    
        </View>
    );
    
}
