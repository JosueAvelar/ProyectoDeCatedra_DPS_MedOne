import { Button, Divider, Layout, TopNavigation, TopNavigationAction, ViewPager, 
Card, Text } from '@ui-kitten/components';
import { StyleSheet,Image,View,ScrollView } from 'react-native';
import { MenuIcon } from "../assets/icons";
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, DrawerActions } from "@react-navigation/native";

export const HomeScreen = () => {
  const navigation = useNavigation();
  const navigateDetails = () => {
    navigation.navigate('Details');
  };
  const renderDrawerAction = () => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>);

      const General = (props) => (<View {...props}>
      <Text category='h6'></Text>
    </View>);

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <TopNavigation
          title="Inicio"
          alignment="center"
          accessoryLeft={renderDrawerAction}
        />
      <Divider/>
      <ScrollView style={styles.app}>

      <React.Fragment>
        <Card style={styles.card}>
        <View style={styles.contenedor}>
          <Image style={styles.imagen} source={require('../img/home/promo1.jpg')} />
          <Text> </Text>
          <Text style={{textAlign:'justify', fontWeight:'bold'}}>
            Promoción válida al crear tu usuario y realizar la primera compra.
          </Text>
        </View>
        </Card>
      </React.Fragment>

      <React.Fragment>
        <Card style={styles.card}>
        <View style={styles.contenedor}>
          <Image style={styles.imagen} source={require('../img/home/promo3.png')} />
          <Text> </Text>
          <Text style={{textAlign:'center', fontWeight:'bold'}}>
            Promoción mientras duren existencias.
          </Text>
        </View>
        </Card>
      </React.Fragment>

      <React.Fragment>
        <Card style={styles.card}>
        <View style={styles.contenedor}>
          <Image style={styles.imagen} source={require('../img/home/promo5.png')} />
          <Text> </Text>
          <Text style={{textAlign:'justify', fontWeight:'bold'}}>
            Válido durante el mes de octubre o hasta agotar existencias.
          </Text>
        </View>
        </Card>
      </React.Fragment>

      <React.Fragment>
        <Card style={styles.card}>
        <View style={styles.contenedor}>
          <Image style={styles.imagen} source={require('../img/home/promo6.png')} />
          <Text> </Text>
          <Text style={{textAlign:'justify', fontWeight:'bold'}}>
            Aplica promoción por compras superiores a $5.00
          </Text>
        </View>
        </Card>
      </React.Fragment>
      </ScrollView>
      <Layout style={{ /*flex: 1,*/margin:3, justifyContent: 'center', 
      alignItems: 'center'}}>
        <Button onPress={navigateDetails}>OFERTAS DEL MES</Button>
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
