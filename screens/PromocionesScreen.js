import { Button, Divider, Layout, TopNavigation, TopNavigationAction, ViewPager, 
Card, Text } from '@ui-kitten/components';

import { StyleSheet,Image,View,ScrollView } from 'react-native';
import { ArrowIosBackIcon } from '../assets/icons'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export const PromocionesScreen = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={navigateBack}/>
  );

  const General = (props) => (<View {...props}>
      <Text category='h6'></Text>
    </View>);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Promociones' alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
      <ScrollView style={styles.app}>

      <React.Fragment>
        <Card style={styles.card}>
        <View style={styles.contenedor}>
          <Image style={styles.imagen} source={require('../img/promociones/promocion1.jpg')} />
          <Text> </Text>
          <Text style={{textAlign:'justify', fontWeight:'bold'}}>
            Promoción válida hasta agotar existencias. Aplica una promoción por compra.
          </Text>
        </View>
        </Card>
      </React.Fragment>

      <React.Fragment>
        <Card style={styles.card}>
        <View style={styles.contenedor}>
          <Image style={styles.imagen} source={require('../img/promociones/promocion2.jpg')} />
          <Text></Text>
          <Text style={{textAlign:'center', fontWeight:'bold'}}>
            Promoción válida todo el mes de octubre.
          </Text>
        </View>
        </Card>
      </React.Fragment>

      <React.Fragment>
        <Card style={styles.card}>
        <View style={styles.contenedor}>
          <Image style={styles.imagen} source={require('../img/promociones/promocion3.jpg')} />
          <Text></Text>
          <Text style={{textAlign:'justify', fontWeight:'bold'}}>
            Promoción en línea de cuidado dermatológico BIODERMA.
          </Text>
        </View>
        </Card>
      </React.Fragment>

      <React.Fragment>
        <Card style={styles.card}>
        <View style={styles.contenedor}>
          <Image style={styles.imagen} source={require('../img/promociones/promocion4.jpg')} />
          <Text> </Text>
          <Text style={{textAlign:'justify', fontWeight:'bold'}}>
            Segunda unidad de StriVectin con 40% de descuento.
          </Text>
        </View>
        </Card>
      </React.Fragment>

      <React.Fragment>
        <Card style={styles.card}>
        <View style={styles.contenedor}>
          <Image style={styles.imagen} source={require('../img/promociones/promocion5.jpg')} />
          <Text> </Text>
          <Text style={{textAlign:'justify', fontWeight:'bold'}}>
          Descuento en QUEEN BEE.
          </Text>
        </View>
        </Card>
      </React.Fragment>

      <React.Fragment>
        <Card style={styles.card}>
        <View style={styles.contenedor}>
          <Image style={styles.imagen} source={require('../img/promociones/promocion6.jpg')} />
          <Text> </Text>
          <Text style={{textAlign:'justify', fontWeight:'bold'}}>
          Promoción válida hasta agotar existencias.
          </Text>
        </View>
        </Card>
      </React.Fragment>


      <React.Fragment>
        <Card style={styles.card}>
        <View style={styles.contenedor}>
          <Image style={styles.imagen} source={require('../img/promociones/promocion7.jpg')} />
          <Text> </Text>
          <Text style={{textAlign:'justify', fontWeight:'bold'}}>
          Ampollas GERMINAL con descuento exclusivo de temporada.
          </Text>
        </View>
        </Card>
      </React.Fragment>

      <React.Fragment>
        <Card style={styles.card}>
        <View style={styles.contenedor}>
          <Image style={styles.imagen} source={require('../img/promociones/promocion8.jpg')} />
          <Text> </Text>
          <Text style={{textAlign:'justify', fontWeight:'bold'}}>
          Promoción válida durante todo el mes de octubre.
          </Text>
        </View>
        </Card>
      </React.Fragment>

      <React.Fragment>
        <Card style={styles.card}>
        <View style={styles.contenedor}>
          <Image style={styles.imagen} source={require('../img/promociones/promocion9.jpg')} />
          <Text> </Text>
          <Text style={{textAlign:'justify', fontWeight:'bold'}}>
          Promoción en línea de cuidado dermatológico KERACNYL: ¡llévate un lindo neceser!
          </Text>
        </View>
        </Card>
      </React.Fragment>


      <React.Fragment>
        <Card style={styles.card}>
        <View style={styles.contenedor}>
          <Image style={styles.imagen} source={require('../img/promociones/promocion10.jpg')} />
          <Text> </Text>
          <Text style={{textAlign:'justify', fontWeight:'bold'}}>
          20% de descuento en productos de la marca BIO BEAUTÉ. Restricciones aplican.
          </Text>
        </View>
        </Card>
      </React.Fragment>

      </ScrollView>
      <Layout style={{ /*flex: 1,*/margin:3, justifyContent: 'center', 
      alignItems: 'center'}}>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1, margin: 3
  },
  app:{
  backgroundColor:'#B5AAF8'
  },
  imagen:{
    height: 320,width: 320,resizeMode: "stretch",
  },
  contenedor:{
    flexDirection:'row', flexWrap:'wrap', justifyContent:'center',}
});