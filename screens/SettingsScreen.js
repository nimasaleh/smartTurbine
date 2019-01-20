import React from 'react';
import { ExpoConfigView } from '@expo/samples';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { WebBrowser } from 'expo';
import { createStackNavigator, createBottomTabNavigator ,createAppContainer } from 'react-navigation';
import { MonoText } from '../components/StyledText';

const styles = require('../constants/style');

 export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */

     return (

     <View style={styles.container}>


       <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
         <View style={styles.welcomeContainer}>
         <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
            />
         <Image
           source={require('./logo.png')}
           style={{ width: 80, height: 70, alignItems: 'center' }}
         />
         </View>

         <View style={styles.getStartedContainer}>

           <Text style={styles.getStartedText}>Get started by opening</Text>

           <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
           <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>


           </View>

           <Text style={styles.getStartedText}>
             Smart Wind Turbine
           </Text>
         </View>

         <View style={styles.helpContainer}>
           <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
             <Text style={styles.helpLinkText}>For further information please visit our website</Text>
           </TouchableOpacity>
         </View>
       </ScrollView>

     </View>
   );
  }
}
