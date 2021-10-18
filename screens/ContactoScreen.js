import { Divider, Layout, Text, TopNavigation, TopNavigationAction, ViewPager,Card,Button } from '@ui-kitten/components';
import { StyleSheet,Image,View,ScrollView } from 'react-native';
import { ArrowIosBackIcon } from '../assets/icons'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ContactoScreen = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={navigateBack}/>
  );

  const General = (props) => (<View {...props}>
      <Text style={{textAlign:'center', fontSize:25, fontWeight:'bold',color:'#B5AAF8'}}>Queremos saber de ti</Text>
    </View>);
  
  const Footer = (props) => (<View {...props}>
      <Text category='h6'>En Farmacias MedOne ¡Amamos Cuidarte!</Text>
    </View>);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Contáctanos' alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
      <ScrollView style={styles.app}>

      <React.Fragment>
        <Card style={styles.card} header={General}>
        <View style={styles.contenedor}>
          <Image style={styles.imagen} source={require('../img/contacto/redes.png')} />
          <Text style={{textAlign:'center', fontSize:14, fontWeight:'bold', color:'black'}}>
          Facebook: Farmacias MedOne
          </Text>
          <Text style={{textAlign:'center', fontSize:14, fontWeight:'bold', color:'black'}}>
          Twitter: @FarmaciasMedOne
          </Text>
          <Text style={{textAlign:'center', fontSize:14, fontWeight:'bold', color:'black'}}>
          Instagram: @farmacias.medone
          </Text>
        </View>
        </Card>
      </React.Fragment>

      <React.Fragment style={{justifyContent:'center'}}>
      <Card>
        <Text style={{textAlign:'center', fontSize:14, fontWeight:'bold', color:'blue'}}>Será un gusto responder tus consultas o resolver tus dudas</Text>
      </Card>
      </React.Fragment>

      <React.Fragment style={{justifyContent:'center'}}>
      <Card>
        <Text style={{textAlign:'center', fontSize:16, fontWeight:'bold', color:'#B5AAF8'}}>En Farmacias MedOne</Text>
        <Text style={{textAlign:'center', fontSize:16, fontWeight:'bold', color:'#B5AAF8'}}>¡Amamos cuidarte!</Text>
      </Card>
      </React.Fragment>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1, margin: 2,
  },
  app:{
  backgroundColor:'#98F9E7'
  },
  imagen:{
    height: 190, width: 380,
  },
  contenedor:{
    flexDirection:'row', flexWrap:'wrap', justifyContent:'center',
    textAlign:'justify',},
});