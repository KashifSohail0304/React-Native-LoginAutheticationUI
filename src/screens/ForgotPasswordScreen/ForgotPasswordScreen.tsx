import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useState } from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../SignUpScreen/SignUpScreen';

export default function ForgotPasswordScreen() {
    const [username, setUsername] = useState('');

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    
    const onSendPressed = () => {
        navigation.navigate('NewPassword');
    }

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    }

    return (
      <ScrollView>  
        <View style={styles.root}>
            <Text style={styles.title}>Reset Your Password</Text>

             <CustomInput 
             value={username} 
             onChangeText={setUsername} 
             placeholder={'Username'} 
             secureTextEntry={undefined}
             />

             <CustomButton 
               onPress={onSendPressed} 
               text='Send' 
               type='PRIMARY'
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