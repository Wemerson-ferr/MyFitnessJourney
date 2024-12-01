import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import InputField from '../../components/InputField'
import Button from '../../components/Button';

const SignUpDetailsScreen = ({ navigation }) => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');

    const handleCreateAccount = () => {
        // Lógica para criação final da conta
        Alert.alert("Conta criada com sucesso!");
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
            <InputField placeholder="Altura" onChangeText={setHeight} value={height} />
            <InputField placeholder="Peso" onChangeText={setWeight} value={weight} />
            <InputField placeholder="Idade" onChangeText={setAge} value={age} />
            <Button title="Create account" onPress={handleCreateAccount} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
});

export default SignUpDetailsScreen;
