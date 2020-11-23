import { StyleSheet } from "react-native"

import Colors from "/configs/Colors"
import { fontSizer, getScreenHeight, getScreenWidth, responsiveH, responsiveW } from "/utils/dimension"

export const WIDTH = getScreenWidth(1)
const HEIGHT = getScreenHeight(1)

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
})
