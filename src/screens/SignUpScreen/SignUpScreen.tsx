import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useState } from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignButtons from '../../components/SocialSignInButtons/SocialSignButtons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Home: undefined;
    SignIn: undefined;
    SignUp: undefined;
    ConfirmEmail: undefined;
    ForgotPassword: undefined;
    NewPassword: undefined; // Added NewPassword screen
  };


export default function SignUpScreen() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
 

    const onRegisterPressed = () => {
        navigation.navigate('ConfirmEmail');
    }

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    }

    const onTermsOfUsePressed = () => {
        console.warn('onTermsOfUsePressed')
    }

    const onPrivacyPressed = () => {
        console.warn('onPrivacyPressed')
    }

    return (
      <ScrollView>  
        <View style={styles.root}>
            <Text style={styles.title}>Create an account</Text>

             <CustomInput 
             value={username} 
             onChangeText={setUsername} 
             placeholder={'Username'} 
             secureTextEntry={undefined}
             />

             <CustomInput 
             value={email} 
             onChangeText={setEmail} 
             placeholder={'Email'} 
             secureTextEntry={undefined}
             />

             <CustomInput 
             value={password} 
             onChangeText={setPassword} 
             placeholder={'Password'} 
             secureTextEntry={true}
             />

             <CustomInput 
             value={repeatPassword} 
             onChangeText={setRepeatPassword} 
             placeholder={'Repeat Password'} 
             secureTextEntry={true}
             />

             <CustomButton 
               onPress={onRegisterPressed} 
               text='Register' 
               type='PRIMARY'
             />

             <Text style={styles.text}>
                By registering, you confrim that you accept our 
                <Text style={styles.link} onPress={onTermsOfUsePressed}> Terms of Use</Text> and 
                <Text style={styles.link} onPress={onPrivacyPressed}> Privacy Policy</Text>
             </Text>

             <SocialSignButtons/>

             <CustomButton 
               onPress={onSignInPress} 
               text="Have an account? Sign In" 
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