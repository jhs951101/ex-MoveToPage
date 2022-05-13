import 'react-native-gesture-handler';
import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';

class HomeScreen extends Component {

  render(){
    return(
      <View>
        <Text>HomeScreen</Text>
        <Button
          title="Go to Login Screen"
          onPress={() =>{
            this.props.navigation.navigate('Login')
          }}
        />
      </View>
    )
  }
}

export default HomeScreen;