import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native'
import { Avatar, Button } from 'react-native-paper'
const accHeader = require('../assets/acc-header.png')
export default function InforAccount({ navigate }) {
    // const { navigate } = props
    const onPressLogin = () => {
        // console.log(navigate)
        navigate('Login')
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={accHeader} style={styles.image}>
                <Avatar.Icon
                    style={{ backgroundColor: '#ffff' }}
                    size={80}
                    icon='account'
                />
                <Button
                    mode='contained'
                    style={{ backgroundColor: '#313131', marginTop: 20, width: 150, borderRadius: 10 }}
                    onPress={() => onPressLogin()}
                >Login</Button>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height / 3,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: 'center',
        alignItems: 'center'
    },
})