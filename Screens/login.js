import React, { useContext, useState } from 'react'
import { View, Image, StyleSheet, Text, Linking, AsyncStorage } from 'react-native'
import { TextInput, Button, HelperText } from 'react-native-paper'
import { callApi, API_URL } from '../api'
import * as WebBrowser from 'expo-web-browser';
import MyContext from '../lib/context';

export default function LoginScreen({ navigation }) {
    const { isLogIn, token, reducer, state, dispatch } = useContext(MyContext);
    const handleLogin = () => {
        reducer("setLogIn", true);
    };
    const handleTokenUseReducer = (token) => {
        // dispatch({ type: "setToken", value: "token" });
        reducer("setToken", token);

    };

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errVisible, setErrVisible] = useState(false)
    const [textErr, setTextErr] = useState('')
    const onPressLogin = () => {
        // console.log(username, password)
        if (username === '' || password === '') {
            setErrVisible(true)
            setTextErr('Please type your username and password!')
        }
        else {
            const data = { username: username, password: password }
            callApi('post', 'account/login', data)
                .then(resData => {
                    if (resData.statusCode && resData.statusCode === 401) { // loginFail
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
    const onPressLoginGG = async () => {
        try {
            // callApi('get', 'auth/google', null)
            const endpointGG = 'auth/google'
            // const token = await Linking.openURL(`${API_URL}/${endpointGG}`)

            const redirectUrl = await Linking.getInitialURL()

            WebBrowser.openAuthSessionAsync(`${API_URL}/${endpointGG}`, redirectUrl).then((res) => {
                const { url } = res
                const tokenRes = url && url.split('=')[1]
                if (tokenRes && tokenRes === 'false') {
                    setErrVisible(true)
                    setTextErr('Email not found. Please sign up!')
                }
                else {
                    handleLogin()
                    handleTokenUseReducer(tokenRes)
                    navigation.navigate('Account')
                }
            })
            // const { url } = res
            // const tokenRes = url && url.split('=')[1]
            // // console.log(token)
            // if (tokenRes === 'false') {
            //     setErrVisible(true)
            //     setTextErr('Email not found. Please sign up!')
            // }
            // else {
            //     // handleLogin()
            //     // handleTokenUseReducer()
            //     console.log(token, tokenRes)
            //     // navigation.navigate('Account')
            //     // AsyncStorage.setItem('token', token).then(() => navigation.navigate('Account'))
            //     // console.log(await AsyncStorage.getItem('token'))
            //     // dispatch(userAction.login(token))
            // }

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={styles.view}>
            <Image
                source={require('../assets/icon.png')}
                style={{ width: 200, height: 200 }}
            ></Image>
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
            <Button
                mode='contained'
                style={{ backgroundColor: '#313131', marginTop: 20, width: '100%', borderRadius: 10 }}
                onPress={() => onPressLogin()}
            >Login</Button>
            <Button
                mode='contained'
                style={{ backgroundColor: '#313131', marginTop: 20, width: '100%', borderRadius: 10 }}
                icon='google'
                onPress={() => onPressLoginGG()}
            >Login by Google</Button>
            <HelperText type="error" visible={errVisible}>{textErr}</HelperText>

            <View style={styles.viewBot}>
                <View>
                    <Text

                    >Forgot your password?</Text>
                </View>
                <View>
                    <Button
                        mode='contained'
                        style={{ backgroundColor: '#313131', marginTop: 20, width: 150, borderRadius: 10, }}
                        onPress={() => navigation.navigate('Signup')}
                    >Signup</Button>

                </View>
            </View>
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