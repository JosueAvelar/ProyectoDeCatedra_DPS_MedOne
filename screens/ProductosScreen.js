import { ArrowIosBackIcon, MenuIcon } from '../assets/icons';
import { Divider, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { View, StyleSheet, Image, ScrollView } from 'react-native'; 
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, DrawerActions } from "@react-navigation/native";

export const ProductosScreen = () => {
  const navigation = useNavigation();

  const renderDrawerAction = () => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
          title="Productos"
          alignment="center"
          accessoryLeft={renderDrawerAction}
        />
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ScrollView style={styles.app}>
         <View style={styles.listado}>
         <View style={styles.listaItem}><Image style={styles.imagen} source={require('../img/productos/m1.jpeg')}/></View>
         <View style={styles.listaItem}><Image style={styles.imagen} source={require('../img/productos/m2.jpeg')}/></View>
         <View style={styles.listaItem}><Image style={styles.imagen} source={require('../img/productos/m3.jpeg')}/></View>
         <View style={styles.listaItem}><Image style={styles.imagen} source={require('../img/productos/m4.jpeg')}/></View>
         <View style={styles.listaItem}><Image style={styles.imagen} source={require('../img/productos/m5.jpeg')}/></View>
         <View style={styles.listaItem}><Image style={styles.imagen} source={require('../img/productos/m6.jpeg')}/></View>
         </View>
        </ScrollView>
      </Layout>
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
app:{
  backgroundColor:'#f5f5f5'
}
})