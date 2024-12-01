import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import * as yup from 'yup';

const signUpSchema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  password: yup
    .string()
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .matches(/[A-Z]/, 'A senha deve ter pelo menos uma letra maiúscula')
    .matches(/[a-z]/, 'A senha deve ter pelo menos uma letra minúscula')
    .matches(/\d/, 'A senha deve ter pelo menos um número')
    .matches(
      /[@$!%*?&]/,
      'A senha deve ter pelo menos um caractere especial (@, $, !, %, *, ?, &)'
    )
    .required('Senha é obrigatória'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas não correspondem')
    .required('Confirmação de senha é obrigatória'),
});

const SignUpScreen = ({ route, navigation }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (route.params?.email) {
      setEmail(route.params.email);
    }
  }, [route.params?.email]);

  const handleSignUp = async () => {
    try {
      await signUpSchema.validate(
        { email, password, confirmPassword },
        { abortEarly: false }
      );
      // Lógica de cadastro, se todos os campos forem válidos
      console.log('Cadastro realizado com sucesso');
    } catch (validationErrors) {
      const formattedErrors = {};
      validationErrors.inner.forEach((error) => {
        formattedErrors[error.path] = error.message;
      });
      setErrors(formattedErrors);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <InputField
        placeholder="Nome"
        onChangeText={(value) => {
          setName(value);
          setErrors({ ...errors, name: '' });
        }}
        value={name}
      />
      <InputField
        placeholder="Email"
        onChangeText={(value) => {
          setEmail(value);
          setErrors({ ...errors, email: '' });
        }}
        value={email}
      />
      {errors.email ? (
        <Text style={styles.errorText}>{errors.email}</Text>
      ) : null}
      <InputField
        placeholder="Senha"
        secureTextEntry
        onChangeText={(value) => {
          setPassword(value);
          setErrors({ ...errors, password: '' });
        }}
        value={password}
      />
      {errors.password ? (
        <Text style={styles.errorText}>{errors.password}</Text>
      ) : null}
      <InputField
        placeholder="Confirmar senha"
        secureTextEntry
        onChangeText={(value) => {
          setConfirmPassword(value);
          setErrors({ ...errors, confirmPassword: '' });
        }}
        value={confirmPassword}
      />
      {errors.confirmPassword ? (
        <Text style={styles.errorText}>{errors.confirmPassword}</Text>
      ) : null}
      <Button
        title="Próximo"
        onPress={handleSignUp}
        disabled={!name || !email || !password || !confirmPassword}
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
  errorText: {
    color: 'red',
    marginBottom: 10,
    marginTop: -5,
  },
  buttonSpacing: {
    marginBottom: 15,
  },
});

export default SignUpScreen;
