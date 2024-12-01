import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import InputField from '../../components/InputField'
import Button from '../../components/Button';
import * as yup from 'yup';

const emailSchema = yup.string().email("Email inválido");

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleLogin = async () => {
        try {
            await emailSchema.validate(email);
            if (!password) return;
            Alert.alert(
                "Conta não encontrada",
                "Não encontramos uma conta com o email fornecido. Deseja se cadastrar?",
                [
                    {
                        text: "Sim",
                        onPress: () => navigation.navigate('Cadastro', { email }),
                    },
                    { text: "Cancelar", style: "cancel" },
                ]
            );
            navigation.navigate('MenuRotinas')
        } catch (error) {
            setEmailError(error.message);
        }
    };

    const handleEmailChange = async (value) => {
        setEmail(value);
        try {
            await emailSchema.validate(value);
            setEmailError('');
        } catch (error) {
            setEmailError(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>MyFitJourney</Text>
            <Text style={styles.subtitle}>Login</Text>
            <InputField placeholder="Email" onChangeText={handleEmailChange} value={email} />
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
            <InputField placeholder="Senha" secureTextEntry onChangeText={setPassword} value={password} />
            <Button 
                title="Próximo" 
                onPress={handleLogin} 
                disabled={!email || !password || !!emailError} 
                style={styles.buttonSpacing}
            />
            <Button 
                title="Cadastrar" 
                onPress={() => navigation.navigate('Cadastro', {email})}
                backgroundColor="#e0e0e0"
                style={styles.buttonSpacing}
            />
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
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        marginTop: -5,
    },
    buttonSpacing: {
        marginBottom: 15,
    },
});

export default LoginScreen;
