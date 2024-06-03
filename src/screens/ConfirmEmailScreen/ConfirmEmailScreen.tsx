import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useState } from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../SignUpScreen/SignUpScreen';

export default function ConfirmEmailScreen() {
    const [code, setCode] = useState('');

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    
    const onConfirmPressed = () => {
      navigation.navigate('Home');
    }

    const onSignInPress = () => {
      navigation.navigate('SignIn');
    }

    const onResendPress = () => {
        console.warn('onResendPressed')
    }

    return (
      <ScrollView>  
        <View style={styles.root}>
            <Text style={styles.title}>Confirm your email</Text>

             <CustomInput 
             value={code} 
             onChangeText={setCode} 
             placeholder={'Enter your confirmation code'} 
             secureTextEntry={undefined}
             />

             <CustomButton 
               onPress={onConfirmPressed} 
               text='Confirm' 
               type='PRIMARY'
             />

             <CustomButton 
               onPress={onResendPress} 
               text="Resend Code" 
               type='SECONDARY'
             />

             <CustomButton 
               onPress={onSignInPress} 
               text="Back to Sign In" 
               type='TERTIARY'
             />

        </View>
      </ScrollView> 
    ) 
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
        color: '#051C60'
    },
    text: {
        color: 'grey',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075'
    }
    
})