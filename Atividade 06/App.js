import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";

import MenuScreen from "./components/MenuScreen";
import AddAlunosScreen from "./components/AddAlunosScreen";
import EditBoardScreen from "./components/EditMenuScreen";
import MenuDatalheScreen from "./components/MenuDetalheScreen";

const RootStack = createStackNavigator(
  {
    Menu: MenuScreen,
    AddAluno: AddAlunosScreen,
    EditMenu: EditBoardScreen,
    MenuDetalhe: MenuDatalheScreen,
  },
  {
    initialRouteName: "Menu",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#777777",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerBackTitle: null,
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
