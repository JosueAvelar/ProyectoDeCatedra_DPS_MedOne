import { Button, Divider, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

import { ArrowIosBackIcon } from '../assets/icons'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { View, StyleSheet, Image, ScrollView, Input } from 'react-native'; 

import Inputs from '../components/Inputs';
import Submit from '../components/Submit';
import Account from '../components/Account';

export const RegisterScreen = ({ navigation }) => {

  const navigateLogin = () => {
    navigation.navigate('Login');
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={navigateBack}/>
  );

  return (
    //<SafeAreaView style={{ flex: 1 }}>
      //<TopNavigation title='Register' alignment='center' accessoryLeft={BackAction}/>
      //<Divider/>
      //<Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        //<Text category='h1'>Register</Text>
      //</Layout>
    //</SafeAreaView>

<SafeAreaView style={{ flex: 1 }}>
    <ScrollView style={{backgroundColor: 'white'}}>
    <TopNavigation title='Registro' alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
            <View style={styles.container}>
                
                <Text style={styles.textTitle}>Farmacias MedOne</Text>
                <Text style={styles.textBody}>Crea una cuenta</Text>
                <View style={{marginTop: 5}} />
                <Inputs name="Nombre" icon="user" />
                <Inputs name="Apellido" icon="user" />
                <Inputs name="Correo electrónico" icon="envelope" />
                <Inputs name="Contraseña" icon="lock" pass={true} />
                <View style={{width: '90%'}}>
                    <Text style={[styles.textBody], {alignSelf: 'flex-end'}}>¿Olvidó su contraseña?</Text>
                </View>
                <Submit title="CREAR CUENTA" color="#0148a4" />
                <Text style={styles.textBody}>O conectate usando</Text>
                <View style={{flexDirection: 'row'}}>
                    <Account color="#3b5c8f" icon="facebook" title="Facebook" />
                    <Account color="#ec482f" icon="google" title="Google" />
                </View>
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <Text style={styles.textBody}>¿Ya tienes una cuenta?</Text>                 
                </View>
                <Button onPress={navigateLogin}>INICIAR SESIÓN</Button>
            </View>
        </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 400,
        height: 250,
        marginVertical: 10,
    },
    textTitle: {
        fontSize: 40,
        fontFamily: 'Foundation',
        marginVertical: 5
    },
    textBody: {
        fontSize: 16,
        fontFamily: 'Foundation'
    }
});
