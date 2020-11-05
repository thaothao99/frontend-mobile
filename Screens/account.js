import React from 'react'
import { StyleSheet, View } from 'react-native'
import InforAccount from '../Components/inforAccount'
import MenuAcc from '../Components/menuAcc'

export default function AccountScreen() {
    return (
        <View style={styles.View}>
            <InforAccount></InforAccount>
            <MenuAcc></MenuAcc>
        </View>)
}
const styles = StyleSheet.create({
    View: {
        // flex: 1,
        // flexDirection: 'column',
    },
})