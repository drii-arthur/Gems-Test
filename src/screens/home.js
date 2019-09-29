import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import ContentFeatures from '../components/contentFeatures'
import Banner from '../components/banner'


const { width, height } = Dimensions.get('window')
export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.ovoCash}>
                    <View style={styles.ovoCashLeft}>
                        <Text style={styles.textOvoCash}>OVO CASH</Text>
                        <Text style={styles.textRp}>Rp</Text>
                        <Text style={styles.textTotalRp}>6.000.000</Text>
                        <Text style={styles.textOvoPoint}>OVO POINT <Text style={styles.textTotalOvoPoint}>500.000</Text></Text>
                    </View>
                    <View style={styles.ovoCashRight}>
                        <View style={{ height: 35, justifyContent: 'center' }}>
                            <Icon name={'md-refresh'} size={28} color='#fff' />
                        </View>
                        <TouchableOpacity style={styles.btnTopUp}>
                            <Text style={styles.textTopUp}>TOP UP</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={styles.con}>
                    <View style={styles.wrapperContent}>
                        <View style={styles.content}>
                            <Icon name={'md-log-in'} size={28} color='#4d2a85' />
                            <Text style={styles.text}>Transfer</Text>
                        </View>
                        <View style={[styles.content, { borderRightColor: '#7f8c8d', borderRightWidth: 1, borderLeftColor: '#7f8c8d', borderLeftWidth: 1 }]}>
                            <Icon name={'md-qr-scanner'} size={28} color='#4d2a85' />
                            <Text style={styles.text}>Scan</Text>
                        </View>
                        <View style={styles.content}>
                            <Icon name={'ios-contact'} size={28} color='#4d2a85' />
                            <Text style={styles.text}>OVO ID</Text>
                        </View>
                    </View>
                </View>

                <ScrollView style={{ marginTop: 50 }}>
                    <ContentFeatures />
                    <View style={{ paddingBottom: 30 }}>
                        <Banner />
                    </View>
                </ScrollView>

            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ovoCash: {
        height: height / 4.5,
        backgroundColor: '#4d2a85',
        position: 'relative',
        flexDirection: 'row',
        paddingHorizontal: 15
    },
    ovoCashLeft: {
        flex: 1,
        paddingVertical: 15
    },
    ovoCashRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: 35,
        paddingBottom: 50
    },
    textOvoCash: {
        color: '#fff',
        fontSize: 12,
        marginBottom: 5
    },
    textRp: {
        color: 'orange',
        fontSize: 11,
        marginBottom: 0
    },
    textTotalRp: {
        fontSize: 22,
        marginLeft: 15,
        marginTop: -10,
        color: 'orange',
        fontFamily: 'arial',
        marginBottom: 3
    },
    textOvoPoint: {
        fontSize: 12,
        color: '#fff',
    },
    textTotalOvoPoint: {
        color: 'orange',
        fontSize: 12
    },
    btnTopUp: {
        marginLeft: 15,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#04b4b9',
        height: 35,
        borderRadius: 5
    },
    textTopUp: {
        color: '#fff',
        fontSize: 13
    },
    con: {
        position: 'absolute',
        top: 105,
        left: 0,
        height: 70,
        width: '100%',
        backgroundColor: 'transparent',
        paddingHorizontal: 15
    },
    wrapperContent: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        elevation: 3,
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    text: {
        color: '#4d2a85'
    },


})