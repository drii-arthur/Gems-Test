import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainScreen from '../screens/mainScreens'
import HomeScreen from '../screens/home'
import DealsScreen from '../screens/deals'
import FinanceScreen from '../screens/finance'
import AuthScreen from '../screens/auth'
import WalletScreen from '../screens/wallet'
import HistoryScreen from '../screens/history'
import SplashScreen from '../screens/splash'

const AppStack = createStackNavigator({
    Main: { screen: MainScreen },
    Home: { screen: HomeScreen },
    Deals: { screen: DealsScreen },
    Finance: { screen: FinanceScreen },
    Wallet: { screen: WalletScreen },
    History: { screen: HistoryScreen },
}, {
    headerMode: 'none'
})

const authStack = createStackNavigator({
    PinCode: AuthScreen,
}, {
    headerMode: 'none'
})

const createSwitch = createSwitchNavigator({
    // authScreen: { screen: AuthScreen },
    Splash: { screen: SplashScreen },
    App: AppStack,
    Auth: authStack,

},
    {
        initialRouteName: 'Auth'

    })

export default AppNavigator = createAppContainer(createSwitch)