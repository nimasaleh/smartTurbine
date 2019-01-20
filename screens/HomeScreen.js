import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Easing,
  Button
} from 'react-native';
import { WebBrowser } from 'expo';
import { createStackNavigator, createBottomTabNavigator ,createAppContainer } from 'react-navigation';
import { MonoText } from '../components/StyledText';
import { WeatherWidget } from 'react-native-weather';

const styles = require('../constants/style');


export default class HomeScreen extends React.Component {
  static navigationOptions = {
      title: 'Home',
  };

  render() {
    return (

      <View style={styles.container}>


        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
          <Image
            source={require('./logo-blue.png')}
            style={{ width: 80, height: 70, alignItems: 'center'}}
          />
          </View>

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}


            <Text style={styles.getStartedText}>Get started by opening</Text>
            <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#fff"
            />
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

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://www.varzesh3.com/'
    );
  };
}
