import { StyleSheet } from "react-native"

import Colors from "/configs/Colors"
import { fontSizer, getScreenHeight, getScreenWidth, responsiveH, responsiveW } from "/utils/dimension"

export const WIDTH = getScreenWidth(1)
const HEIGHT = getScreenHeight(1)

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    padding: 48,
  },
  text: {
    textAlign: "justify",
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 16,
  },
  button: {
    marginTop: 20,
  },
})
