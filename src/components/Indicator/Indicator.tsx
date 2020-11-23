import React from "react"
import { ActivityIndicator, View } from "react-native"

import Colors from "/configs/Colors"

import styles from "./styles"
import { Props } from "./types"

const Indicator = (props: Props) => {
  return (
    <View style={[styles.dialog, props.containerStyle]}>
      <View style={styles.wrapDialog}>
        <View style={[styles.wrapLoading, props.wrapLoading]}>
          <ActivityIndicator size={props.size || "small"} color={props.color || Colors.white} />
        </View>
      </View>
    </View>
  )
}

export default Indicator
