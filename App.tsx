import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AnimationPage from './component/AnimationPage';
import FormPage from './component/FormPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Animation">
        <Stack.Screen name="Animation" component={AnimationPage} />
        <Stack.Screen name="Form" component={FormPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
