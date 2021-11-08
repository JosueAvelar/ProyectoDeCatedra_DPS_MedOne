import React, { useState, useEffect, useCallback, useReducer } from 'react';
import {
   View,
   ScrollView,
   StyleSheet,
   Platform,
   Alert,
   KeyboardAvoidingView,
   ActivityIndicator
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../../components/UI/HeaderButton';
import * as productsActions from '../../store/actions/products';
import Input from '../../components/UI/Input';
import Colors from '../../constants/Colors';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
   if (action.type === FORM_INPUT_UPDATE) {
      const updatedValues = {
         ...state.inputValues,
         [action.input]: action.value
      };
      const updatedValidities = {
         ...state.inputValidities,
         [action.input]: action.isValid
      };
      let updatedFormIsValid = true;
      for (let key in updatedValidities) {
         updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
      }
      return {
         formIsValid: updatedFormIsValid,
         inputValidities: updatedValidities,
         inputValues: updatedValues
      };
   }
   return state;
};

const EditProductScreen = props => {
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState();

   const prodId = props.route.params ? props.route.params.productId : null;
   const editedProduct = useSelector(state =>
      state.products.userProducts.find(prod => prod.id === prodId)
   );

   const dispatch = useDispatch();

   const [formState, dispatchFormState] = useReducer(formReducer, {
      inputValues: {
         title: editedProduct ? editedProduct.title : '',
         imageUrl: editedProduct ? editedProduct.imageUrl : '',
         description: editedProduct ? editedProduct.description : '',
         price: ''
      },
      inputValidities: {
         title: editedProduct ? true : false,
         imageUrl: editedProduct ? true : false,
         description: editedProduct ? true : false,
         price: editedProduct ? true : false,

      },
      formIsValid: editedProduct ? true : false
   });

   useEffect(() => {
      if (error) {
         Alert.alert('¡Ha ocurrido un error!', error, [{ text: 'OK' }]);
      }
   }, [error]);

   const submitHandler = useCallback(async () => {
      if (!formState.formIsValid) {
         Alert.alert('Entrada de datos incorrecta.', 'Por favor, revise los errores.', [{ text: 'OK' }])
         return;
      }
      setIsLoading(true);
      setError(null);
      try {
         if (editedProduct) {
            await dispatch(
               productsActions.updateProduct(
                  prodId,
                  formState.inputValues.title,
                  formState.inputValues.description,
                  formState.inputValues.imageUrl
               )
            );
         } else {
            await dispatch(
               productsActions.createProduct(
                  formState.inputValues.title,
                  formState.inputValues.description,
                  formState.inputValues.imageUrl,
                  +formState.inputValues.price
               )
            );
         }
         props.navigation.goBack();
      } catch (err) {
         setError(err.message);
      }

      setIsLoading(false);
   }, [dispatch, prodId, formState]);

   useEffect(() => {
      // props.navigation.setParams({ submit: submitHandler })
      props.navigation.setOptions({
         headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
               <Item
                  title='Save'
                  iconName={Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'}
                  onPress={submitHandler}
               />
            </HeaderButtons>
         )
      })
   }, [submitHandler]);

   const inputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
         type: FORM_INPUT_UPDATE,
         value: inputValue,
         isValid: inputValidity,
         input: inputIdentifier
      });
   }, [dispatchFormState]);

   if (isLoading) {
      return (
         <View style={styles.centered}>
            <ActivityIndicator size='large' color={Colors.primary} />
         </View>
      )
   }

   return (
      <KeyboardAvoidingView
         style={{ flex: 1 }}
         behavior='padding'
         keyboardVerticalOffset={100}
      >
         <ScrollView>
            <View style={styles.form}>
               <Input
                  id='title'
                  label='Título'
                  errorText='Por favor ingrese un título válido.'
                  keyboardType='default'
                  autoCapitalize='sentences'
                  autoCorrect
                  returnKeyType='next'
                  onInputChange={inputChangeHandler}
                  initialValue={editedProduct ? editedProduct.title : ''}
                  initiallyValid={!!editedProduct}
                  required
               />
               <Input
                  id='imageUrl'
                  label='URL de imagen'
                  errorText='Por favor ingrese una URL de imagen válida.'
                  keyboardType='default'
                  returnKeyType='next'
                  onInputChange={inputChangeHandler}
                  initialValue={editedProduct ? editedProduct.imageUrl : ''}
                  initiallyValid={!!editedProduct}
                  required
               />
               {editedProduct ? null : (
                  <Input
                     id='price'
                     label='Price'
                     errorText='Please enter a valid price'
                     keyboardType='decimal-pad'
                     returnKeyType='next'
                     onInputChange={inputChangeHandler}
                     required
                     min={0}
                  />
               )}
               <Input
                  id='description'
                  label='Descripción'
                  errorText='Por favor ingrese una descripción válida.'
                  keyboardType='default'
                  autoCapitalize='sentences'
                  autoCorrect
                  multiline
                  numberOfLines={3}
                  onInputChange={inputChangeHandler}
                  initialValue={editedProduct ? editedProduct.description : ''}
                  initiallyValid={!!editedProduct}
                  required
                  minLength={5}
               />
            </View>
         </ScrollView>
      </KeyboardAvoidingView>
   )
};

export const screenOptions = navData => {
   const routeParams = navData.route.params ? navData.route.params : {};
   return {
      headerTitle: routeParams.productId
         ? 'Edit Product'
         : 'Add Product'      
   }
}

const styles = StyleSheet.create({
   form: {
      margin: 20
   },
   centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   }
});

export default EditProductScreen;