import React, { Component } from 'react';
import { View, Text ,Button , StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';

 class Welcome extends Component {
     goToScreen = (screenName) => {
         Navigation.push(this.props.componentId,{
             component:{
                 name: screenName,
                 options:{
                     topBar:{
                         title:{
                             text: 'Home',
                         }
                     }
                 }
             }
         })
     };
  render() {
    return (
        <View style={styles.container} >
            <Button title="home" onPress={() => this.goToScreen('home')}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

export default Welcome;