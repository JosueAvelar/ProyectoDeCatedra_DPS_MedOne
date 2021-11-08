import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button, Platform, Alert, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ProductItem from '../../components/shop/ProductItem';
import HeaderButton from '../../components/UI/HeaderButton';
import Colors from '../../constants/Colors';
import * as productsActions from '../../store/actions/products';

const UserProductsScreen = props => {
   const [error, setError] = useState(null);
   const [isDeleting, setIsDeleting] = useState(false);
   const userProducts = useSelector(state => state.products.userProducts);
   const dispatch = useDispatch();

   const editProductHandler = (id) => {
      props.navigation.navigate('EditProduct', { productId: id });
   };

   useEffect(() => {
      if (error) {
         Alert.alert('¡Ha ocurrido un error!', error, [{ text: 'OK' }]);
      }
   }, [error]);

   const deleteHandler = (id) => {
      Alert.alert('¿Estás seguro?', '¿Realmente quieres eliminar este producto?', [
         { text: 'No', style: 'default' },
         {
            text: 'Sí', style: 'destructive', onPress: async () => {
               setError(null);
               setIsDeleting(true);
               try {
                  await dispatch(productsActions.deleteProduct(id));
               } catch (err) {
                  setError(err.message);
               }
               setIsDeleting(false);
            }
         }
      ])
   }

   if (isDeleting) {
      return (
         <View style={styles.centered}>
            <ActivityIndicator size='large' color={Colors.primary} />
         </View>
      )
   }

   if (userProducts.length === 0) {
      return (
         <View style={styles.centered}>
            <Text>    No tienes permiso para agregar productos. </Text>
            <Text>    ¡Realiza una compra ahora! </Text>
         </View>
      )
   }

   return (
      <FlatList
         data={userProducts}
         keyExtractor={item => item.id}
         renderItem={itemData => (
            <ProductItem
               image={itemData.item.imageUrl}
               title={itemData.item.title}
               price={itemData.item.price}
               onSelect={() => {
                  editProductHandler(itemData.item.id);
               }}
            >
               <Button
                  color={Colors.primary}
                  title='Editar'
                  onPress={() => {
                     editProductHandler(itemData.item.id);
                  }}
               />
               <Button
                  color={Colors.primary}
                  title='Eliminar'
                  onPress={deleteHandler.bind(this, itemData.item.id)}
               />
            </ProductItem>
         )}
      />
   )
};

export const screenOptions = navData => {
   return {
      headerTitle: 'Tus productos',
      headerLeft: () => (
         <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
               title='Menu'
               iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
               onPress={() => {
                  navData.navigation.toggleDrawer();
               }}
            />
         </HeaderButtons>
      ),
      headerRight: () => (
         <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
               title='Add'
               iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
               onPress={() => {
                  navData.navigation.navigate('EditProduct');
               }}
            />
         </HeaderButtons>
      )
   }
}

const styles = StyleSheet.create({
   centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   }
});

export default UserProductsScreen;