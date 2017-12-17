import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text } from 'react-native'
import { addNavigationHelpers, StackNavigator, TabNavigator , TabBarTop} from 'react-navigation'

import CurrenciesMonth from '../components/scenes/currencies/CurrenciesMonth'
import CurrenciesWeek from '../components/scenes/currencies/CurrenciesWeek'
import CurrencyDetails from '../components/scenes/CurrencyDetails'

const labelStyle = (props, alignSelf, marginVertical) => ({
    fontSize: 13,
    fontWeight: '600',
    marginHorizontal: 15,
    marginVertical,
    color: props.focused ? props.tintColor : "#929292",
    alignSelf
});
// IndicatorStyle is an absolute positioned View
const indicatorStyle = (props, alignSelf) => ({
    backgroundColor: props.activeTintColor,
    alignSelf: 'flex-end',
});

const HomeScreenNavigator = TabNavigator(
    {
        Week: {
            screen: CurrenciesWeek,
            navigationOptions: {
                tabBarLabel: (props) => (<Text style={labelStyle(props, 'flex-end', 10)}> WEEK </Text>)
            },
        },
        Month: {
            screen: CurrenciesMonth,
            navigationOptions: {
                tabBarLabel: (props) => (<Text style={labelStyle(props, 'flex-start', 10)}> MONTH </Text>)
            }
        }
    }, {
        tabBarComponent: (props)=> <TabBarTop {...props} indicatorStyle={indicatorStyle(props, 'flex-end')} />,
        initialRouteName: 'Week',
        tabBarPosition: 'top',
        tabBarOptions: {
            activeTintColor: '#2980b9',  // Color of tab when pressed
            inactiveTintColor: '#bdc3c7', // Color of tab when not pressed
            style: {
                backgroundColor: '#fff', // Makes Android tab bar white instead of standard blue
            },
        },
    }
)

export const AppNavigator = StackNavigator(
    {
        Currencies: { screen: HomeScreenNavigator, navigationOptions: ({ navigation }) => ({ title: `Top currencies` }) },
        CurrencyDetails: { screen: CurrencyDetails }
    },
    {
        cardStyle: { backgroundColor: 'white' },
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'white',
            },
            headerTintColor: '#555'
        }
    }
)

const AppWithNavigationState = ({ dispatch, nav }) => (<AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />)

AppWithNavigationState.PropTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
}

const mapStateToProps = ({ nav }) => ({ nav })

export default connect(mapStateToProps)(AppWithNavigationState)
