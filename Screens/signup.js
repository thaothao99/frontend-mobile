import React, { useContext, useState } from 'react'
import { View, Image, StyleSheet, Dimensions, Text } from 'react-native'
import { TextInput, Button, HelperText } from 'react-native-paper'
import { callApi } from '../api'
import MyContext from '../lib/context'

export default function SignupScreen({ navigation }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [errVisible, setErrVisible] = useState(false)
    const [textErr, setTextErr] = useState('')
    const { isLogIn, token, reducer, state, dispatch } = useContext(MyContext);
    const handleLogin = () => {
        reducer("setLogIn", true);
    };
    const handleTokenUseReducer = (token) => {
        // dispatch({ type: "setToken", value: "token" });
        reducer("setToken", token);

    };

    const checkPassword = () => {
        return confirmPass && confirmPass !== password
    }
    const singupAcc = () => {
        return true // login success
    }
    const onPressSignup = () => {
        if (username === '' || password === '' || email === '' || confirmPass === '') {
            setErrVisible(true)
            setTextErr('Please enter all required information!')
        }
        else {
            const data = { username, password, email }
            callApi('post', 'account/create', data)
                .then(resData => {
                    if (resData.statusCode && resData.statusCode !== 200) { // singupfail
                        setErrVisible(true)
                        setTextErr(resData.message)
                    }
                    else {
                        const { token } = resData
                        handleLogin()
                        handleTokenUseReducer(token)
                        navigation.navigate('Account')
                    }
                })
        }
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
                autoCapitalize="none"
            ></TextInput>
            <TextInput
                label="Username"
                value={username}
                onChangeText={text => { setUsername(text) }}
                selectionColor='#111'
                underlineColor='#111'
                style={{ marginTop: 20, height: 60, width: '100%' }}
                autoCapitalize="none"
            ></TextInput>

            <TextInput
                label="Password"
                value={password}
                onChangeText={text => { setPassword(text) }}
                secureTextEntry={true}
                selectionColor='#111'
                underlineColor='#111'
                style={{ marginTop: 20, height: 60, width: '100%' }}
                autoCapitalize="none"
            ></TextInput>
            <TextInput
                label="New Password"
                value={confirmPass}
                onChangeText={text => { setConfirmPass(text) }}
                secureTextEntry={true}
                selectionColor='#111'
                underlineColor='#111'
                style={{ marginTop: 20, height: 60, width: '100%' }}
                autoCapitalize="none"
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
            <HelperText type='error' visible={errVisible}>{textErr}</HelperText>
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