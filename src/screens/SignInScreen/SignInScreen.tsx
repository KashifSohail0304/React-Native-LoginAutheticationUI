import { StyleSheet, Text, View, Image, useWindowDimensions, ScrollView } from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useState } from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignButtons from '../../components/SocialSignInButtons/SocialSignButtons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../SignUpScreen/SignUpScreen';

export default function SignInScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions(); 
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const onSignInPressed = () => {
      //validate user
        navigation.navigate('Home');
    }

    const onForgotPasswordPressed = () => {
      navigation.navigate('ForgotPassword');
    }

    const onSignUpPress = () => {
        navigation.navigate('SignUp')
    }

    return (
      <ScrollView>  
        <View style={styles.root}>
            <Image
             source={{uri: 'https://www.igmguru.com/blog/wp-content/uploads/2024/05/What-Is-React-Native.png'}}
             style={[styles.logo , {height: height*0.3}]} 
             resizeMode='contain'/>

             <CustomInput 
             value={username} 
             onChangeText={setUsername} 
             placeholder={'Username'} 
             />

             <CustomInput 
             value={password} 
             onChangeText={setPassword} 
             placeholder={'Password'} 
             secureTextEntry={true}
             />

             <CustomButton 
               onPress={onSignInPressed} 
               text='Sign In' 
               type='PRIMARY'
             />

             <CustomButton 
               onPress={onForgotPasswordPressed} 
               text='Forgot Password' 
               type='TERTIARY'
             />
             
             <SocialSignButtons/>

             <CustomButton 
               onPress={onSignUpPress} 
               text="Don't have an account? Create One" 
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
    logo: {
        width: '70%', //responsive
        maxWidth: 300,
        maxHeight: 200,
    }
})