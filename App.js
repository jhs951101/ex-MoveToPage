import 'react-native-gesture-handler';
import React,{Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './pages/login';
import HomeScreen from './pages/home';

const Stack = createStackNavigator();

class App extends Component {

  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen 
            name='Login' 
            component={LoginScreen}
          />
          <Stack.Screen 
            name='Home' 
            component={HomeScreen}
            />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;