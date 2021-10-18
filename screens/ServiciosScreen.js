import { Divider, Layout, Text, TopNavigation, TopNavigationAction, ViewPager, Card, Button } from '@ui-kitten/components';
import { StyleSheet,Image,View,ScrollView } from 'react-native';
import { ArrowIosBackIcon } from '../assets/icons'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ServiciosScreen = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={navigateBack}/>
  );

  const General = (props) => (<View {...props}>
      <Text style={{textAlign:'center', fontSize:18, fontWeight:'bold', color:'#B5AAF8'}}>Consulta médica general</Text>
    </View>);

    const Presion = (props) => (<View {...props}>
      <Text style={{textAlign:'center', fontSize:18, fontWeight:'bold', color:'#B5AAF8'}}>Toma de presión arterial</Text>
    </View>);

    const Inyeccion = (props) => (<View {...props}>
      <Text style={{textAlign:'center', fontSize:18, fontWeight:'bold', color:'#B5AAF8'}}>Servicio de inyección</Text>
    </View>);

    const Glucosa = (props) => (<View {...props}>
      <Text style={{textAlign:'center', fontSize:18, fontWeight:'bold', color:'#B5AAF8'}}>Prueba de glucosa</Text>
    </View>);

    const Nebulizacion = (props) => (<View {...props}>
      <Text style={{textAlign:'center', fontSize:18, fontWeight:'bold', color:'#B5AAF8'}}>Nebulizaciones</Text>
    </View>);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Nuestros servicios' alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
      <ScrollView style={styles.app}>

      <React.Fragment>
        <Card style={styles.card} header={General}>
        <View style={styles.contenedor}>
          <Image style={styles.imagen} source={require('../img/servicios/General.png')} />
          <Text style={{textAlign:'justify'}}>¡Porque tu salud es importante para nosotros!
            En Farmacias MedOne encuentras un amplio equipo de médicos profesionales 
            a tu servicio, para brindarte consulta médica eneral completamente GRATIS
          </Text>
        </View>
        </Card>
      </React.Fragment>

      <React.Fragment>
        <Card style={styles.card} header={Presion}>
        <View style={styles.contenedor}>
          <Image style={styles.imagen} source={require('../img/servicios/presion.jpg')} />
          <Text style={{textAlign:'justify'}}>
            Controlar tu presión arterial periódicamente, es una manera muy 
            importante para prevenir cualquier riesgo cardíaco.
          </Text>
        </View>
        </Card>
      </React.Fragment>

      <React.Fragment>
        <Card style={styles.card} header={Inyeccion}>
        <View style={styles.contenedor}>
          <Image style={styles.imagen} source={require('../img/servicios/inyecciones.png')} />
          <Text style={{textAlign:'justify'}}>
            Cumplimos con todos los estándares de calidad para brindarte un 
            servicio de inyección con personal altamente capacitado para cuidar 
            de ti y de los que amas.
          </Text>
        </View>
        </Card>
      </React.Fragment>

      <React.Fragment>
        <Card style={styles.card} header={Glucosa}>
        <View style={styles.contenedor}>
          <Image style={styles.imagen} source={require('../img/servicios/glucosa.jpg')} />
          <Text style={{textAlign:'justify'}}>
            La diabetes puede prevenirse si modificamos nuestros hábitos de vida. 
            ¡El chequeo oportuno es la clave!
          </Text>
        </View>
        </Card>
      </React.Fragment>

      <React.Fragment>
        <Card style={styles.card} header={Nebulizacion}>
        <View style={styles.contenedor}>
          <Image style={styles.imagen} source={require('../img/servicios/Nebulizaciones.jpg')} />
          <Text style={{textAlign:'justify'}}>
            Queremos mejorar la calidad de vida de los que más amas, brindándoles 
            el servicio de nebulizaciones de medicamentos, para poderse realizar 
            con toda seguridad el tratamiento recetado por su médico.
          </Text>
        </View>
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
    textAlign:'justify'}
});