import React, { useContext } from 'react'
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native'
import { Avatar, Button } from 'react-native-paper'
import MyContext from '../lib/context';
const accHeader = require('../assets/acc-header.png')
export default function InforAccount({ navigate }) {
    const { isLogIn, token, reducer, state, dispatch } = useContext(MyContext);
    const handleLogout = () => {
        reducer("setLogIn", false);
    };
    const handleTokenUseReducer = () => {
        reducer("setToken", "");
    };

    // const { navigate } = props
    const onPressLogin = async () => {
        console.log(await AsyncStorage.getItem('token'))
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
                {
                    !isLogIn &&
                    <Button
                        mode='contained'
                        style={{ backgroundColor: '#313131', marginTop: 20, width: 150, borderRadius: 10 }}
                        onPress={() => onPressLogin()}
                    >Login</Button>

                }
                {
                    isLogIn &&
                    <Button
                        mode='contained'
                        style={{ backgroundColor: '#313131', marginTop: 20, width: 150, borderRadius: 10 }}
                        onPress={() => { handleLogout(); handleTokenUseReducer() }}
                    >Logout</Button>

                }
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