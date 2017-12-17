import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import AppReducer from './reducers'
import AppWithNavigationState from './navigators/AppNavigator'

class App extends Component {
  store = createStore(AppReducer, {}, applyMiddleware(ReduxThunk))

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

export default App
