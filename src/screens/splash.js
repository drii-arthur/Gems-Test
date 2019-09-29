import React from 'react'
import { View, ImageBackground, ActivityIndicator, StatusBar } from 'react-native'

const SplashScreen = () => {
    return (
        <ImageBackground
            source={{ uri: 'https://i2.wp.com/vudies.com/wp-content/uploads/2019/04/15.jpg' }}
            style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
        >
            <StatusBar backgroundColor='#422575' />
            <ActivityIndicator size='large' color='#04b4b9' />
        </ImageBackground>
    )
}

export default SplashScreen