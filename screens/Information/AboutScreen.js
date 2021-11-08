import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Platform, ActivityIndicator, StyleSheet, ScrollView, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Card } from 'react-native-elements'
import HeaderButton from '../../components/UI/HeaderButton';
import OrderItem from '../../components/shop/OrderItem';
import Colors from '../../constants/Colors';

const AboutScreen = () => {
  return (
      <Card style={styles.card}>
      <Card.Title style={{textAlign:'center', fontSize:25, fontWeight:'bold', color: Colors.primary}}>Conócenos</Card.Title>
      <Card.Divider/>
      <View style={styles.contenedor}>
      <Image style={styles.imagen} source={require('../../assets/iconMed.png')} />
      <Text style={{textAlign:'justify'}}>
En Farmacias MedOne, contamos con una gran experiencia en apoyo al salvadoreño a nivel nacional tanto remoto como presencial. En Farmacias MedOne trabajamos día con día inspirados en nuestra razón de ser: NUESTROS CLIENTES, por lo que nos esforzamos por ir siempre un paso adelante para cubrir cada una de  sus necesidades, ofreciendo servicios, y ahora en nuestra APP MÓVIL, brindando profesionalismo, responsabilidad, excelencia en el servicio, calidad humana y pasión en todo lo que hacemos.
      </Text>
      </View>
      <Text></Text>
      <Card.Divider/>
      <Text style={{textAlign:'center', fontSize:16, fontWeight:'bold', color:Colors.primary}}>En Farmacias MedOne</Text>
      <Text style={{textAlign:'center', fontSize:16, fontWeight:'bold', color:Colors.primary}}>¡Amamos cuidarte!</Text>
      </Card>
  )

};

export const screenOptions = navData => {
   return {
      headerTitle: 'Sobre nosotros',
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
    height: 100,width: 100,
  },
  contenedor:{
    flexDirection:'row', 
    flexWrap:'wrap', 
    justifyContent:'center'},
})

export default AboutScreen