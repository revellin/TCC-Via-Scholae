import React from 'react'
import {
  IconUser,
  IconHome,
  IconMessage,
  IconSearch,
} from '../../assets/icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  Initial,
  Account,
  EditProfile,
  EditEmail,
  EditName,
  EditPhone,
  Home,
  Message,
  Register,
  Search,
  Settings,
  Accessibility,
  Language,
  Theme,
  YourAccount,
  UpdatePassword,
} from '../screens'

const BottomRoute = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            return <IconHome width={size} height={size} color={color} />
          } else if (route.name === 'Message') {
            return <IconMessage width={size} height={size} color={color} />
          } else if (route.name === 'Search') {
            return <IconSearch width={size} height={size} color={color} />
          } else if (route.name === 'Account') {
            return <IconUser width={size} height={size} color={color} />
          }
        },
        tabBarActiveTintColor: '#272727', // Cor quando selecionado
        tabBarInactiveTintColor: '#838383', // Cor quando não selecionado
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          height: 55, // Altura da barra de navegação
          borderTopWidth: 2,
          borderTopColor: '#E9B224',
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  )
}

export const Routes = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      {/* Definição das rotas */}
      <Stack.Screen
        name="Splash"
        component={Initial}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={BottomRoute}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Account"
        component={BottomRoute}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={BottomRoute}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Message"
        component={BottomRoute}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Accessibility"
        component={Accessibility}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="YourAccount"
        component={YourAccount}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Language"
        component={Language}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Theme"
        component={Theme}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UpdatePassword"
        component={UpdatePassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditEmail"
        component={EditEmail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditName"
        component={EditName}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditPhone"
        component={EditPhone}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
