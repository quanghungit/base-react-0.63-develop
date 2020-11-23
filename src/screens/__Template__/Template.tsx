import React from "react"
import { SafeAreaView } from "react-native"
import { Text } from "/components"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"

const Template = () => {
  const navigator = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Template</Text>
    </SafeAreaView>
  )
}

export default Template
