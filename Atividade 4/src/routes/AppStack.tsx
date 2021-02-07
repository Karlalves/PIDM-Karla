import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

import Home from '../pages/home'
import Cadastro from "../pages/cadastro";
import IMC from "../pages/imc";
import Sobre from "../pages/sobre";

export default function AppStack() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#f2f3f5" },
        }}
      >
            <Screen name="Home" component={Home} />
            <Screen name="Cadastro" component={Cadastro} />
            <Screen name="IMC" component={IMC} />
            <Screen name="Sobre" component={Sobre} />
      </Navigator>
    </NavigationContainer>
  );
}
