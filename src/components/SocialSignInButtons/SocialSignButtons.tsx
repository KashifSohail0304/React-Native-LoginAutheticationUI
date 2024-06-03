import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton/CustomButton';

export default function SocialSignButtons() {
   const onSignInFacebook = () => {
        console.warn('facebook')
    };

   const onSignInGoogle = () => {
        console.warn('Google')
    };

   const onSignInApple = () => {
        console.warn('Apple')
    };

   return (
    <View style={styles.container}>
        <CustomButton 
            onPress={onSignInFacebook} 
            text='Sign In with Facebook' 
            type='PRIMARY'
            bgColor= '#E7EAF4' 
            fgColor= '#4765A9'
        />
        <CustomButton 
            onPress={onSignInGoogle} 
            text='Sign In with Google' 
            type='PRIMARY'
            bgColor= '#FAE9EA'
            fgColor= '#DD4D44'
        />
        <CustomButton 
            onPress={onSignInApple} 
            text='Sign In with Apple' 
            type='PRIMARY'
            bgColor= '#e3e3e3'
            fgColor= '#363636' 
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    }
})