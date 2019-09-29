import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Banner from '../components/banner';
import Cards from '../components/card'

export default class DealsScreen extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                {/* content search */}
                <View style={styles.search}>
                    <TextInput
                        placeholder='Cari Merchant'
                        style={styles.inputSearch}
                    />
                    <Icon name='sale' size={40} color='#04b4b9' />
                </View>

                <View style={styles.banner}>
                    <View style={styles.title}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 16 }}>Cashback Lagi dan Lagi</Text>
                            <Text style={{ color: '#CAD3C8' }}>Serbu Berbagai promo terbaru OVO</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#04b4b9', fontSize: 12 }}>lihat semua</Text>
                        </View>
                    </View>

                    <Banner />

                </View>

                <View style={[styles.banner, {
                    marginTop: 0
                }]}>
                    <View style={styles.title}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 16 }}>Kolom Kebahagiaan</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#04b4b9', fontSize: 12 }}>lihat semua</Text>
                        </View>
                    </View>

                    <Cards />

                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CAD3C8',
    },
    search: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#fff'
    },
    inputSearch: {
        backgroundColor: '#CAD3C8',
        width: '85%',
        height: 40,
        borderRadius: 5,
        textAlign: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    banner: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        marginTop: 10,
        borderBottomColor: '#CAD3C8',
        borderBottomWidth: 1
    },
    title: {
        flexDirection: 'row',
        marginBottom: 10,
        paddingHorizontal: 15
    }
})