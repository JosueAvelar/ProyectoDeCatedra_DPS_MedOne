import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Platform, ActivityIndicator, StyleSheet, ScrollView, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Card } from 'react-native-elements'
import HeaderButton from '../../components/UI/HeaderButton';
import OrderItem from '../../components/shop/OrderItem';
import Colors from '../../constants/Colors';

const OurServicesScreen = () => {
  return (
    <ScrollView>
      <Card style={styles.card}>
      <Card.Title style={{textAlign:'center', fontSize:25, fontWeight:'bold', color: Colors.primary}}>Consulta médica general</Card.Title>
      <Card.Divider/>
      <View style={styles.contenedor}>
      <Image style={styles.imagen} source={require('../../img/servicios/General.png')} />
      <Text style={{textAlign:'justify'}}>
En Farmacias MedOne encuentras un amplio equipo de médicos profesionales a tu servicio, para brindarte consulta médica eneral completamente GRATIS
      </Text>
      </View>
      </Card>
      <Card style={styles.card}>
      <Card.Title style={{textAlign:'center', fontSize:25, fontWeight:'bold', color: Colors.primary}}>Toma de presión arterial</Card.Title>
      <Card.Divider/>
      <View style={styles.contenedor}>
      <Image style={styles.imagen} source={require('../../img/servicios/presion.jpg')} />
      <Text style={{textAlign:'justify'}}>
Controlar tu presión arterial periódicamente, es una manera muy importante para prevenir cualquier riesgo cardíaco.
      </Text>
      </View>
      </Card>
      <Card style={styles.card}>
      <Card.Title style={{textAlign:'center', fontSize:25, fontWeight:'bold', color: Colors.primary}}>Servicio de inyección</Card.Title>
      <Card.Divider/>
      <View style={styles.contenedor}>
      <Image style={styles.imagen} source={require('../../img/servicios/inyecciones.png')} />
      <Text style={{textAlign:'justify'}}>
Cumplimos con todos los estándares de calidad para brindarte un servicio de inyección con personal altamente capacitado para cuidar 
de ti y de los que amas.
      </Text>
      </View>
      </Card>
      <Card style={styles.card}>
      <Card.Title style={{textAlign:'center', fontSize:25, fontWeight:'bold', color: Colors.primary}}>Prueba de glucosa</Card.Title>
      <Card.Divider/>
      <View style={styles.contenedor}>
      <Image style={styles.imagen} source={require('../../img/servicios/glucosa.jpg')} />
      <Text style={{textAlign:'justify'}}>
La diabetes puede prevenirse si modificamos nuestros hábitos de vida. ¡El chequeo oportuno es la clave!
      </Text>
      </View>
      </Card>
      <Card style={styles.card}>
      <Card.Title style={{textAlign:'center', fontSize:25, fontWeight:'bold', color: Colors.primary}}>Nebulizaciones</Card.Title>
      <Card.Divider/>
      <View style={styles.contenedor}>
      <Image style={styles.imagen} source={require('../../img/servicios/Nebulizaciones.jpg')} />
      <Text style={{textAlign:'justify'}}>
Queremos mejorar la calidad de vida de los que más amas, brindándoles el servicio de nebulizaciones de medicamentos, para poderse realizar 
con toda seguridad el tratamiento recetado por su médico.
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
      headerTitle: 'Nuestros servicios',
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
    height: 100,width: 100,
  },
  contenedor:{
    flexDirection:'row', 
    flexWrap:'wrap', 
    justifyContent:'center'},
})

export default OurServicesScreen