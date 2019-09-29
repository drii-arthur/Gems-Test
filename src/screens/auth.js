import React from 'react';
import { View, Text, StatusBar, StyleSheet, KeyboardAvoidingView, Keyboard } from 'react-native'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import { withNavigation } from 'react-navigation'

class AuthScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            code: '',
        }
    }

    pinInput = React.createRef();
    _checkCode = (code) => {
        if (code == '1234') {
            this.props.navigation.navigate('Main')
        } else {
            this.pinInput.current.shake()
                .then(() => this.setState({ code: '' }))
        }
    }


    render() {

        const { code } = this.state
        return (
            <View style={styles.continer}>
                <StatusBar backgroundColor='#422575' />
                <Text style={styles.text}>Masukan Security Code Anda</Text>


                <SmoothPinCodeInput
                    placeholder={<View style={{
                        width: 7,
                        height: 7,
                        borderRadius: 25,
                        backgroundColor: 'transparent',
                        borderColor: '#fff',
                        borderWidth: 1
                    }}></View>}
                    mask={<View style={{
                        width: 7,
                        height: 7,
                        borderRadius: 25,
                        backgroundColor: '#fff',
                    }}></View>}
                    ref={this.pinInput}
                    keyboardType='numeric'
                    autoFocus={true}
                    maskDelay={100}
                    password={true}
                    cellStyle={null}
                    cellStyleFocused={null}
                    onFulfill={this._checkCode}
                    value={code}
                    onTextChange={code => this.setState({ code })}

                />


                <Text style={styles.forgotPassword}>LUPA SECURITY CODE?</Text>

            </View>

        )
    }
}
export default withNavigation(AuthScreen)

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        backgroundColor: '#4d2a85',
        alignItems: 'center',
        paddingTop: 50
    },
    text: {
        color: '#fff',
        fontSize: 15
    },
    forgotPassword: {
        color: '#04b4b9',
        fontSize: 15,
        fontWeight: '700'
    }
})