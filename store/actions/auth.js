import AsyncStorage from '@react-native-async-storage/async-storage';

export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';
export const SET_DID_TRY_AL = 'SET_DID_TRY_AL';

let timer;

export const setDidTryAL = () => {
   return { type: SET_DID_TRY_AL };
}

export const authenticate = (userId, token, expiryTime) => {
   return dispatch => {
      dispatch(setLogoutTimer(expiryTime));
      dispatch({ type: AUTHENTICATE, userId: userId, token: token });
   };
}

export const signup = (email, password) => {
   return async dispatch => {
      const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDtYtcI_7PDxLJiHAHagb6T03knVX5iOu8', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
         })
      })

      if (!response.ok) {
         const errorResData = await response.json();
         const errorId = errorResData.error.message;
         let message = '¡Algo salió mal!';

         if (errorId === 'EMAIL_EXISTS') {
            message = 'Este correo electrónico ya existe.';
         } else if (errorId === 'TOO_MANY_ATTEMPTS_TRY_LATER') {
            message = 'Todas las solicitudes de este dispositivo se han bloqueado debido a una actividad inusual. Vuelve a intentarlo más tarde.';
         }
         throw new Error(message);
      }

      const resData = await response.json();
      dispatch(
         authenticate(
            resData.localId, resData.idToken, parseInt(resData.expiresIn) * 1000
         )
      );

      const expirationDate = new Date(
         new Date().getTime() + parseInt(resData.expiresIn) * 1000
      );
      saveDataToStorage(resData.idToken, resData.localId, expirationDate);
   };
}

export const login = (email, password) => {
   return async dispatch => {
      const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDtYtcI_7PDxLJiHAHagb6T03knVX5iOu8', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
         })
      })

      if (!response.ok) {
         const errorResData = await response.json();
         const errorId = errorResData.error.message;
         let message = '¡Algo salió mal!';

         if (errorId === 'EMAIL_NOT_FOUND') {
            message = 'Este correo electrónico no ha sido encontrado.';
         } else if (errorId === 'INVALID_PASSWORD') {
            message = 'La contraseña ingresada no es válida.';
         }
         throw new Error(message);
      }

      const resData = await response.json();
      dispatch(
         authenticate(
            resData.localId,
            resData.idToken,
            parseInt(resData.expiresIn) * 1000
         )
      );
      const expirationDate = new Date(new Date().getTime() + parseInt(resData.expiresIn) * 1000);
      saveDataToStorage(resData.idToken, resData.localId, expirationDate);
   };
}

export const logout = () => {
   clearLogoutTimer();
   AsyncStorage.removeItem('userData');
   return { type: LOGOUT };
}

const clearLogoutTimer = () => {
   if (timer) {
      clearTimeout(timer);
   }
}

const setLogoutTimer = expirationTime => {
   return dispatch => {
      timer = setTimeout(() => {
         dispatch(logout());
      }, expirationTime)//
   };
}

const saveDataToStorage = (token, userId, expirationDate) => {
   AsyncStorage.setItem('userData', JSON.stringify({
      token: token,
      userId: userId,
      expiryDate: expirationDate.toISOString()
   }));
}