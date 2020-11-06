import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import InforAccount from '../Components/inforAccount'
import MenuAcc from '../Components/menuAcc'
import LoginScreen from './login'
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from './signup'

function AccountScreen({ navigation }) {
    const navigate = string => navigation.navigate(string)
    return (
        <View style={styles.View}>
            <InforAccount navigate={navigate}></InforAccount>
            <MenuAcc></MenuAcc>
        </View>)
}
const HomeStack = createStackNavigator();
export default function HomeStackScreen() {
    return (
        <HomeStack.Navigator headerMode="none" initialRouteName="Account">
            <HomeStack.Screen name="Account" component={AccountScreen} />
            <HomeStack.Screen name="Login" component={LoginScreen} />
            <HomeStack.Screen name="Signup" component={SignupScreen}></HomeStack.Screen>
        </HomeStack.Navigator>
    );
}

const styles = StyleSheet.create({
    View: {
        flex: 1,
        flexDirection: 'column',
        height: Dimensions.get('window').height,
        backgroundColor: '#5151'

    },
})