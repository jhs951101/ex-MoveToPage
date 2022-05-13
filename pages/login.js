import 'react-native-gesture-handler';
import React,{Component} from 'react';
import {View,Text, Button} from 'react-native';

class LoginScreen extends Component {

  render(){
    return(
      <View>
        <Text>LoginScreen</Text>
        <Button
          title="Go to Home Screen"
          onPress={() => {
            this.props.navigation.navigate('Home')
          }}
        />
      </View>
    )
  }
}

export default LoginScreen;