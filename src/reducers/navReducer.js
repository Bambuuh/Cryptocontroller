import { AppNavigator } from '../navigators/AppNavigator'
import { NavigationActions } from 'react-navigation'

const startScreen = AppNavigator.router.getActionForPathAndParams('Currencies')
const initialNavState = AppNavigator.router.getStateForAction(startScreen)

export default (state = initialNavState, action) => {
    let nextState = AppNavigator.router.getStateForAction(action, state)
    return nextState || state
}