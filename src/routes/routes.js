import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home/home'

import Login from '../pages/Login/login'
import newUser from '../pages/User/newUser'
import listUser from '../pages/User/listUser'
import editUser from '../pages/User/editUser'

const MainStack = createStackNavigator()


function MainStackScreens() {
    return (
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen
                    name='HomeScreen'
                    component={Home}
                    options={{ headerShown: false }}
                />
                <MainStack.Screen
                    name='ListUserScreen'
                    component={listUser}
                    options={{ headerShown: false }}
                />
                <MainStack.Screen
                    name='AddUserScreen'
                    component={newUser}
                    options={{ headerShown: false }}
                />
                <MainStack.Screen
                    name='EditUserScreen'
                    component={editUser}
                    options={{ headerShown: false }}
                />




            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackScreens