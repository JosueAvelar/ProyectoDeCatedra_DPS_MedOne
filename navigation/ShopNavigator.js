import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { Platform, SafeAreaView, Button, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

import ProductsOverviewScreen, { screenOptions as productOverviewScreenOptions } from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen, { screenOptions as productDetailScreenOptions } from '../screens/shop/ProductDetailScreen';
import CartScreen, { screenOptions as cartScreenOptions } from '../screens/shop/CartScreen';
import AboutScreen, { screenOptions as aboutScreenOptions } from '../screens/Information/AboutScreen';
import ContactUsScreen, { screenOptions as contactUsScreenOptions } from '../screens/Information/ContactUsScreen';
import OurServicesScreen, { screenOptions as ourServicesScreenOptions } from '../screens/Services/OurServicesScreen';
import HomeScreen, { screenOptions as homeScreenOptions } from '../screens/Services/HomeScreen';
import OrdersScreen, { screenOptions as ordersScreenOptions } from '../screens/shop/OrdersScreen';
import UserProductsScreen, { screenOptions as userProductsScreenOptions } from '../screens/user/UserProductsScreen';
import EditProductScreen, { screenOptions as editProductScreenOptions } from '../screens/user/EditProductScreen';
import AuthScreen, { screenOptions as authScreenOptions } from '../screens/user/AuthScreen';
import Colors from '../constants/Colors';
import * as authActions from '../store/actions/auth';

const defaultNavOptions = {
   headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
   },
   headerTitleStyle: {
      fontFamily: 'open-sans-bold'
   },
   headerBackTitleStyle: {
      fontFamily: 'open-sans'
   },
   headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
}

const ProductsStackNavigator = createStackNavigator();

const ProductsNavigator = () => {
   return <ProductsStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <ProductsStackNavigator.Screen 
         name='ProductsOverview' 
         component={ProductsOverviewScreen}
         options={productOverviewScreenOptions} 
      />
      <ProductsStackNavigator.Screen 
         name='ProductDetail' 
         component={ProductDetailScreen} 
         options={productDetailScreenOptions}
      />
      <ProductsStackNavigator.Screen 
         name='Cart' 
         component={CartScreen} 
         options={cartScreenOptions}
      />
   </ProductsStackNavigator.Navigator>
}

const OrdersStackNavigator = createStackNavigator();

export const OrdersNavigator = () => {
   return <OrdersStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <OrdersStackNavigator.Screen 
         name='Orders' 
         component={OrdersScreen} 
         options={ordersScreenOptions} 
      />
   </OrdersStackNavigator.Navigator>
}

const AdminStackNavigator = createStackNavigator();

export const AdminNavigator = () => {
   return <AdminStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <AdminStackNavigator.Screen 
         name='UserProducts' 
         component={UserProductsScreen} 
         options={userProductsScreenOptions} 
      />
      <AdminStackNavigator.Screen 
         name='EditProduct' 
         component={EditProductScreen}
         options={editProductScreenOptions} 
      />
   </AdminStackNavigator.Navigator>
}

const AboutStackNavigator = createStackNavigator();

export const AboutNavigator = () => {
   return <AboutStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <AboutStackNavigator.Screen 
         name='About Us' 
         component={AboutScreen} 
         options={aboutScreenOptions} 
      />
   </AboutStackNavigator.Navigator>
}

const ContactUsStackNavigator = createStackNavigator();

export const ContactUsNavigator = () => {
   return <ContactUsStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <ContactUsStackNavigator.Screen 
         name='Conact Us' 
         component={ContactUsScreen} 
         options={contactUsScreenOptions} 
      />
   </ContactUsStackNavigator.Navigator>
}

const OurServicesStackNavigator = createStackNavigator();

export const OurServicesNavigator = () => {
   return <OurServicesStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <OurServicesStackNavigator.Screen 
         name='Our Services' 
         component={OurServicesScreen} 
         options={ourServicesScreenOptions} 
      />
   </OurServicesStackNavigator.Navigator>
}

const HomeStackNavigator = createStackNavigator();

export const HomeScreenNavigator = () => {
   return <HomeStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <HomeStackNavigator.Screen 
         name='Home' 
         component={HomeScreen} 
         options={homeScreenOptions} 
      />
   </HomeStackNavigator.Navigator>
}

const ShopDrawerNavigator = createDrawerNavigator();

export const ShopNavigator = () => {   
   const dispatch = useDispatch();

   return <ShopDrawerNavigator.Navigator 
      drawerContent={props => {
         return (
            <View style={{ flex: 1, paddingTop: 20 }}>
               <SafeAreaView forceIncet={{ top: 'always', horizontal: 'never' }}>
                  <DrawerItemList {...props} />
                  <Button title='Cerrar sesión' color={Colors.primary} onPress={() => {
                     dispatch(authActions.logout());
                  }} />
               </SafeAreaView>
            </View>
         )
      }} 
      drawerContentOptions={{
         activeTintColor: Colors.primary
      }}
   >
      <ShopDrawerNavigator.Screen
         name='Inicio'
         component={HomeScreenNavigator}
         options={{
            drawerIcon: props => (
               <Ionicons
                  name={Platform.OS === 'android' ? 'md-home' : 'ios-home'}
                  size={23}
                  color={props.color}
               />
            )
         }}
      />
      <ShopDrawerNavigator.Screen
         name='Productos'
         component={ProductsNavigator}
         options={{
            drawerIcon: props => (
               <Ionicons
                  name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                  size={23}
                  color={props.color}
               />
            )
         }}
      />
      <ShopDrawerNavigator.Screen
         name='Mis pedidos'
         component={OrdersNavigator}
         options={{
            drawerIcon: props => (
               <Ionicons
                  name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
                  size={23}
                  color={props.color}
               />
            )
         }}
      />
      <ShopDrawerNavigator.Screen
         name='Nuestros servicios'
         component={OurServicesNavigator}
         options={{
            drawerIcon: props => (
               <Ionicons
                  name={Platform.OS === 'android' ? 'md-star-outline' : 'ios-star-outline'}
                  size={23}
                  color={props.color}
               />
            )
         }}
      />
      <ShopDrawerNavigator.Screen
         name='Contáctanos'
         component={ContactUsNavigator}
         options={{
            drawerIcon: props => (
               <Ionicons
                  name={Platform.OS === 'android' ? 'md-chatbubble-ellipses-outline' : 'ios-chatbubble-ellipses-outline'}
                  size={23}
                  color={props.color}
               />
            )
         }}
      />
      <ShopDrawerNavigator.Screen
         name='Sobre nosotros'
         component={AboutNavigator}
         options={{
            drawerIcon: props => (
               <Ionicons
                  name={Platform.OS === 'android' ? 'md-information-circle' : 'ios-information-circle'}
                  size={23}
                  color={props.color}
               />
            )
         }}
      />
      <ShopDrawerNavigator.Screen
         name='Administrador'
         component={AdminNavigator}
         options={{
            drawerIcon: props => (
               <Ionicons
                  name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                  size={23}
                  color={props.color}
               />
            )
         }}
      />
   </ShopDrawerNavigator.Navigator>
}

const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () => {
   return <AuthStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <AuthStackNavigator.Screen
         name='Auth'
         component={AuthScreen}
         options={authScreenOptions} 
      />
   </AuthStackNavigator.Navigator>
} 
