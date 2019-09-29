import React from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from 'react-native'

const { height, width } = Dimensions.get('window')

export default class Banner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            image: [
                'https://super.mataharimall.com/ovo/img/hero-banner-ovo-point-feb.jpg',
                'https://pulsaseluler.com/blog/wp-content/uploads/Cara-Daftar-Aktivasi-OVO-PayLater-Di-Aplikasi-OVO-1280x720.jpg',
                'https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2019/04/Blog_Makin-Mudah-Dapatkan-Barang-Impian-dengan-Cicilan-OVO-PayLater.jpg',
                'https://ecs7.tokopedia.net/img/blog/promo/2019/05/Feature_940x3391.jpg'
            ]
        }
    }
    render() {
        return (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft: 15 }}>
                {this.state.image.map((item, index) => {
                    return (
                        <View style={styles.wrapper} key={index}>
                            <Image
                                style={styles.image}
                                source={{ uri: `${item}` }} />
                        </View>
                    )
                })}

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: height / 4.5,
        width: width / 1.2,
        marginRight: 8,
        elevation: 5
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    }
})
