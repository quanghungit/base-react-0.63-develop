import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Routes from "./Routes"

import { Login } from "/screens"
import { Call } from "/screens/Call"

const Stack = createStackNavigator()

const AuthStack = () => (
  <Stack.Navigator headerMode="none" screenOptions={{ gestureEnabled: false }}>
    <Stack.Screen name={Routes.LOGIN} component={Login} />
    <Stack.Screen name={Routes.CALL} component={Call} />
  </Stack.Navigator>
)

export default AuthStack
