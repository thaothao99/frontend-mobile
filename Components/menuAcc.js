import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { Divider, List } from 'react-native-paper'

export default function MenuAcc() {
    return (
        <ScrollView>
            <View style={styles.view}>
                <List.Section style={styles.list}>
                    <List.Item
                        title='Account'
                        titleStyle={{ fontSize: 14 }}
                        left={() => <List.Icon icon='account' />}
                    ></List.Item>
                    <List.Item
                        title='Password'
                        titleStyle={{ fontSize: 14 }}
                        left={() => <List.Icon icon='lock' />}
                    ></List.Item>
                    <Divider style={{ paddingTop: 10, }}></Divider>
                    <List.Item
                        title='Order'
                        titleStyle={{ fontSize: 14 }}
                        left={() => <List.Icon icon='account' />}
                    ></List.Item>
                    <List.Item
                        title='Cart'
                        titleStyle={{ fontSize: 14 }}
                        left={() => <List.Icon icon='shopping' />}
                    ></List.Item>
                    <List.Item
                        title='Language'
                        titleStyle={{ fontSize: 14 }}
                        left={() => <List.Icon icon='account' />}
                    ></List.Item>
                </List.Section>
            </View>
        </ScrollView >
    )
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        width: Dimensions.get('window').width,
        backgroundColor: '#ffffff',
    }
})