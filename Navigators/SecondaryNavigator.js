import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import BlockchainCourse from "../screens/BloackchainCourse";
import Myscreen from "../screens/Myscreen";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function SecondaryNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "tomato",
        // tabBarActiveBackgroundColor: "black",
        tabBarStyle: {
          backgroundColor: "#f8f9fa",
          borderTopWidth: 0,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Courses"
        component={BlockchainCourse}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="book" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Myscreen"
        component={Myscreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
