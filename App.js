import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Screens/register/Login';
import Cadastro from './Screens/register/Cadastro';
import CadastroDetalhado from './Screens/register/CadastroDetalhado';
import Chart from './Screens/report/Chart';
import DetalhesRotinas from './Screens/routines/DetalhesRotinas';
import MenuRotinas from './Screens/routines/MenuRotinas';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="CadastroDetalhado" component={CadastroDetalhado} />
        <Stack.Screen name="Relatório" component={Chart} />
        <Stack.Screen name="MenuRotinas" component={MenuRotinas} />
        <Stack.Screen name="DetalhesRotina" component={DetalhesRotinas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
