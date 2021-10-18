import { ArrowIosBackIcon, MenuIcon } from '../assets/icons';
import { Divider, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

import { View, StyleSheet, Image, ScrollView } from 'react-native'; 
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, DrawerActions } from "@react-navigation/native";

export const CategoriasScreen = () => {
  const navigation = useNavigation();

const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={navigateBack}/>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView style={{backgroundColor: 'white'}}>
    <TopNavigation title='Categorías' alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
         <View style={styles.listado}>
         <View style={styles.listaItem}><Image style={styles.imagen} source={require('../img/categorias/hospital.png')}/>
              <Text style={styles.texto}>Primeros auxilios</Text></View>
              <View style={styles.listaItem}><Image style={styles.imagen} source={require('../img/categorias/coronavirus.png')}/>
              <Text style={styles.texto}>COVID-19</Text></View>             
              <View style={styles.listaItem}><Image style={styles.imagen} source={require('../img/categorias/pastillas.png')}/>
              <Text style={styles.texto}>Vitaminas</Text></View> 
              <View style={styles.listaItem}><Image style={styles.imagen} source={require('../img/categorias/tos.png')}/>
              <Text style={styles.texto}>Alergias</Text></View>  
              <View style={styles.listaItem}><Image style={styles.imagen} source={require('../img/categorias/tabletas.png')}/>
              <Text style={styles.texto}>Analgésicos</Text></View>            
              <View style={styles.listaItem}><Image style={styles.imagen} source={require('../img/categorias/frasco-de-medicina.png')}/>
              <Text style={styles.texto}>Antibióticos</Text></View>                
         </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles=StyleSheet.create({
  imagen:{
     width:'100%', height:200, marginVertical:5,
  },
  listaItem:{
  flexBasis:'49%',
},
listado:{
  flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'
},
texto:{
  fontSize:20,marginVertical:5, alignSelf:'center'
},
app:{
  backgroundColor:'#98F9E7'
}
})
