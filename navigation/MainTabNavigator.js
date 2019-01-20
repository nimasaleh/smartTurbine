import React from 'react';
import { Platform } from 'react-native';
import { Text, View } from 'react-native';
import { Ionicons } from 'react-native-vector-icons'; // 6.2.2
import { createStackNavigator, createBottomTabNavigator ,createAppContainer } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FindBTScreen from '../screens/FindBTScreen';

class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'transparent',
              borderColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'red', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const HomeIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={1} />;
};


const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Home') {
    iconName = `ios-home`;
    // We want to add badges to home tab icon
    IconComponent = HomeIconWithBadge;
  } else if (routeName === 'Info') {
    iconName = `ios-cloud${focused ? '' : '-outline'}`;
  }
  else if (routeName === 'Find') {
    iconName = `ios-bluetooth`;
  }
  else if (routeName === 'Settings') {
    iconName = `ios-cog`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: { screen: HomeScreen },
      Info: { screen: LinksScreen },
      Find: { screen: FindBTScreen },
      Settings: { screen: SettingsScreen },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
      tabBarOptions: {
        activeTintColor: '#133A7C',
        inactiveTintColor: '#47A8E5',
        showLabel: 'false',
        fontWeight: 'bold',
        style: {
    backgroundColor: '#E1F5FE',
    height:60 ,
    borderTopWidth: 5 ,
    borderTopColor: '#133A7C',
    borderBottomWidth: 2 ,
    borderBottomColor: '#133A7C'
  },

      },

    }
  )
);
