import { Indicator } from "/components"
import React, { useEffect } from "react"
import { View } from "react-native"

import styles from "./styles"
import { useNavigation } from "@react-navigation/native"
import Routes from "/navigators/Routes"
import useSystem from "/utils/hook/useSystem"

const Splash = () => {
  const navigator = useNavigation()
  const [, initSystem] = useSystem()

  useEffect(() => {
    // initSystem()
    // setTimeout(() => navigator.navigate(Routes.AUTH), 2000)
    navigator.navigate(Routes.AUTH)
  }, [navigator])

  return <View style={styles.container}></View>
}

export default Splash
