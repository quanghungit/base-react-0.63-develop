import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Routes from "./Routes"
import * as Screens from "../screens"
import { navigationRef } from "./_root_navigator"
import AuthStack from "./auth-navigator"
import TabMainStack from "./main-navigator"

const Stack = createStackNavigator()

const AppNavigator = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator headerMode="none" screenOptions={{ gestureEnabled: false }}>
      <Stack.Screen name={Routes.SPLASH} component={Screens.Splash} />
      <Stack.Screen name={Routes.AUTH} component={AuthStack} />
      <Stack.Screen name={Routes.MAIN} component={TabMainStack} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default AppNavigator
