import React, { useState } from 'react'
import { View, Image, StyleSheet, Text, Linking } from 'react-native'
import { TextInput, Button, HelperText } from 'react-native-paper'
import { callApi, API_URL } from '../api'
export default function LoginScreen({ navigation }) {
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
                        navigation.navigate('Account')
                    }
                })

        }
    }
    const onPressLoginGG = () => {
        // callApi('get', 'auth/google', null)
        // const endpointGG = 'auth/google'
        // return Linking.openURL(`${API_URL}/${endpointGG}`)
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
                    <Text>Forgot your password?</Text>
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