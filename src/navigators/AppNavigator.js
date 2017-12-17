import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation'

import CurrenciesMonth from '../components/scenes/currencies/CurrenciesMonth'
import CurrenciesWeek from '../components/scenes/currencies/CurrenciesWeek'
import CurrencyDetails from '../components/scenes/CurrencyDetails'

const HomeScreenNavigator = TabNavigator(
    {
        Week: { screen: CurrenciesWeek },
        Month: { screen: CurrenciesMonth }
    }, {
        initialRouteName: 'Week',
        tabBarPosition: 'top',
        tabBarOptions: {
            activeTintColor: '#2980b9',  // Color of tab when pressed
            inactiveTintColor: '#bdc3c7', // Color of tab when not pressed
            labelStyle: {
                fontSize: 20,
            },
            style: {
                backgroundColor: '#fff', // Makes Android tab bar white instead of standard blue
                height: 30
            },
            indicatorStyle: {
                borderBottomColor: '#2980b9',
                borderBottomWidth: 2,
            }
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
