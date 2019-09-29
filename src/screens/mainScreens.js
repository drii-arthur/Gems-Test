import React from 'react'
import { View, Text, StyleSheet, Dimensions, StatusBar } from 'react-native'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import Icon from 'react-native-vector-icons/Ionicons'

import Header from '../components/header'
import HomeScreen from '../screens/home'
import DealsScreen from '../screens/deals'
import FinanceScreen from '../screens/finance'
import WalletScreen from '../screens/wallet'
import HistoryScreen from '../screens/history'

class MainScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            routes: [
                { key: 'Home', title: 'Home', icon: 'md-radio-button-on' },
                { key: 'Deals', title: 'Deals', icon: 'md-basket' },
                { key: 'Finance', title: 'Finance', icon: 'md-today' },
                { key: 'Wallet', title: 'Wallet', icon: 'md-wallet' },
                { key: 'History', title: 'History', icon: 'md-stats' }
            ]
        }
    }

    _renderIcon = ({ route, color }) => (
        <Icon name={route.icon} size={20} color={'grey'} style={{ marginBottom: 10 }} />
    );

    render() {
        return (
            <View style={style.container}>
                <StatusBar backgroundColor='#422575' />
                <Header />
                <TabView style={{ backgroundColor: '#fff' }}
                    navigationState={this.state}
                    renderScene={SceneMap({
                        Home: HomeScreen,
                        Deals: DealsScreen,
                        Finance: FinanceScreen,
                        Wallet: WalletScreen,
                        History: HistoryScreen
                    })}
                    onIndexChange={index => this.setState({ index })}
                    initialLayout={{ width: Dimensions.get('window').width }}
                    renderTabBar={props =>
                        <TabBar
                            {...props}
                            indicatorStyle={{ backgroundColor: 'none' }}
                            style={style.tabNav}
                            labelStyle={style.labelStyle}
                            renderIcon={this._renderIcon}
                            inActiveColor='#fff'
                            swipeEnabled={true}
                        />
                    }
                />
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabNav: {
        backgroundColor: '#4d2a85',
        paddingVertical: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#7f8c8d',
        elevation: 0
    },
    labelStyle: {
        fontSize: 10,
        color: '#7f8c8d',
        fontWeight: '700'
    }
})

export default MainScreen