import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons'

const { height } = Dimensions.get('window')
export default class FinanceScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={{ flex: 1, marginRight: 10 }}>
                        <Text style={styles.textUpgrade}><Icon name='chart' size={24} color='#fff' /> Upgrade OVO Premier</Text>
                        <Text style={styles.desc}>Nikmati fitur transfer,Atur Budget,
                            dan Batas Saldo sampai dengan rp10.000.000
                        </Text>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>
                                MULAI
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name='arrow-up' size={60} color='#fff' />
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15
    },
    content: {
        height: height / 3,
        backgroundColor: '#0fb9b1',
        borderRadius: 5,
        padding: 15,
        flexDirection: 'row'
    },
    textUpgrade: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '700',
        marginBottom: 20,
    },
    desc: {
        color: '#fff'
    },
    btn: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 25,
        width: 100,
        alignItems: 'center',
        paddingVertical: 5,
        marginTop: 50
    },
    btnText: {
        color: '#0fb9b1',
        fontSize: 14
    }
})