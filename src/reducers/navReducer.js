import { AppNavigator } from '../navigators/AppNavigator'
import { NavigationActions } from 'react-navigation'

//Force a Init of the main router
let initialNavState = AppNavigator.router.getStateForAction(NavigationActions.init());
  
const firstAction = AppNavigator.router.getActionForPathAndParams("Currencies");
  
//Then calculate the state with a navigate action to the first route, sending the previous initialized state as argument
// initialNavState = AppNavigator.router.getStateForAction(firstAction, initialNavState);

// const startScreen = AppNavigator.router.getActionForPathAndParams('Currencies')
// const initialNavState = AppNavigator.router.getStateForAction(startScreen)

export default (state = initialNavState, action) => {
    let nextState = AppNavigator.router.getStateForAction(action, state)
    return nextState || state
}