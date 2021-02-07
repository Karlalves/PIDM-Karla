import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

function Home() {
  const { navigate } = useNavigation();
  function handleNavigationCadastro() {
    navigate("Cadastro");
  }

  function handleNavigationIMC() {
    navigate("IMC");
  }

  function handleNavigationSobre() {
    navigate("Sobre");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Calculadora IMC {"\n"}
        <Text style={styles.title}>O que deseja fazer?</Text>
      </Text>
      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigationCadastro}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Text style={styles.buttonText}>Cadastro</Text>
        </RectButton>
        <RectButton
          onPress={handleNavigationIMC}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Text style={styles.buttonText}>IMC</Text>
        </RectButton>
      </View>
      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigationSobre}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Text style={styles.buttonText}>Sobre</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default Home;
