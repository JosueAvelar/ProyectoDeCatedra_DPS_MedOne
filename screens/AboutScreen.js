import { Divider, Layout, Text, TopNavigation, TopNavigationAction, ViewPager,Card,Button } from '@ui-kitten/components';
import { StyleSheet,Image,View,ScrollView } from 'react-native';
import { ArrowIosBackIcon } from '../assets/icons'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export const AboutScreen = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={navigateBack}/>
  );

  const General = (props) => (<View {...props}>
      <Text style={{textAlign:'center', fontSize:25, fontWeight:'bold',color:'#B5AAF8'}}>Conócenos</Text>
    </View>);
  
  const Footer = (props) => (<View {...props}>
      <Text category='h6'>En Farmacias MedOne ¡Amamos Cuidarte!</Text>
    </View>);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Acerca de nosotros' alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
      <ScrollView style={styles.app}>

      <React.Fragment>
        <Card style={styles.card} header={General}>
        <View style={styles.contenedor}>
          <Image style={styles.imagen} source={require('../assets/icon.png')} />
          <Text>
            En Farmacias MedOne, contamos con una gran experiencia en apoyo al salvadoreño a nivel nacional tanto remoto como presencial. En Farmacias MedOne trabajamos día con día inspirados en nuestra razón de ser: NUESTROS CLIENTES, por lo que nos esforzamos por ir siempre un paso adelante para cubrir cada una de  sus necesidades, ofreciendo servicios, y ahora en nuestra APP MÓVIL, brindando profesionalismo, responsabilidad, excelencia en el servicio, calidad humana y pasión en todo lo que hacemos.
          </Text>
        </View>
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
    height: 100,width: 100,
  },
  contenedor:{
    flexDirection:'row', flexWrap:'wrap', justifyContent:'center',
    textAlign:'justify',},
});