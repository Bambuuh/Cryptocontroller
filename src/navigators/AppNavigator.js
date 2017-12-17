import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'

import Currencies from '../components/scenes/Currencies'
import CurrencyDetails from '../components/scenes/CurrencyDetails'

export const AppNavigator = StackNavigator(
    {
        Currencies: { screen: Currencies },
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
