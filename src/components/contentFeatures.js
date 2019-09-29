import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const OvoFeatures = (props) => {
    return (
        <View style={{ width: '25%', alignItems: 'center' }}>
            <View style={styles.wrapperIcon}>
                <Icon name={props.icon} size={24} color='#04b4b9' />
            </View>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

export default class ContentFeatures extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <OvoFeatures icon={'md-flash'} title='PLN' />
                    <OvoFeatures icon={'md-phone-portrait'} title='PULSA' />
                    <OvoFeatures icon={'ios-wifi'} title='Paket Data' />
                    <OvoFeatures icon={'md-phone-portrait'} title='Pasca Bayar' />
                </View>
                <View style={styles.wrapper}>
                    <OvoFeatures icon={'ios-medkit'} title='BPJS' />
                    <OvoFeatures icon={'md-wallet'} title='OVO PayLater' />
                    <OvoFeatures icon={'md-videocam'} title='HOOQ' />
                    <OvoFeatures icon={'ios-more'} title='Read More' />
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 5,
        marginHorizontal: 10
    },
    wrapper: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 18
    },
    wrapperIcon: {
        width: 58,
        height: 58,
        borderWidth: 1,
        borderColor: '#c5f5fb',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 6,
        color: 'grey'
    }

})