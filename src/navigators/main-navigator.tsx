import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Template } from "/screens"
import Icon from "react-native-vector-icons/FontAwesome5"
import Routes from "./Routes"

const Tab = createBottomTabNavigator()

export interface PropsTabBottom {
  name: string
  component: React.ComponentType<any>
  icon: string
  color: string
  displayName: string
}

export const TAB_BOTTOM = () => {
  return [
    {
      displayName: "Trang chủ",
      component: Template,
      icon: "headphones-alt",
      color: "#FFFFFF",
      name: Routes.HOME,
    },
    {
      displayName: "Kết nối",
      component: Template,
      icon: "comment-dots",
      color: "#FFFFFF",
      name: Routes.TEM,
    },
  ]
}

const TabComponent = (props: PropsTabBottom, index: number) => {
  return (
    <Tab.Screen
      key={index.toString()}
      name={props.name}
      component={props.component}
      options={{
        tabBarLabel: props.displayName,
        tabBarIcon: ({ color }) => <Icon name={props.icon} color={color} size={18} />,
      }}
      listeners={{
        focus: () => {},
      }}
    />
  )
}

const TabMainStack = () => {
  return <Tab.Navigator>{TAB_BOTTOM().map((item, index) => TabComponent(item, index))}</Tab.Navigator>
}

export default TabMainStack
