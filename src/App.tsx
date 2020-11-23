import "react-native-gesture-handler"

import React from "react"
import AppNavigator from "/navigators"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { persistor, store } from "/redux/store"

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  )
}

export default Root
