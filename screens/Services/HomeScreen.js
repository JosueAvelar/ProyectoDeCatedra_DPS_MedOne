import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Platform, ActivityIndicator, StyleSheet, ScrollView, Image, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Card } from 'react-native-elements'
import HeaderButton from '../../components/UI/HeaderButton';
import OrderItem from '../../components/shop/OrderItem';
import Colors from '../../constants/Colors';
import OurServicesScreen from '../../screens/Services/OurServicesScreen';

const HomeScreen = () => {
  return (
    <ScrollView>
      
      <Card style={styles.card}>
      <View style={styles.contenedor}>
      <Image style={styles.imagen} source={require('../../img/Home/promo1.jpg')} />
      <Text style={{textAlign:'justify'}}>
Promoción válida al crear tu usuario y realizar la primera compra.
      </Text>
      </View>
      </Card>
      <Card style={styles.card}>
      <View style={styles.contenedor}>
      <Image style={styles.imagen} source={require('../../img/Home/promo3.PNG')} />
      <Text style={{textAlign:'justify'}}>
Promoción mientras duren existencias.
      </Text>
      </View>
      </Card>
      <Card style={styles.card}>
      <View style={styles.contenedor}>
      <Image style={styles.imagen} source={require('../../img/Home/promo5.PNG')} />
      <Text style={{textAlign:'justify'}}>
Promoción mientras duren existencias.
      </Text>
      </View>
      </Card>
      <Card style={styles.card}>
      <View style={styles.contenedor}>
      <Image style={styles.imagen} source={require('../../img/Home/promo6.PNG')} />
      <Text style={{textAlign:'justify'}}>
Promoción válida por compras mayores a $5.00
      </Text>
      </View>
      <Text></Text>
      <Card.Divider/>
      <Text style={{textAlign:'center', fontSize:16, fontWeight:'bold', color:Colors.primary}}>En Farmacias MedOne</Text>
      <Text style={{textAlign:'center', fontSize:16, fontWeight:'bold', color:Colors.primary}}>¡Amamos cuidarte!</Text>
      </Card>
    </ScrollView>
  )

};

export const screenOptions = navData => {
   return {
      headerTitle: 'Inicio',
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
  centered: {
      marginTop:10,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
  card: {
      flex: 1,
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
      borderRadius: 10,
      backgroundColor: 'white',
  },
  imagen:{
    height: 320,width: 320,resizeMode: "stretch",
  },
  contenedor:{
    flexDirection:'row', 
    flexWrap:'wrap', 
    justifyContent:'center'},
})

export default HomeScreen