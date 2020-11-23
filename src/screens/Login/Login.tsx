/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useState } from "react"
import { ImageBackground, Keyboard, Pressable, SafeAreaView, Text, TextInput, View } from "react-native"

import styles from "./styles"
import { meeting } from "/apis/auth"
import { BG } from "/assets/images"
import Routes from "/navigators/Routes"

const Login = () => {
  const navigator = useNavigation()

  const [name, setName] = useState<string>("")
  const [code, setCode] = useState<string>("wvr270")

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => {
      //
    })
    const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => {
      //
    })

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [])

  const gotoRoom = async () => {
    try {
      const meet: any = await meeting({
        roomName: code,
      })

      const info = {
        name: meet.token.name,
        roomId: meet.token.roomId,
        roomUrl: meet.token.roomUrl,
      }

      navigator.navigate(Routes.CALL, { info: info })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error, "Looi")
    }
  }

  const onChange = (type: string, value: string) => {
    if (type === "name") {
      setName(value)
    } else if (type === "code") {
      setCode(value)
    }
  }

  return (
    <>
      <ImageBackground source={BG} style={{ width: "100%", height: "100%", opacity: 0.85 }} />
      <View style={{ paddingHorizontal: 20, position: "absolute" }}>
        <Text
          style={{
            fontSize: 26,
            textAlign: "center",
            marginTop: 100,
            paddingHorizontal: 30,
            paddingVertical: 50,
            color: "#fff",
          }}
        >
          Chào mừng bạn đến với O2 Meeting Room
        </Text>

        <TextInput
          placeholder={"Tên bạn "}
          style={{
            borderRadius: 5,
            borderWidth: 0.5,
            borderColor: "#FACC2E",
            paddingVertical: 16,
            marginTop: 30,
            paddingHorizontal: 20,
            backgroundColor: "#FFFFFF",
            opacity: 0.85,
            fontSize: 16,
          }}
          placeholderTextColor="#000"
          onChangeText={(value) => onChange("name", value)}
        />

        <TextInput
          placeholder={"Mã phòng "}
          style={{
            fontSize: 16,
            borderRadius: 5,
            borderWidth: 0.5,
            borderColor: "#FACC2E",
            paddingVertical: 16,
            marginTop: 20,
            paddingHorizontal: 20,
            backgroundColor: "#FFFFFF",
            opacity: 0.85,
          }}
          placeholderTextColor="#000"
          onChangeText={(value) => onChange("code", value)}
        />

        <Pressable
          style={{
            backgroundColor: "#FFBF00",
            paddingHorizontal: 20,
            paddingVertical: 15,
            alignItems: "center",
            marginTop: 50,
            borderRadius: 10,
          }}
          onPress={() => gotoRoom()}
        >
          <Text style={{ fontSize: 16, paddingVertical: 2 }}>Vào phòng</Text>
        </Pressable>
      </View>
    </>
  )
}

export default Login
