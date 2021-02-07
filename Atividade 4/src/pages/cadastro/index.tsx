import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { View, Text} from "react-native";

function Cadastro() {
   
    const { navigate } = useNavigation();

    function handleNavigationCadastro() {
      navigate("Cadastro");
    }
  
    
    return(
        <Text>Oii</Text>
    )
}

export default Cadastro;