import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.logo}>
                    <Image source={require('../assets/Icons/ovo_logo.png')} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name={'ios-notifications'} size={24} color="grey" style={{ marginRight: 20 }} />
                    <Icon name={'ios-settings'} size={24} color="grey" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#4d2a85',
        paddingRight: 15,
        paddingLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        flex: 1
    }
})