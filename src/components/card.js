import React from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from 'react-native'

const { height, width } = Dimensions.get('window')

export default class Cards extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product: [
                {
                    id: 1,
                    image: 'http://katalogpromosi.com/wp-content/uploads/2019/03/yoshinoya_26052019.jpg',
                    voucherName: '2 x 2 = Yummy!',
                    brand: 'Yushinoya',
                    available: 11469,
                    price: 94000
                },
                {
                    id: 1,
                    image: 'http://www.rejuve.co.id/files/website_banner_launching_summer_calamansi_fruit_1185x709px_01.jpg',
                    voucherName: '100% Free',
                    brand: 'REJUVE',
                    available: 1669,
                    price: 25000
                },
                {
                    id: 1,
                    image: 'https://i01.appmifile.com/webfile/globalimg/0320/4-16note7/note7-M-sale.jpg',
                    voucherName: 'Get Mi Now!',
                    brand: 'XIAOMI',
                    available: 557,
                    price: 50000
                },
            ]
        }
    }
    render() {
        return (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft: 15 }}>
                {this.state.product.map((item, index) => {
                    return (
                        <View style={styles.wrapper} key={index}>
                            <Image
                                style={styles.image}
                                source={{ uri: `${item.image}` }} />
                            <View style={{ padding: 10 }}>
                                <Text style={styles.voucher}>{item.voucherName}</Text>
                                <Text style={styles.brand}>{item.brand}</Text>
                                <Text style={styles.available}>{item.available}<Text>vouchers</Text></Text>
                                <Text style={styles.price}>Rp {item.price}</Text>
                            </View>
                        </View>
                    )
                })}

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        // height: height / 3.5,
        width: width / 1.5,
        marginRight: 8,
        elevation: 2,
        borderWidth: 1,
        borderColor: '#CAD3C8',
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 6
    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 5,
    },
    voucher: {
        fontSize: 16
    },
    brand: {
        fontSize: 13
    },
    available: {
        fontSize: 12,
        color: '#CAD3C8'
    },
    price: {
        color: '#82589F',
        fontSize: 16
    }
})
