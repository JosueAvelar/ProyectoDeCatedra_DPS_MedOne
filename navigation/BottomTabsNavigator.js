import { HomeIcon, VideoIcon, KeypadIcon } from '../assets/icons';
import { BottomNavigation, BottomNavigationTab, Divider } from '@ui-kitten/components';

import { HomeScreen } from '../screens/HomeScreen';
import React from 'react';
import { StoryDetailsScreen } from '../screens/StoryDetailsScreen';
import { CategoriasScreen } from '../screens/CategoriasScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
    <View>
        <Divider/>
        <BottomNavigation
            appearance='noIndicator'
            selectedIndex={state.index}
            onSelect={index => navigation.navigate(state.routeNames[index])}>
            <BottomNavigationTab title='Inicio' icon={HomeIcon}/>
            <BottomNavigationTab title='Categorías' icon={KeypadIcon}/>
            <BottomNavigationTab title='Comprar' icon={VideoIcon}/>
        </BottomNavigation>
    </View>
  
);

export const BottomTabsNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='Categorias' component={CategoriasScreen}/>
    <Screen name='Perfil' component={LoginScreen}/>
    <Screen name='Details' component={StoryDetailsScreen}/>
  </Navigator>
);
