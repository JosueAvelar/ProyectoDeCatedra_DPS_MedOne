import { Button, Divider, Layout, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

import { View, StyleSheet, Image, ScrollView, Text } from 'react-native'; 

import Inputs from '../components/Inputs';
import Submit from '../components/Submit';
import Account from '../components/Account';

import { ArrowIosBackIcon } from '../assets/icons'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export const LoginScreen = ({ navigation }) => {
  
  const navigateRegister = () => {
    navigation.navigate('Register');
  };

 const navigateHome = () => {
    navigation.navigate('Home');
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={ArrowIosBackIcon} onPress={navigateBack}/>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView style={{backgroundColor: 'white'}}>
    <TopNavigation title='Inicio de sesión' alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
            <View style={styles.container}>
                
                <Text style={styles.textTitle}>Farmacias MedOne</Text>
                <Text style={styles.textBody}>¡Bienvenido nuevamente!</Text>
                <View style={{marginTop: 5}} />
                <Inputs name="Correo electrónico" icon="envelope" />
                <Inputs name="Contraseña" icon="lock" pass={true} />
                <View style={{width: '90%'}}>
                    <Text style={[styles.textBody], {alignSelf: 'flex-end'}}>¿Olvidó su contraseña?</Text>
                </View>
                <Button onPress={navigateHome}>INICIAR SESIÓN</Button>
                <Text style={styles.textBody}>O conéctate usando</Text>
                <View style={{flexDirection: 'row'}}>
                    <Account color="#3b5c8f" icon="facebook" title="Facebook" />
                    <Account color="#ec482f" icon="google" title="Google" />
                </View>
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <Text style={styles.textBody}>¿No tienes cuenta?</Text>                 
                </View>
                <Button onPress={navigateRegister}>CREAR CUENTA</Button>
            </View>
        </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 250,
        height: 150,
        marginVertical: 2
    },
    textTitle: {
        fontFamily: 'Foundation',
        fontSize: 40,
        marginVertical: 10,
        textAlign: 'center',
    },
    textBody: {
        fontFamily: 'Foundation',
        fontSize: 16
    },
});