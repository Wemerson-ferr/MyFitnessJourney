import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress, disabled, backgroundColor }) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                { backgroundColor: disabled ? '#e0e0e0' : backgroundColor || '#dcd4fa' }, // Cor neutra quando desabilitado
            ]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 5,
    },
    buttonText: {
        color: '#000',
        fontWeight: 'bold',
    },
});

export default Button;
