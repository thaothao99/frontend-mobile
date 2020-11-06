import React, { useState } from 'react'
import { View, Image, StyleSheet, Dimensions, Text } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

export default function LoginScreen() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

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
            <Button
                mode='contained'
                style={{ backgroundColor: '#313131', marginTop: 20, width: '100%', borderRadius: 10 }}
            >Login</Button>

            <View style={styles.viewBot}>
                <View>
                    <Text>Forgot your password?</Text>
                </View>
                <View>
                    <Button
                        mode='contained'
                        style={{ backgroundColor: '#313131', marginTop: 20, width: 150, borderRadius: 10, }}
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