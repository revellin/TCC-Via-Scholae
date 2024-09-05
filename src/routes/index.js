import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
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


export const Routes = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator>
            {/* Defini;'ao das rotas */}
            <Stack.Screen name="Splash" component={Initial} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} />
            <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
            <Stack.Screen name="Message" component={Message} options={{ headerShown: false }} />
            <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
            <Stack.Screen name="Accessibility" component={Accessibility} options={{ headerShown: false }} />
            <Stack.Screen name="YourAccount" component={YourAccount} options={{ headerShown: false }} />
            <Stack.Screen name="Language" component={Language} options={{ headerShown: false }} />
            <Stack.Screen name="Theme" component={Theme} options={{ headerShown: false }} />
            <Stack.Screen name="UpdatePassword" component={UpdatePassword} options={{ headerShown: false }} />
            <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
            <Stack.Screen name="EditEmail" component={EditEmail} options={{ headerShown: false }} />
            <Stack.Screen name="EditName" component={EditName} options={{ headerShown: false }} />
            <Stack.Screen name="EditPhone" component={EditPhone} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
  ) 
}
