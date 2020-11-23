import { StyleSheet } from "react-native"
 
import { getScreenHeight, getScreenWidth } from "/utils/dimension"

export const WIDTH = getScreenWidth(1)
const HEIGHT = getScreenHeight(1)

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
})
