import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Cabecalho extends Component {
  render() {
    return (
      <View>
        <Text style={styles.titulo}>{this.props.nome}</Text>
        <Text style={styles.subtitulo}>{this.props.curso}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    paddingTop: 10,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitulo: {
    fontSize: 30,
    paddingTop: 10,
    color: "#fff",
  },
});
