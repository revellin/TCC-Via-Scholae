import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  InitialScreen,
  AccountScreen,
  EditProfile,
  HomeScreen,
  MessageScreen,
  RegisterScreen,
  SearchScreen,
  SettingsScreen,
} from '../screens'

export const Routes = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={InitialScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name ="Register" component={RegisterScreen} options={{ headerShown: false }} />
            <Stack.Screen name ="Account" component={AccountScreen} options={{ headerShown: false }} />
            {/*<Stack.Screen name ="Search" component={SearchScreen} options={{ headerShown: false }} />
            <Stack.Screen name ="Message" component={MessageScreen} options={{ headerShown: false }} />
            <Stack.Screen name ="Settings" component={SettingsScreen} options={{ headerShown: false }} />
            <Stack.Screen name ="Edit" component={EditProfile} options={{ headerShown: false }} />*/}
        </Stack.Navigator>
    </NavigationContainer>
  ) 
}
