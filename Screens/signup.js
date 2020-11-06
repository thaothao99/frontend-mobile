import React, { useState } from 'react'
import { View, Image, StyleSheet, Dimensions, Text } from 'react-native'
import { TextInput, Button, HelperText } from 'react-native-paper'

export default function SignupScreen({ navigation }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const checkPassword = () => {
        return confirmPass !== password
    }
    const singupAcc = () => {
        return true // login success
    }
    const onPressSignup = () => {
        navigation.navigate('Account')
    }
    return (
        <View style={styles.view}>
            <Image
                source={require('../assets/icon.png')}
                style={{ width: 200, height: 200 }}
            ></Image>
            <TextInput
                label="Email"
                value={email}
                onChangeText={text => { setEmail(text) }}
                selectionColor='#111'
                underlineColor='#111'
                style={{ marginTop: 20, height: 60, width: '100%' }}
            ></TextInput>
            <TextInput
                label="Username"
                value={username}
                onChangeText={text => { setUsername(text) }}
                selectionColor='#111'
                underlineColor='#111'
                style={{ marginTop: 20, height: 60, width: '100%' }}
            ></TextInput>

            <TextInput
                label="Password"
                value={password}
                onChangeText={text => { setPassword(text) }}
                secureTextEntry={true}
                selectionColor='#111'
                underlineColor='#111'
                style={{ marginTop: 20, height: 60, width: '100%' }}

            ></TextInput>
            <TextInput
                label="New Password"
                value={confirmPass}
                onChangeText={text => { setConfirmPass(text) }}
                secureTextEntry={true}
                selectionColor='#111'
                underlineColor='#111'
                style={{ marginTop: 20, height: 60, width: '100%' }}
            ></TextInput>
            <HelperText type='error' visible={checkPassword()}>The password confirmation does not match!</HelperText>

            <Button
                mode='contained'
                style={{ backgroundColor: '#313131', marginTop: 20, width: '100%', borderRadius: 10 }}
                onPress={() => onPressSignup()}
            >Signup</Button>

            <View style={styles.viewBot}>
                <View>
                    <Text onPress={() => navigation.navigate('Login')}>Already have an account?</Text>
                </View>
            </View>
            <HelperText type='error' visible={false}>Email has been existed!</HelperText>
        </View>

    )
}
const styles = StyleSheet.create({
    view: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5151'
    },
    viewBot: {
        width: '100%',
        flexDirection: 'row',
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})