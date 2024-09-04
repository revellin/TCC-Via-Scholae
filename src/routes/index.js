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
            {/* Define a rota da pagina inicial */}
            <Stack.Screen name="Splash" component={Initial} options={{ headerShown: false }} />

            {/* Define a rota da pagina home */}
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />

            {/* Define a rota da pagina register */}
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />

            {/* Define a rota da pagina account */}
            <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} />

            {/* Define a rota da pagina search */}
            <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />

            {/* Define a rota da pagina message */}
            <Stack.Screen name="Message" component={Message} options={{ headerShown: false }} />

            {/* Define a rota da pagina settings */}
            <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />

            {/* Define a rota da pagina accessibility */}
            <Stack.Screen name="Accessibility" component={Accessibility} options={{ headerShown: false }} />

            {/* Define a rota da pagina youraccount */}
            <Stack.Screen name="YourAccount" component={YourAccount} options={{ headerShown: false }} />

            {/* Define a rota da pagina language */}
            <Stack.Screen name="Language" component={Language} options={{ headerShown: false }} />

            {/* Define a rota da pagina theme */}
            <Stack.Screen name="Theme" component={Theme} options={{ headerShown: false }} />

            {/* Define a rota da pagina updatepassword */}
            <Stack.Screen name="UpdatePassword" component={UpdatePassword} options={{ headerShown: false }} />

            {/* Define a rota da pagina editprofile */}
            <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />

            {/* Define a rota da pagina editemail */}
            <Stack.Screen name="EditEmail" component={EditEmail} options={{ headerShown: false }} />

            {/* Define a rota da pagina editname */}
            <Stack.Screen name="EditName" component={EditName} options={{ headerShown: false }} />

            {/* Define a rota da pagina editphone */}
            <Stack.Screen name="EditPhone" component={EditPhone} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
  ) 
}
