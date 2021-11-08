import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Platform, ActivityIndicator, StyleSheet, ScrollView, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Card } from 'react-native-elements'
import HeaderButton from '../../components/UI/HeaderButton';
import OrderItem from '../../components/shop/OrderItem';
import Colors from '../../constants/Colors';

const ContactUsScreen = () => {
  return (
      <Card style={styles.card}>
      <Card.Title style={{textAlign:'center', fontSize:25, fontWeight:'bold', color: Colors.primary}}>Queremos saber de ti</Card.Title>
      <Card.Divider/>
      <View style={styles.contenedor}>
      <Image style={styles.imagen} source={require('../../assets/redes.png')} />
      <Text style={{textAlign:'justify', fontSize:15, fontWeight:'bold', marginTop:15}}>
        Facebook: Farmacias MedOne
      </Text>
      <Text style={{textAlign:'justify', fontSize:15, fontWeight:'bold'}}>
        Twitter: @FarmaciasMedOne
      </Text>
      <Text style={{textAlign:'justify', fontSize:15, fontWeight:'bold'}}>
        Instagram: @farmacias.medone
      </Text>
      </View>
      <Text></Text>
      <Card.Divider/>
      <Text style={{textAlign:'center', fontSize:14, fontWeight:'bold'}}>Será un gusto responder tus consultas o resolver tus dudas</Text>
      <Text></Text>
      <Card.Divider/>
      <Text style={{textAlign:'center', fontSize:16, fontWeight:'bold', color:Colors.primary}}>En Farmacias MedOne</Text>
      <Text style={{textAlign:'center', fontSize:16, fontWeight:'bold', color:Colors.primary}}>¡Amamos cuidarte!</Text>
      </Card>
  )

};

export const screenOptions = navData => {
   return {
      headerTitle: 'Contáctanos',
      headerLeft: () => (
         <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
               title='Menu'
               iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
               onPress={() => {
                  navData.navigation.toggleDrawer();
               }}
            />
         </HeaderButtons>
      )
   }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
      borderRadius: 10,
      backgroundColor: 'white',
  },
  imagen:{
    height: 150, width: 250, resizeMode: "stretch",
  },
  contenedor:{
    flexDirection:'row', 
    flexWrap:'wrap', 
    justifyContent:'center'},
})

export default ContactUsScreen