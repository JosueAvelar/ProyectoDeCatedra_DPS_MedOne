import {
  Avatar,
  Drawer,
  DrawerItem,
  IndexPath,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import {
  HomeIcon,
  LoginIcon,
  InfoIcon,
  KeypadIcon,
  StarIcon,
  MessageIcon,
  GiftIcon,
} from '../assets/icons';

import { AboutScreen } from '../screens/AboutScreen';
import { BottomTabsNavigator } from './BottomTabsNavigator'
import { LoginScreen } from '../screens/LoginScreen';
import { PromocionesScreen } from '../screens/PromocionesScreen';
import { CategoriasScreen } from '../screens/CategoriasScreen';
import { ServiciosScreen } from '../screens/ServiciosScreen';
import { ContactoScreen } from '../screens/ContactoScreen';
import React from 'react';
import { RegisterScreen } from '../screens/RegisterScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';

const { Navigator, Screen } = createDrawerNavigator();
 
const DrawerContent = ({ navigation, state }) => {
    const styles = useStyleSheet(themedStyles);  
    
    const Header = () => (   
      <Layout style={styles.header}>
          <View style={styles.profileContainer}>
            <Avatar
              size="giant"
              source={require("../assets/icon.png")}
            />
            <Text style={styles.profileName} category="h6">
              Farmacias MedOne
            </Text>
          </View>
        </Layout>
    );

  return (
    <SafeAreaView>
      <Drawer
        header={Header}        
          selectedIndex={new IndexPath(state.index)}
          onSelect={index => navigation.navigate(state.routeNames[index.row])}> 
          <DrawerItem title='Inicio' accessoryLeft={HomeIcon}/>
          <DrawerItem title='Iniciar sesión' accessoryLeft={LoginIcon}/>
          <DrawerItem title='Promociones' accessoryLeft={GiftIcon}/>
          <DrawerItem title='Productos por categoría' accessoryLeft={KeypadIcon}/>
          <DrawerItem title='Nuestros servicios' accessoryLeft={StarIcon}/>
          <DrawerItem title='Contáctanos' accessoryLeft={MessageIcon}/>
          <DrawerItem title='Acerca de' accessoryLeft={InfoIcon}/>
        </Drawer>
    </SafeAreaView>
  )
};

export const HomeDrawerNavigator = () => (
  <Navigator drawerContent={props => <DrawerContent {...props}/>}>
    <Screen name='Home' component={BottomTabsNavigator}/>
    <Screen name='Login' component={LoginScreen}/>
    <Screen name='Promociones' component={PromocionesScreen}/>
    <Screen name='Categorias' component={CategoriasScreen}/>
    <Screen name='Servicios' component={ServiciosScreen}/>
    <Screen name='Contacto' component={ContactoScreen}/>
    <Screen name='About' component={AboutScreen}/>
    <Screen name='Register' component={RegisterScreen}/>
  </Navigator>
);

 const themedStyles = StyleService.create({  
  header: {
    height: 128,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileName: {
    marginHorizontal: 16,
  },
  
  icon: {
    width: 22,
    height: 22,
    marginRight: 8,
  },
}); 
